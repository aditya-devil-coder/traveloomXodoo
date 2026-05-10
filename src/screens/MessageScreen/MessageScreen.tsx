import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useRef, useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './MessageScreen.styles';
import {
  predefinedQuestions,
  autoReplies,
  travelerMessages,
  travelerQuickReplies,
  travelerAutoReplies,
  generateBlogContextMessages,
} from '../../data/messages/MessageData';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  time: string;
}

const getTime = () => {
  const now = new Date();
  return `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
};

const supportInitialMessages: Message[] = [
  {
    id: '1',
    text: 'Hi there! 👋 Welcome to Traveloop Support. How can we help you today?',
    isUser: false,
    time: getTime(),
  },
  {
    id: '2',
    text: 'Please select a question below or type your own query.',
    isUser: false,
    time: getTime(),
  },
];

function MessageScreen({ navigation, route }: any) {
  const { chat, fromBlog } = route.params;
  const isSupport = chat.type === 'support';
  const isTraveler = chat.type === 'traveler';

  // ─── Determine initial messages ─────────────────────────────────────────────
  const getInitialMessages = (): Message[] => {
    if (isSupport) return supportInitialMessages;

    if (isTraveler) {
      const userId = chat.userId as string;

      // Coming from a blog — show blog context opener first
      if (fromBlog) {
        const contextMsgs = generateBlogContextMessages(
          chat.name,
          fromBlog.title,
          fromBlog.category,
        );
        // If there are existing messages for this traveler, append them after context
        const existing = travelerMessages[userId] ?? [];
        // De-dup: only append existing if they are NOT already in contextMsgs
        return [...contextMsgs, ...existing];
      }

      // Coming from ChatScreen — load existing convo
      if (travelerMessages[userId]) {
        return travelerMessages[userId];
      }

      // New traveler, no history — generic opener
      const firstName = chat.name.split(' ')[0];
      return [
        {
          id: 'new_1',
          text: `Hey! 👋 I'm ${firstName}. You can ask me anything about my travel experiences!`,
          isUser: false,
          time: getTime(),
        },
      ];
    }

    return supportInitialMessages;
  };

  const [messages, setMessages] = useState<Message[]>(getInitialMessages());
  const [inputText, setInputText] = useState('');
  const [showQuestions, setShowQuestions] = useState(true);
  const flatListRef = useRef<FlatList>(null);

  const quickReplies = isTraveler ? travelerQuickReplies : predefinedQuestions;
  const replies = isTraveler ? travelerAutoReplies : autoReplies;

  useEffect(() => {
    // Scroll to bottom on mount
    setTimeout(() => {
      flatListRef.current?.scrollToEnd({ animated: false });
    }, 200);
  }, []);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      isUser: true,
      time: getTime(),
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setShowQuestions(false);

    setTimeout(() => {
      const replyText =
        replies[text as keyof typeof replies] ||
        (isTraveler
          ? `Great question! Check out the relevant section in my blog on "${chat.blogTitle ?? 'my latest post'}" — I've covered it in detail 📖 Feel free to ask more!`
          : 'Thanks for reaching out! Our support team will get back to you within 24 hours. For urgent issues, call: 1800-XXX-XXXX 📞');

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: replyText,
        isUser: false,
        time: getTime(),
      };
      setMessages(prev => [...prev, botMsg]);
      setTimeout(() => {
        flatListRef.current?.scrollToEnd({ animated: true });
      }, 100);
    }, 800);

    setTimeout(() => {
      flatListRef.current?.scrollToEnd({ animated: true });
    }, 100);
  };

  // ─── Header color — blue for traveler, red for support ──────────────────────
  const headerColor = isTraveler ? '#007AFF' : '#E8445A';
  const accentColor = isTraveler ? '#007AFF' : '#E8445A';

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {/* ── Header ── */}
      <View style={[styles.header, isTraveler && styles.headerHostel]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>

        <View style={styles.headerInfo}>
          <View style={[styles.headerAvatar, isTraveler && styles.headerAvatarHostel]}>
            <Icon
              name={isTraveler ? 'person' : 'support-agent'}
              size={22}
              color={isTraveler ? '#007AFF' : '#E8445A'}
            />
          </View>
          <View>
            <Text style={styles.headerName}>{chat.name}</Text>
            <View style={styles.onlineRow}>
              {chat.isOnline && <View style={styles.onlineDot} />}
              <Text style={styles.onlineText}>
                {chat.isOnline
                  ? 'Online'
                  : isTraveler
                  ? chat.location ?? 'Traveler'
                  : 'Support'}
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity>
          <Icon name="more-vert" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* ── Blog context strip for traveler chats ── */}
      {isTraveler && (chat.blogTitle || fromBlog?.title) && (
        <View style={[styles.hostelStrip, { backgroundColor: '#f0f6ff', borderBottomColor: '#d0e6ff' }]}>
          <Icon name="article" size={14} color="#007AFF" />
          <Text style={[styles.hostelStripText, { color: '#007AFF', flex: 1 }]} numberOfLines={1}>
            {fromBlog?.title ?? chat.blogTitle}
          </Text>
        </View>
      )}

      {/* ── Messages ── */}
      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.messagesList}
        showsVerticalScrollIndicator={false}
        onLayout={() => flatListRef.current?.scrollToEnd({ animated: false })}
        renderItem={({ item }) => (
          <View style={[
            styles.messageBubbleWrapper,
            item.isUser ? styles.userWrapper : styles.botWrapper,
          ]}>
            {!item.isUser && (
              <View style={[styles.botAvatar, isTraveler && styles.botAvatarHostel]}>
                <Icon
                  name={isTraveler ? 'person' : 'support-agent'}
                  size={16}
                  color={isTraveler ? '#007AFF' : '#E8445A'}
                />
              </View>
            )}
            <View style={[
              styles.messageBubble,
              item.isUser ? styles.userBubble : styles.botBubble,
              item.isUser && isTraveler && styles.userBubbleHostel,
            ]}>
              <Text style={[
                styles.messageText,
                item.isUser ? styles.userText : styles.botText,
              ]}>
                {item.text}
              </Text>
              <Text style={[
                styles.messageTime,
                item.isUser ? styles.userTime : styles.botTime,
              ]}>
                {item.time}
              </Text>
            </View>
          </View>
        )}
      />

      {/* ── Quick Replies ── */}
      {showQuestions && (
        <View style={styles.questionsContainer}>
          <Text style={styles.questionsLabel}>
            {isTraveler ? 'Ask about the trip' : 'How can we help?'}
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.questionsScroll}
          >
            {quickReplies.map(q => (
              <TouchableOpacity
                key={q.id}
                style={[styles.questionChip, isTraveler && styles.questionChipHostel]}
                onPress={() => sendMessage(q.text)}
              >
                <Icon name={q.icon} size={14} color={isTraveler ? '#007AFF' : '#E8445A'} />
                <Text style={[styles.questionChipText, isTraveler && styles.questionChipTextHostel]}>
                  {q.text}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}

      {/* ── Input Bar ── */}
      <View style={styles.inputBar}>
        <TouchableOpacity
          style={styles.questionsToggle}
          onPress={() => setShowQuestions(p => !p)}
        >
          <Icon name="help-outline" size={22} color={accentColor} />
        </TouchableOpacity>
        <TextInput
          style={styles.textInput}
          placeholder="Type your message..."
          placeholderTextColor="#aaa"
          value={inputText}
          onChangeText={setInputText}
          multiline
          maxLength={500}
        />
        <TouchableOpacity
          style={[
            styles.sendBtn,
            isTraveler && styles.sendBtnHostel,
            !inputText.trim() && styles.sendBtnDisabled,
          ]}
          onPress={() => sendMessage(inputText)}
          disabled={!inputText.trim()}
        >
          <Icon name="send" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

export default MessageScreen;