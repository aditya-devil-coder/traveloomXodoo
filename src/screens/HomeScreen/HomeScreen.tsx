import React, { useRef, useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Animated,
  Platform,
  Dimensions,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { styles } from './HomeScreen.styles';
import HomeTopBar from '../../components/topbar/Hometopbar';

const { width } = Dimensions.get('window');

// ─── DATA ────────────────────────────────────────────────────────────────────

const HERO_SLIDES = [
  {
    id: '1',
    eyebrow: '🔥 Trending Now',
    title: 'Golden Hour\nin Santorini',
    location: 'Cyclades, Greece',
    rating: '4.9',
    duration: '7 days',
    bgColor: '#1A2050',
    accentColor: '#E8445A',
  },
  {
    id: '2',
    eyebrow: '🌿 Nature Escape',
    title: 'Lush Valleys\nof New Zealand',
    location: 'South Island, NZ',
    rating: '4.8',
    duration: '10 days',
    bgColor: '#0D2A1F',
    accentColor: '#E8445A',
  },
  {
    id: '3',
    eyebrow: '✨ Top Rated',
    title: 'Ancient Temples\nof Kyoto',
    location: 'Kyoto, Japan',
    rating: '4.95',
    duration: '6 days',
    bgColor: '#1F1020',
    accentColor: '#E8445A',
  },
];

const FILTERS = [
  { id: 'all',      label: 'All',       emoji: '🌍' },
  { id: 'asia',     label: 'Asia',      emoji: '⛩️' },
  { id: 'europe',   label: 'Europe',    emoji: '🏰' },
  { id: 'beach',    label: 'Beach',     emoji: '🏖️' },
  { id: 'mountain', label: 'Mountains', emoji: '🏔️' },
  { id: 'desert',   label: 'Desert',    emoji: '🌵' },
  { id: 'city',     label: 'City',      emoji: '🌆' },
];

const DESTINATIONS = [
  {
    id: '1',
    name: 'Bali',
    country: 'Indonesia',
    emoji: '🌴',
    rating: 4.9,
    reviews: '12.4k',
    priceTag: '₹45k/pp',
    tags: ['Culture', 'Beach'],
    bgColor: '#E8F5EE',
    category: 'asia',
  },
  {
    id: '2',
    name: 'Paris',
    country: 'France',
    emoji: '🗼',
    rating: 4.8,
    reviews: '28.1k',
    priceTag: '₹1.1L/pp',
    tags: ['Romance', 'Art'],
    bgColor: '#EEF0FF',
    category: 'europe',
  },
  {
    id: '3',
    name: 'Maldives',
    country: 'South Asia',
    emoji: '🐚',
    rating: 4.95,
    reviews: '8.7k',
    priceTag: '₹1.6L/pp',
    tags: ['Luxury', 'Beach'],
    bgColor: '#E8F4FF',
    category: 'beach',
  },
  {
    id: '4',
    name: 'Ladakh',
    country: 'India',
    emoji: '🏔️',
    rating: 4.85,
    reviews: '6.2k',
    priceTag: '₹28k/pp',
    tags: ['Adventure', 'Scenic'],
    bgColor: '#FFF2F4',
    category: 'mountain',
  },
  {
    id: '5',
    name: 'Dubai',
    country: 'UAE',
    emoji: '🌆',
    rating: 4.7,
    reviews: '19.3k',
    priceTag: '₹75k/pp',
    tags: ['Luxury', 'City'],
    bgColor: '#FFFBEE',
    category: 'city',
  },
  {
    id: '6',
    name: 'Patagonia',
    country: 'Argentina',
    emoji: '🏞️',
    rating: 4.88,
    reviews: '3.9k',
    priceTag: '₹1.4L/pp',
    tags: ['Hiking', 'Nature'],
    bgColor: '#F0F8FF',
    category: 'mountain',
  },
];

const PREV_TRIPS = [
  {
    id: '1',
    name: 'Manali Winter Escape',
    location: 'Himachal Pradesh, India',
    date: 'Dec 14–19, 2024',
    days: 5,
    emoji: '🏔️',
    bgColor: '#EEF1FF',
    status: 'Completed',
    statusColor: '#2D9E6B',
    statusBg: '#E6F7F1',
    progress: 1.0,
    spent: '₹22,400',
    rating: 4.8,
  },
  {
    id: '2',
    name: 'Goa Beach Vacation',
    location: 'North Goa, India',
    date: 'Oct 8–12, 2024',
    days: 4,
    emoji: '🏖️',
    bgColor: '#E8F4FF',
    status: 'Completed',
    statusColor: '#2D9E6B',
    statusBg: '#E6F7F1',
    progress: 1.0,
    spent: '₹18,900',
    rating: 4.6,
  },
  {
    id: '3',
    name: 'Kerala Backwaters Tour',
    location: 'Alleppey, Kerala',
    date: 'Aug 3–9, 2024',
    days: 6,
    emoji: '🌿',
    bgColor: '#E8F5EE',
    status: 'Completed',
    statusColor: '#2D9E6B',
    statusBg: '#E6F7F1',
    progress: 1.0,
    spent: '₹31,200',
    rating: 4.9,
  },
  {
    id: '4',
    name: 'Rajasthan Heritage Trail',
    location: 'Jaipur → Jodhpur → Udaipur',
    date: 'Feb 20–27, 2025',
    days: 7,
    emoji: '🏯',
    bgColor: '#FFFBEE',
    status: 'Upcoming',
    statusColor: '#C17F00',
    statusBg: '#FFF8E1',
    progress: 0.35,
    spent: '₹8,500',
    rating: null,
  },
];

const QUICK_ACTIONS = [
  { id: '1', label: 'Flights',  emoji: '✈️', bgColor: '#E8F0FF', iconColor: '#4F8EF7' },
  { id: '2', label: 'Hotels',   emoji: '🏨', bgColor: '#FFF2F4', iconColor: '#E8445A' },
  { id: '3', label: 'Packages', emoji: '🎒', bgColor: '#E8F7F0', iconColor: '#2D9E6B' },
  { id: '4', label: 'Visa',     emoji: '🛂', bgColor: '#FFFBEE', iconColor: '#C17F00' },
];

const STATS = [
  { emoji: '🧳', number: '12', label: 'Trips' },
  { emoji: '🌍', number: '8',  label: 'Countries' },
  { emoji: '📍', number: '34', label: 'Cities' },
];

// ─── SUB COMPONENTS ──────────────────────────────────────────────────────────

const DestCard = ({
  item,
  onPress,
}: {
  item: typeof DESTINATIONS[0];
  onPress: () => void;
}) => (
  <TouchableOpacity style={styles.destCard} activeOpacity={0.85} onPress={onPress}>
    <View style={[styles.destImageWrap, { backgroundColor: item.bgColor }]}>
      <Text style={styles.destEmoji}>{item.emoji}</Text>
    </View>
    <View style={styles.destInfo}>
      <Text style={styles.destName}>{item.name}</Text>
      <Text style={styles.destCountry}>{item.country}</Text>
      <View style={styles.destMeta}>
        <View style={styles.destRating}>
          <Icon name="star" size={10} color="#F5A623" />
          <Text style={styles.destRatingText}>{item.rating}</Text>
          <Text style={styles.destCountry}>({item.reviews})</Text>
        </View>
        <Text style={styles.destPrice}>{item.priceTag}</Text>
      </View>
      <View style={styles.destBestFor}>
        {item.tags.map(tag => (
          <View key={tag} style={styles.destTag}>
            <Text style={styles.destTagText}>{tag}</Text>
          </View>
        ))}
      </View>
    </View>
  </TouchableOpacity>
);

const TripCard = ({
  item,
  onPress,
}: {
  item: typeof PREV_TRIPS[0];
  onPress: () => void;
}) => (
  <TouchableOpacity style={styles.tripCard} activeOpacity={0.85} onPress={onPress}>
    <View style={[styles.tripImageWrap, { backgroundColor: item.bgColor }]}>
      <Text style={styles.tripEmoji}>{item.emoji}</Text>
    </View>
    <View style={styles.tripBody}>
      <View style={styles.tripTopRow}>
        <Text style={styles.tripName}>{item.name}</Text>
        <TouchableOpacity style={styles.tripMenuBtn}>
          <Icon name="more-horizontal" size={16} color="#AAAAAA" />
        </TouchableOpacity>
      </View>
      <View style={styles.tripSubRow}>
        <Icon name="map-pin" size={10} color="#AAAAAA" />
        <Text style={styles.tripLocation}>{item.location}</Text>
      </View>
      <View style={styles.tripMeta}>
        <View style={styles.tripMetaItem}>
          <Icon name="calendar" size={11} color="#AAAAAA" />
          <Text style={styles.tripMetaText}>{item.date}</Text>
        </View>
        <View style={styles.tripMetaItem}>
          <Icon name="clock" size={11} color="#AAAAAA" />
          <Text style={styles.tripMetaText}>{item.days} days</Text>
        </View>
      </View>
      {item.status === 'Upcoming' && (
        <View style={styles.tripProgressWrap}>
          <View style={styles.tripProgressRow}>
            <Text style={styles.tripProgressLabel}>Planning progress</Text>
            <Text style={styles.tripProgressLabel}>{Math.round(item.progress * 100)}%</Text>
          </View>
          <View style={styles.tripProgressBg}>
            <View style={[styles.tripProgressFill, { width: `${item.progress * 100}%` }]} />
          </View>
        </View>
      )}
      <View style={[styles.tripStatusBadge, { backgroundColor: item.statusBg }]}>
        <Text style={[styles.tripStatusText, { color: item.statusColor }]}>{item.status}</Text>
      </View>
      <View style={styles.tripSpentRow}>
        <Icon name="credit-card" size={11} color="#AAAAAA" />
        <Text style={styles.tripMetaText}>Spent: {item.spent}</Text>
        {item.rating && (
          <>
            <Text style={[styles.tripMetaText, { marginLeft: 6 }]}>·</Text>
            <Icon name="star" size={11} color="#F5A623" />
            <Text style={[styles.tripMetaText, { color: '#F5A623' }]}>{item.rating}</Text>
          </>
        )}
      </View>
    </View>
  </TouchableOpacity>
);

// ─── MAIN ────────────────────────────────────────────────────────────────────

export default function HomeScreen({ navigation }: any) {
  const [search, setSearch]               = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const [activeFilter, setActiveFilter]   = useState('all');
  const [heroIndex, setHeroIndex]         = useState(0);

  const fadeAnim  = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(24)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim,  { toValue: 1, duration: 540, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 0, duration: 540, useNativeDriver: true }),
    ]).start();

    const timer = setInterval(() => {
      setHeroIndex(prev => (prev + 1) % HERO_SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const currentHero  = HERO_SLIDES[heroIndex];
  const filteredDest =
    activeFilter === 'all'
      ? DESTINATIONS
      : DESTINATIONS.filter(d => d.category === activeFilter);

  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* ── Sticky Navbar ── */}
      <HomeTopBar
        initials="RK"
        onNotificationPress={() => navigation.navigate('Notifications')}
        onAvatarPress={() => navigation.navigate('Me')}
      />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>

        {/* ── HERO BANNER ── */}
        <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}>
          <TouchableOpacity
            style={styles.heroWrap}
            activeOpacity={0.92}
            onPress={() => navigation.navigate('CreateTrip')}>
            <View style={[styles.heroBg, { backgroundColor: currentHero.bgColor }]}>
              <View style={styles.heroTopRow}>
                <View style={styles.heroBadge}>
                  <Text style={styles.heroBadgeText}>{currentHero.eyebrow}</Text>
                </View>
                <TouchableOpacity style={styles.heroBookmarkBtn}>
                  <Icon name="bookmark" size={14} color="#fff" />
                </TouchableOpacity>
              </View>

              <View style={styles.heroBottom}>
                <View style={styles.heroLocationRow}>
                  <Icon name="map-pin" size={11} color="rgba(255,255,255,0.6)" />
                  <Text style={styles.heroLocationText}>{currentHero.location}</Text>
                </View>
                <Text style={styles.heroTitle}>{currentHero.title}</Text>
                <View style={styles.heroMetaRow}>
                  <View style={styles.heroStats}>
                    <View style={styles.heroStatItem}>
                      <Icon name="star" size={12} color="#F5C842" />
                      <Text style={styles.heroStatText}>{currentHero.rating}</Text>
                    </View>
                    <View style={styles.heroStatItem}>
                      <Icon name="clock" size={12} color="rgba(255,255,255,0.6)" />
                      <Text style={styles.heroStatText}>{currentHero.duration}</Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    style={styles.heroExploreBtn}
                    onPress={() => navigation.navigate('CreateTrip')}>
                    <Text style={styles.heroExploreBtnText}>Explore</Text>
                    <Icon name="arrow-right" size={12} color="#E8445A" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          {/* Slide dots */}
          <View style={styles.heroDots}>
            {HERO_SLIDES.map((_, i) => (
              <TouchableOpacity
                key={i}
                style={[styles.heroDot, i === heroIndex && styles.heroDotActive]}
                onPress={() => setHeroIndex(i)}
              />
            ))}
          </View>
        </Animated.View>

        {/* ── STATS ROW ── */}
        <Animated.View style={[styles.statsRow, { opacity: fadeAnim }]}>
          {STATS.map(s => (
            <View key={s.label} style={styles.statCard}>
              <Text style={styles.statEmoji}>{s.emoji}</Text>
              <Text style={styles.statNumber}>{s.number}</Text>
              <Text style={styles.statLabel}>{s.label}</Text>
            </View>
          ))}
        </Animated.View>

        {/* ── SEARCH BAR ── */}
        <Animated.View style={[styles.searchWrap, { opacity: fadeAnim }]}>
          <View style={[styles.searchBar, searchFocused && styles.searchBarFocused]}>
            <Icon
              name="search"
              size={16}
              color={searchFocused ? '#E8445A' : '#AAAAAA'}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Where do you want to go?"
              placeholderTextColor="#C0BDBD"
              value={search}
              onChangeText={setSearch}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
            {search.length > 0 ? (
              <TouchableOpacity onPress={() => setSearch('')}>
                <Icon name="x" size={14} color="#AAAAAA" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.searchFilterBtn}>
                <Icon name="sliders" size={13} color="#fff" />
              </TouchableOpacity>
            )}
          </View>
        </Animated.View>

        {/* ── FILTER CHIPS ── */}
        <Animated.View style={[styles.filterWrap, { opacity: fadeAnim }]}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.filterContent}>
            {FILTERS.map(f => (
              <TouchableOpacity
                key={f.id}
                style={[styles.filterChip, activeFilter === f.id && styles.filterChipActive]}
                onPress={() => setActiveFilter(f.id)}
                activeOpacity={0.8}>
                <Text style={styles.filterChipEmoji}>{f.emoji}</Text>
                <Text style={[styles.filterChipText, activeFilter === f.id && styles.filterChipTextActive]}>
                  {f.label}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </Animated.View>

        {/* ── QUICK ACTIONS ── */}
        <Animated.View style={[styles.quickActions, { opacity: fadeAnim }]}>
          {QUICK_ACTIONS.map(a => (
            <TouchableOpacity
              key={a.id}
              style={styles.quickAction}
              activeOpacity={0.8}
              onPress={() => navigation.navigate('CreateTrip')}>
              <View style={[styles.quickActionIcon, { backgroundColor: a.bgColor }]}>
                <Text style={{ fontSize: 18 }}>{a.emoji}</Text>
              </View>
              <Text style={styles.quickActionLabel}>{a.label}</Text>
            </TouchableOpacity>
          ))}
        </Animated.View>

        {/* ── TOP DESTINATIONS ── */}
        <Animated.View style={[styles.section, { opacity: fadeAnim }]}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionLeft}>
              <View style={styles.sectionAccentBar} />
              <Text style={styles.sectionTitle}>Top Destinations</Text>
            </View>
            <TouchableOpacity
              style={styles.seeAll}
              activeOpacity={0.7}
              onPress={() => navigation.navigate('ViewAll')}>
              <Text style={styles.seeAllText}>See all</Text>
              <Icon name="chevron-right" size={13} color="#E8445A" />
            </TouchableOpacity>
          </View>

          <FlatList
            data={filteredDest}
            keyExtractor={i => i.id}
            renderItem={({ item }) => (
              <DestCard
                item={item}
                onPress={() => navigation.navigate('HostelDetail', { destination: item })}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.destList}
            ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
          />
        </Animated.View>

        {/* ── MY TRIPS ── */}
        <Animated.View style={[styles.section, { opacity: fadeAnim }]}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionLeft}>
              <View style={styles.sectionAccentBar} />
              <Text style={styles.sectionTitle}>My Trips</Text>
            </View>
            <TouchableOpacity
              style={styles.seeAll}
              activeOpacity={0.7}
              onPress={() => navigation.navigate('ViewAll')}>
              <Text style={styles.seeAllText}>View all</Text>
              <Icon name="chevron-right" size={13} color="#E8445A" />
            </TouchableOpacity>
          </View>

          {PREV_TRIPS.map(item => (
            <TripCard
              key={item.id}
              item={item}
              onPress={() => navigation.navigate('HostelDetail', { trip: item })}
            />
          ))}
        </Animated.View>

      </ScrollView>

      {/* ── FAB → CreateTrip ── */}
      <TouchableOpacity
        style={styles.fab}
        activeOpacity={0.88}
        onPress={() => navigation.navigate('CreateTrip')}>
        <View style={styles.fabIconWrap}>
          <Icon name="plus" size={14} color="#fff" />
        </View>
        <Text style={styles.fabText}>Plan a Trip</Text>
      </TouchableOpacity>
    </View>
  );
}