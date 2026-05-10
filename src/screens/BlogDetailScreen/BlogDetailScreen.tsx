import React, { useRef, useState } from 'react';
import {
  Animated,
  Image,
  ScrollView,
  Share,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './BlogDetailScreen.styles';
import { buildChatFromBlog } from '../../data/messages/MessageData';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const HERO_HEIGHT = 320;
const HEADER_COLLAPSE_AT = HERO_HEIGHT - 80;

function parseContent(raw: string) {
  const lines = raw.trim().split('\n');
  const blocks: { type: 'h2' | 'h3' | 'p' | 'spacer'; text: string }[] = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      if (blocks.length && blocks[blocks.length - 1].type !== 'spacer') {
        blocks.push({ type: 'spacer', text: '' });
      }
      continue;
    }
    if (trimmed.startsWith('### ')) {
      blocks.push({ type: 'h3', text: trimmed.slice(4) });
    } else if (trimmed.startsWith('## ')) {
      blocks.push({ type: 'h2', text: trimmed.slice(3) });
    } else {
      blocks.push({ type: 'p', text: trimmed });
    }
  }
  return blocks;
}

const CATEGORY_COLORS: Record<string, string> = {
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

function getCategoryColor(cat: string) {
  return CATEGORY_COLORS[cat] || '#E8445A';
}

function BlogDetailScreen({ route, navigation }: any) {
  const { blog } = route.params;
  const scrollY = useRef(new Animated.Value(0)).current;
  const [bookmarked, setBookmarked] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(Math.floor(Math.random() * 200) + 40);

  const catColor = getCategoryColor(blog.category);
  const blocks = parseContent(blog.content);
  const authorInitials = blog.author.split(' ').map((n: string) => n[0]).join('').slice(0, 2);

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Check out this travel blog: "${blog.title}" by ${blog.author} on Traveloop!`,
      });
    } catch (_) {}
  };

  const handleLike = () => {
    setLiked(prev => !prev);
    setLikeCount(prev => (liked ? prev - 1 : prev + 1));
  };

  // ─── Navigate to author's specific MessageScreen ───────────────────────────
  // MessageScreen lives inside the Chat tab stack, navigate cross-tab correctly
  const handleChatWithAuthor = () => {
    const chat = buildChatFromBlog(blog);
    navigation.navigate('MessageScreen', { chat, fromBlog: blog });
  };

  const heroOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_COLLAPSE_AT],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const headerBgOpacity = scrollY.interpolate({
    inputRange: [HEADER_COLLAPSE_AT - 40, HEADER_COLLAPSE_AT + 40],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const heroScale = scrollY.interpolate({
    inputRange: [-80, 0],
    outputRange: [1.12, 1],
    extrapolate: 'clamp',
  });

  const titleSlide = scrollY.interpolate({
    inputRange: [0, HEADER_COLLAPSE_AT],
    outputRange: [0, -10],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

      {/* Floating Header */}
      <View style={styles.floatingHeader}>
        <Animated.View style={[styles.headerBg, { opacity: headerBgOpacity }]} />
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={22} color="#fff" />
        </TouchableOpacity>
        <Animated.Text style={[styles.headerTitle, { opacity: headerBgOpacity }]} numberOfLines={1}>
          {blog.title}
        </Animated.Text>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.headerActionBtn} onPress={handleShare}>
            <Icon name="share" size={20} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerActionBtn} onPress={() => setBookmarked(b => !b)}>
            <Icon name={bookmarked ? 'bookmark' : 'bookmark-border'} size={20} color={bookmarked ? '#FFD60A' : '#fff'} />
          </TouchableOpacity>
        </View>
      </View>

      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
          useNativeDriver: true,
        })}
        scrollEventThrottle={16}
      >
        {/* Hero Image */}
        <View style={styles.heroContainer}>
          <Animated.Image
            source={{ uri: blog.coverImage }}
            style={[styles.heroImage, { transform: [{ scale: heroScale }] }]}
          />
          <View style={styles.heroGradient} />
          <Animated.View style={[styles.heroContent, { opacity: heroOpacity, transform: [{ translateY: titleSlide }] }]}>
            <View style={[styles.categoryBadge, { backgroundColor: catColor }]}>
              <Text style={styles.categoryBadgeText}>{blog.category}</Text>
            </View>
            <Text style={styles.heroTitle}>{blog.title}</Text>
            <View style={styles.heroMeta}>
              <Icon name="schedule" size={13} color="rgba(255,255,255,0.8)" />
              <Text style={styles.heroMetaText}>{blog.readTime}</Text>
              <View style={styles.heroDot} />
              <Icon name="calendar-today" size={13} color="rgba(255,255,255,0.8)" />
              <Text style={styles.heroMetaText}>{formatDate(blog.date)}</Text>
            </View>
          </Animated.View>
        </View>

        {/* Article Body */}
        <View style={styles.articleBody}>

          {/* Author Card */}
          <View style={styles.authorCard}>
            <View style={styles.authorLeft}>
              <View style={[styles.authorAvatar, { borderColor: catColor }]}>
                <Text style={[styles.authorAvatarText, { color: catColor }]}>{authorInitials}</Text>
              </View>
              <View>
                <Text style={styles.authorName}>{blog.author}</Text>
                <Text style={styles.authorLabel}>Travel Writer</Text>
              </View>
            </View>

            {/* ✅ Message button → specific author's chat */}
            <TouchableOpacity
              style={[styles.chatAuthorBtn, { backgroundColor: catColor + '15', borderColor: catColor + '40' }]}
              onPress={handleChatWithAuthor}
            >
              <Icon name="chat-bubble-outline" size={15} color={catColor} />
              <Text style={[styles.chatAuthorBtnText, { color: catColor }]}>Message</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.divider} />
          <Text style={styles.excerptText}>{blog.excerpt}</Text>
          <View style={styles.divider} />

          {/* Content Blocks */}
          <View style={styles.contentSection}>
            {blocks.map((block, idx) => {
              if (block.type === 'spacer') return <View key={idx} style={styles.blockSpacer} />;
              if (block.type === 'h2') {
                return (
                  <View key={idx} style={styles.h2Row}>
                    <View style={[styles.h2Accent, { backgroundColor: catColor }]} />
                    <Text style={styles.h2Text}>{block.text}</Text>
                  </View>
                );
              }
              if (block.type === 'h3') {
                return <Text key={idx} style={styles.h3Text}>{block.text}</Text>;
              }
              return <Text key={idx} style={styles.paragraphText}>{block.text}</Text>;
            })}
          </View>

          {/* Tags */}
          <View style={styles.tagsSection}>
            <View style={styles.sectionLabelRow}>
              <View style={[styles.sectionDot, { backgroundColor: catColor }]} />
              <Text style={styles.sectionLabelText}>Tags</Text>
            </View>
            <View style={styles.tagsWrap}>
              {blog.tags.slice(0, 12).map((tag: string, i: number) => (
                <View key={i} style={[styles.tagChip, { backgroundColor: catColor + '12' }]}>
                  <Text style={[styles.tagChipText, { color: catColor }]}>#{tag}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Engagement Row */}
          <View style={styles.engagementRow}>
            <TouchableOpacity style={styles.engageBtn} onPress={handleLike}>
              <Icon name={liked ? 'favorite' : 'favorite-border'} size={22} color={liked ? '#E8445A' : '#888'} />
              <Text style={[styles.engageBtnText, liked && { color: '#E8445A' }]}>{likeCount}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.engageBtn} onPress={handleShare}>
              <Icon name="share" size={22} color="#888" />
              <Text style={styles.engageBtnText}>Share</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.engageBtn} onPress={() => setBookmarked(b => !b)}>
              <Icon name={bookmarked ? 'bookmark' : 'bookmark-border'} size={22} color={bookmarked ? '#FFD60A' : '#888'} />
              <Text style={[styles.engageBtnText, bookmarked && { color: '#FFD60A' }]}>
                {bookmarked ? 'Saved' : 'Save'}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Chat CTA Banner — ✅ also navigates to author's specific chat */}
          <View style={[styles.ctaBanner, { backgroundColor: catColor }]}>
            <View style={styles.ctaLeft}>
              <Text style={styles.ctaTitle}>Inspired by this trip?</Text>
              <Text style={styles.ctaSubtitle}>Chat with {blog.author.split(' ')[0]} directly!</Text>
            </View>
            <TouchableOpacity style={styles.ctaBtn} onPress={handleChatWithAuthor}>
              <Icon name="chat-bubble" size={18} color={catColor} />
              <Text style={[styles.ctaBtnText, { color: catColor }]}>Chat Now</Text>
            </TouchableOpacity>
          </View>

          <View style={{ height: 40 }} />
        </View>
      </Animated.ScrollView>
    </View>
  );
}

export default BlogDetailScreen;