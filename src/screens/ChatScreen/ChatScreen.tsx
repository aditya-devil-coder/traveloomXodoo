import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './ChatScreen.styles';
import { chatList } from '../../data/messages/MessageData';

const tabs = ['All chats', 'Travelers', 'Support'];

function ChatScreen({ navigation }: any) {
  const [activeTab, setActiveTab] = useState('All chats');
  const [search, setSearch] = useState('');

  const filtered = chatList.filter(c => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase());
    if (activeTab === 'Travelers') return matchSearch && c.type === 'traveler';
    if (activeTab === 'Support') return matchSearch && c.type === 'support';
    return matchSearch;
  });

  const getAvatarIcon = (type: string) => {
    if (type === 'support') return 'headset-mic';
    return 'person';
  };

  const getAvatarStyle = (type: string) => {
    if (type === 'support') return styles.avatarBoxSupport;
    return styles.avatarBoxTraveler;
  };

  const getBadgeStyle = (type: string) => {
    if (type === 'support') return styles.typeBadgeSupport;
    return styles.typeBadgeTraveler;
  };

  const getBadgeLabel = (type: string) => {
    if (type === 'support') return 'Support';
    return 'Traveler';
  };

  return (
    <View style={styles.container}>

      {/* Pink Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Chats</Text>
        <View style={styles.searchRow}>
          <View style={styles.searchBox}>
            <Icon name="search" size={20} color="#fff" style={styles.searchIcon} />
            <TextInput
              placeholder="Search chat"
              placeholderTextColor="rgba(255,255,255,0.7)"
              style={styles.searchInput}
              value={search}
              onChangeText={setSearch}
            />
            <Icon name="arrow-forward" size={20} color="#fff" />
          </View>
          <TouchableOpacity style={styles.addBtn}>
            <Icon name="add" size={24} color="#E8445A" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.tabsRow}>
            {tabs.map(tab => (
              <TouchableOpacity
                key={tab}
                style={styles.tab}
                onPress={() => setActiveTab(tab)}
              >
                <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>
                  {tab}
                </Text>
                {activeTab === tab && <View style={styles.tabUnderline} />}
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.filterBtn}>
          <Icon name="tune" size={22} color="#555" />
        </TouchableOpacity>
      </View>

      {/* Chat List */}
      {filtered.length === 0 ? (
        <View style={styles.emptyContainer}>
          <View style={styles.emptyIconBox}>
            <Icon name="chat-bubble-outline" size={40} color="#E8445A" />
          </View>
          <Text style={styles.emptyTitle}>No chats for now</Text>
          <Text style={styles.emptySubtitle}>
            Read a travel blog and start a conversation with the traveler!
          </Text>
        </View>
      ) : (
        <ScrollView style={styles.chatList} showsVerticalScrollIndicator={false}>
          {filtered.map(chat => (
            <TouchableOpacity
              key={chat.id}
              style={styles.chatItem}
              onPress={() => navigation.navigate('MessageScreen', { chat })}
              activeOpacity={0.85}
            >
              {/* Avatar */}
              <View style={styles.avatarWrapper}>
                <View style={[styles.avatarBox, getAvatarStyle(chat.type)]}>
                  <Icon
                    name={getAvatarIcon(chat.type)}
                    size={26}
                    color={chat.type === 'support' ? '#E8445A' : '#007AFF'}
                  />
                </View>
                {chat.isOnline && <View style={styles.onlineDot} />}
              </View>

              {/* Chat Info */}
              <View style={styles.chatInfo}>
                <View style={styles.chatTopRow}>
                  <View style={styles.chatNameRow}>
                    <Text style={styles.chatName}>{chat.name}</Text>
                    <View style={[styles.typeBadge, getBadgeStyle(chat.type)]}>
                      <Text style={styles.typeBadgeText}>
                        {getBadgeLabel(chat.type)}
                      </Text>
                    </View>
                  </View>
                  <Text style={styles.chatTime}>{chat.time}</Text>
                </View>

                {/* Blog context row for travelers */}
                {chat.type === 'traveler' && chat.blogTitle && (
                  <View style={styles.blogContextRow}>
                    <Icon name="article" size={11} color="#888" />
                    <Text style={styles.blogContextText} numberOfLines={1}>
                      {chat.blogTitle}
                    </Text>
                  </View>
                )}

                <View style={styles.chatBottomRow}>
                  <Text style={styles.chatLastMsg} numberOfLines={1}>
                    {chat.lastMessage}
                  </Text>
                  {chat.unread > 0 && (
                    <View style={styles.unreadBadge}>
                      <Text style={styles.unreadBadgeText}>{chat.unread}</Text>
                    </View>
                  )}
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

export default ChatScreen;