import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from 'react-native';
import { useState, useMemo } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './Blogscreen.styles';
import blogs from '../../data/blog/blogdata (1)';
import { buildChatFromBlog } from '../../data/messages/MessageData';

const categories = [
  'All',
  'Adventure',
  'Road Trip',
  'Trekking',
  'Culture & Food',
  'Winter Travel',
  'Budget Travel',
  'Sightseeing',
  'Lakes & Scenic Spots',
  'Bike Trip',
  'Day Trips',
  'Nature & Wildlife',
  'Family Travel',
  'Culture & Festivals',
  'Photography',
  'Wellness & Spirituality',
  'Seasonal Travel',
  'Food & Cuisine',
];

const sortOptions = [
  { label: 'Latest', value: 'latest' },
  { label: 'Oldest', value: 'oldest' },
  { label: 'Quick Reads', value: 'quick' },
];

function BlogScreen({ navigation }: any) {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeSort, setActiveSort] = useState('latest');
  const [showSortMenu, setShowSortMenu] = useState(false);

  const filtered = useMemo(() => {
    let result = [...blogs];

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        b =>
          b.title.toLowerCase().includes(q) ||
          b.author.toLowerCase().includes(q) ||
          b.excerpt.toLowerCase().includes(q) ||
          b.tags.some((t: string) => t.toLowerCase().includes(q)),
      );
    }

    if (activeCategory !== 'All') {
      result = result.filter(b => b.category === activeCategory);
    }

    if (activeSort === 'latest') {
      result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (activeSort === 'oldest') {
      result.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    } else if (activeSort === 'quick') {
      result.sort((a, b) => parseInt(a.readTime) - parseInt(b.readTime));
    }

    return result;
  }, [search, activeCategory, activeSort]);

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  const getCategoryColor = (cat: string) => {
    const colors: Record<string, string> = {
      Adventure: '#FF6B35',
      Trekking: '#2D9B4E',
      'Road Trip': '#6C63FF',
      'Culture & Food': '#E8A020',
      'Winter Travel': '#00ADEF',
      'Budget Travel': '#34C759',
      Sightseeing: '#FF9500',
      'Lakes & Scenic Spots': '#007AFF',
      'Bike Trip': '#FF3B30',
      'Day Trips': '#AF52DE',
      'Nature & Wildlife': '#2D9B4E',
      'Family Travel': '#FF6B6B',
      'Culture & Festivals': '#FF9F0A',
      Photography: '#636366',
      'Wellness & Spirituality': '#BF5AF2',
      'Seasonal Travel': '#30B0C7',
      'Food & Cuisine': '#FF6B35',
    };
    return colors[cat] || '#E8445A';
  };

  // ─── Navigate to MessageScreen with the correct traveler chat ──────────────
  // MessageScreen lives inside the Chat tab stack, so we need to navigate
  // to the Chat tab first, then push MessageScreen inside it.
  const handleChatWithAuthor = (blog: typeof blogs[0]) => {
    const chat = buildChatFromBlog(blog);
    navigation.navigate('MessageScreen', { chat, fromBlog: blog });
  };

  const renderFeaturedBlog = (blog: typeof blogs[0]) => (
    <TouchableOpacity
      style={styles.featuredCard}
      onPress={() => navigation.navigate('BlogDetailScreen', { blog })}
      activeOpacity={0.9}
    >
      <Image source={{ uri: blog.coverImage }} style={styles.featuredImage} />
      <View style={styles.featuredOverlay} />
      <View style={styles.featuredContent}>
        <View style={[styles.categoryPill, { backgroundColor: getCategoryColor(blog.category) }]}>
          <Text style={styles.categoryPillText}>{blog.category}</Text>
        </View>
        <Text style={styles.featuredTitle} numberOfLines={2}>{blog.title}</Text>
        <View style={styles.featuredMeta}>
          <Icon name="person" size={13} color="rgba(255,255,255,0.85)" />
          <Text style={styles.featuredMetaText}>{blog.author}</Text>
          <View style={styles.metaDot} />
          <Icon name="schedule" size={13} color="rgba(255,255,255,0.85)" />
          <Text style={styles.featuredMetaText}>{blog.readTime}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderBlogCard = ({ item: blog }: { item: typeof blogs[0] }) => (
    <TouchableOpacity
      style={styles.blogCard}
      onPress={() => navigation.navigate('BlogDetailScreen', { blog })}
      activeOpacity={0.85}
    >
      <Image source={{ uri: blog.coverImage }} style={styles.blogCardImage} />
      <View style={styles.blogCardContent}>
        <View style={styles.blogCardTop}>
          <View style={[styles.categoryPillSmall, { backgroundColor: getCategoryColor(blog.category) + '20' }]}>
            <Text style={[styles.categoryPillSmallText, { color: getCategoryColor(blog.category) }]}>
              {blog.category}
            </Text>
          </View>
          <Text style={styles.blogCardReadTime}>{blog.readTime}</Text>
        </View>
        <Text style={styles.blogCardTitle} numberOfLines={2}>{blog.title}</Text>
        <Text style={styles.blogCardExcerpt} numberOfLines={2}>{blog.excerpt}</Text>
        <View style={styles.blogCardFooter}>
          <View style={styles.blogCardAuthorRow}>
            <View style={styles.authorAvatar}>
              <Text style={styles.authorAvatarText}>
                {blog.author.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}
              </Text>
            </View>
            <View>
              <Text style={styles.blogCardAuthor}>{blog.author}</Text>
              <Text style={styles.blogCardDate}>{formatDate(blog.date)}</Text>
            </View>
          </View>

          {/* ✅ Chat button — opens that specific author's chat */}
          <TouchableOpacity
            style={styles.chatWithBtn}
            onPress={() => handleChatWithAuthor(blog)}
          >
            <Icon name="chat-bubble-outline" size={14} color="#E8445A" />
            <Text style={styles.chatWithBtnText}>Chat</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  const featuredBlog = filtered[0];
  const restBlogs = filtered.slice(1);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.headerGreeting}>Explore</Text>
            <Text style={styles.headerTitle}>Travel Blogs ✈️</Text>
          </View>
          <TouchableOpacity style={styles.notifBtn}>
            <Icon name="notifications-none" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.searchBox}>
          <Icon name="search" size={20} color="#E8445A" style={styles.searchIcon} />
          <TextInput
            placeholder="Search destinations, authors, topics..."
            placeholderTextColor="#bbb"
            style={styles.searchInput}
            value={search}
            onChangeText={setSearch}
          />
          {search.length > 0 && (
            <TouchableOpacity onPress={() => setSearch('')}>
              <Icon name="close" size={18} color="#aaa" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <FlatList
        data={restBlogs}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <>
            <View style={styles.categorySection}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryRow}>
                {categories.map(cat => (
                  <TouchableOpacity
                    key={cat}
                    style={[styles.categoryTab, activeCategory === cat && styles.categoryTabActive]}
                    onPress={() => setActiveCategory(cat)}
                  >
                    <Text style={[styles.categoryTabText, activeCategory === cat && styles.categoryTabTextActive]}>
                      {cat}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>

            <View style={styles.resultsRow}>
              <Text style={styles.resultsCount}>
                {filtered.length} {filtered.length === 1 ? 'story' : 'stories'}
                {activeCategory !== 'All' ? ` in ${activeCategory}` : ''}
              </Text>
              <View>
                <TouchableOpacity
                  style={styles.sortBtn}
                  onPress={() => setShowSortMenu(!showSortMenu)}
                >
                  <Icon name="sort" size={16} color="#555" />
                  <Text style={styles.sortBtnText}>
                    {sortOptions.find(s => s.value === activeSort)?.label}
                  </Text>
                  <Icon name={showSortMenu ? 'expand-less' : 'expand-more'} size={16} color="#555" />
                </TouchableOpacity>
                {showSortMenu && (
                  <View style={styles.sortDropdown}>
                    {sortOptions.map(opt => (
                      <TouchableOpacity
                        key={opt.value}
                        style={[styles.sortOption, activeSort === opt.value && styles.sortOptionActive]}
                        onPress={() => { setActiveSort(opt.value); setShowSortMenu(false); }}
                      >
                        <Text style={[styles.sortOptionText, activeSort === opt.value && styles.sortOptionTextActive]}>
                          {opt.label}
                        </Text>
                        {activeSort === opt.value && <Icon name="check" size={14} color="#E8445A" />}
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
              </View>
            </View>

            {featuredBlog && (
              <View style={styles.featuredSection}>
                <View style={styles.sectionLabelRow}>
                  <View style={styles.sectionLabelDot} />
                  <Text style={styles.sectionLabel}>Featured</Text>
                </View>
                {renderFeaturedBlog(featuredBlog)}
              </View>
            )}

            {restBlogs.length > 0 && (
              <View style={styles.sectionLabelRow}>
                <View style={styles.sectionLabelDot} />
                <Text style={styles.sectionLabel}>More Stories</Text>
              </View>
            )}
          </>
        }
        renderItem={renderBlogCard}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <View style={styles.emptyIconBox}>
              <Icon name="article" size={40} color="#E8445A" />
            </View>
            <Text style={styles.emptyTitle}>No blogs found</Text>
            <Text style={styles.emptySubtitle}>
              Try searching with different keywords or browse another category
            </Text>
          </View>
        }
      />
    </View>
  );
}

export default BlogScreen;