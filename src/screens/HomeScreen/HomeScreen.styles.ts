import { StyleSheet, Platform, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

// ── Design tokens — SYNCED 1:1 with LoginScreen palette ──────────
const C = {
  accent:      '#E8445A',   // explorePink — same as Login
  accentLight: '#FFF2F4',   // soft red tint — same as Login
  accentDim:   '#F0AEAE',
  text:        '#1a1a1a',   // dark text — same as Login
  textSub:     '#666666',   // subtitle grey — same as Login
  textMuted:   '#AAAAAA',   // muted — same as Login
  white:       '#FFFFFF',
  bg:          '#F8F8F8',   // page bg — same as Login
  border:      '#EBEBEB',   // border — same as Login
  card:        '#FFFFFF',   // card bg — same as Login
  navy:        '#1C2340',   // hero banner bg only
  navyMid:     '#2E3A6E',
  gold:        '#F5A623',
};

export const styles = StyleSheet.create({

  // ── Root ──────────────────────────────────────────────────────
  root: {
    flex: 1,
    backgroundColor: C.bg,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 110,
  },

  // ── NAVBAR ────────────────────────────────────────────────────
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: C.white,
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'ios' ? 60 : 52,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: C.border,
    zIndex: 100,
  },
  navLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  logoMark: {
    width: 38,
    height: 38,
    borderRadius: 11,
    backgroundColor: C.accent,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: C.accent,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  brandCol: {
    gap: 1,
  },
  brandName: {
    fontSize: 19,
    fontWeight: '700',
    color: C.text,
    letterSpacing: 0.2,
    fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
  },
  brandTagline: {
    fontSize: 10,
    color: C.textMuted,
    fontWeight: '500',
    letterSpacing: 0.6,
    textTransform: 'uppercase',
  },
  navRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  navIconBtn: {
    width: 38,
    height: 38,
    borderRadius: 11,
    backgroundColor: C.bg,
    borderWidth: 1.5,
    borderColor: C.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notifDot: {
    position: 'absolute',
    top: 7,
    right: 7,
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: C.accent,
    borderWidth: 1.5,
    borderColor: C.white,
  },
  avatarBtn: {
    width: 38,
    height: 38,
    borderRadius: 11,
    backgroundColor: C.accentLight,
    borderWidth: 2,
    borderColor: C.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarInitials: {
    fontSize: 13,
    fontWeight: '700',
    color: C.accent,
  },

  // ── HERO BANNER ───────────────────────────────────────────────
  heroWrap: {
    marginHorizontal: 16,
    marginTop: 18,
    marginBottom: 6,
    borderRadius: 22,
    overflow: 'hidden',
    height: 220,
  },
  heroBg: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  heroTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  heroBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: 'rgba(255,255,255,0.18)',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.25)',
  },
  heroBadgeText: {
    fontSize: 11,
    color: C.white,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
  heroBookmarkBtn: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  heroBottom: {
    gap: 8,
  },
  heroLocationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  heroLocationText: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.7)',
    fontWeight: '500',
  },
  heroTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: C.white,
    lineHeight: 32,
    letterSpacing: -0.5,
    fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
  },
  heroMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heroStats: {
    flexDirection: 'row',
    gap: 14,
  },
  heroStatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  heroStatText: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.75)',
    fontWeight: '500',
  },
  heroExploreBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: C.white,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },
  heroExploreBtnText: {
    fontSize: 12,
    fontWeight: '700',
    color: C.accent,
  },

  heroDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
    marginTop: 10,
    marginBottom: 2,
  },
  heroDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: C.border,
  },
  heroDotActive: {
    width: 20,
    backgroundColor: C.accent,
  },

  // ── STATS ROW ─────────────────────────────────────────────────
  statsRow: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 18,
    gap: 10,
  },
  statCard: {
    flex: 1,
    backgroundColor: C.card,
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: C.border,
    alignItems: 'center',
    gap: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  statEmoji: {
    fontSize: 20,
  },
  statNumber: {
    fontSize: 17,
    fontWeight: '800',
    color: C.text,
  },
  statLabel: {
    fontSize: 10,
    color: C.textMuted,
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: 0.4,
  },

  // ── SEARCH BAR ────────────────────────────────────────────────
  searchWrap: {
    paddingHorizontal: 16,
    marginTop: 18,
    marginBottom: 4,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: C.bg,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: C.border,
    paddingHorizontal: 14,
    height: 50,
    gap: 10,
  },
  searchBarFocused: {
    borderColor: C.accent,
    backgroundColor: C.accentLight,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: C.text,
    paddingVertical: 0,
    fontWeight: '500',
  },
  searchFilterBtn: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: C.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // ── FILTER CHIPS ──────────────────────────────────────────────
  filterWrap: {
    paddingHorizontal: 16,
    marginTop: 12,
    marginBottom: 4,
  },
  filterContent: {
    gap: 8,
    paddingRight: 4,
  },
  filterChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingVertical: 7,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: C.card,
    borderWidth: 1.5,
    borderColor: C.border,
  },
  filterChipActive: {
    backgroundColor: C.accentLight,
    borderColor: C.accent,
  },
  filterChipEmoji: {
    fontSize: 13,
  },
  filterChipText: {
    fontSize: 13,
    fontWeight: '600',
    color: C.textSub,
  },
  filterChipTextActive: {
    color: C.accent,
  },

  // ── QUICK ACTIONS ─────────────────────────────────────────────
  quickActions: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 18,
    gap: 10,
  },
  quickAction: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 7,
    backgroundColor: C.card,
    borderRadius: 16,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: C.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  quickActionIcon: {
    width: 36,
    height: 36,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quickActionLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: C.textSub,
    textAlign: 'center',
  },

  // ── SECTION ───────────────────────────────────────────────────
  section: {
    paddingTop: 24,
    paddingHorizontal: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  sectionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  sectionAccentBar: {
    width: 3,
    height: 18,
    borderRadius: 2,
    backgroundColor: C.accent,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: C.text,
    letterSpacing: 0.1,
  },
  seeAll: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  seeAllText: {
    fontSize: 13,
    fontWeight: '600',
    color: C.accent,
  },

  // ── DESTINATION CARDS ─────────────────────────────────────────
  destList: {
    gap: 12,
    paddingRight: 4,
  },
  destCard: {
    width: 148,
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: C.card,
    borderWidth: 1,
    borderColor: C.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  destImageWrap: {
    width: '100%',
    height: 108,
    alignItems: 'center',
    justifyContent: 'center',
  },
  destEmoji: {
    fontSize: 46,
  },
  destInfo: {
    padding: 12,
    gap: 3,
  },
  destName: {
    fontSize: 14,
    fontWeight: '700',
    color: C.text,
  },
  destCountry: {
    fontSize: 11,
    color: C.textMuted,
    fontWeight: '500',
  },
  destMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  destRating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  destRatingText: {
    fontSize: 12,
    fontWeight: '700',
    color: C.gold,
  },
  destPrice: {
    fontSize: 11,
    color: C.textMuted,
    fontWeight: '500',
  },
  destBestFor: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    marginTop: 7,
  },
  destTag: {
    paddingVertical: 3,
    paddingHorizontal: 8,
    backgroundColor: C.accentLight,
    borderRadius: 8,
  },
  destTagText: {
    fontSize: 10,
    color: C.accent,
    fontWeight: '600',
  },

  // ── TRIP CARDS ────────────────────────────────────────────────
  tripCard: {
    flexDirection: 'row',
    backgroundColor: C.card,
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: C.border,
    gap: 14,
    alignItems: 'flex-start',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 10,
    elevation: 2,
  },
  tripImageWrap: {
    width: 62,
    height: 62,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  tripEmoji: {
    fontSize: 30,
  },
  tripBody: {
    flex: 1,
    gap: 4,
  },
  tripTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tripName: {
    fontSize: 15,
    fontWeight: '700',
    color: C.text,
    letterSpacing: -0.2,
    flex: 1,
  },
  tripMenuBtn: {
    padding: 2,
  },
  tripSubRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  tripLocation: {
    fontSize: 12,
    color: C.textMuted,
    fontWeight: '500',
  },
  tripMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 4,
  },
  tripMetaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  tripMetaText: {
    fontSize: 11,
    color: C.textSub,
    fontWeight: '500',
  },
  tripProgressWrap: {
    marginTop: 8,
    gap: 5,
  },
  tripProgressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tripProgressLabel: {
    fontSize: 10,
    color: C.textMuted,
    fontWeight: '500',
  },
  tripProgressBg: {
    height: 4,
    borderRadius: 2,
    backgroundColor: C.border,
    overflow: 'hidden',
  },
  tripProgressFill: {
    height: '100%',
    borderRadius: 2,
    backgroundColor: C.accent,
  },
  tripStatusBadge: {
    alignSelf: 'flex-start',
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginTop: 6,
  },
  tripStatusText: {
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  tripSpentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 2,
  },

  // ── FAB ───────────────────────────────────────────────────────
  fab: {
    position: 'absolute',
    bottom: 28,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: C.accent,
    borderRadius: 28,
    paddingVertical: 14,
    paddingHorizontal: 22,
    gap: 9,
    shadowColor: C.accent,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 16,
    elevation: 10,
  },
  fabIconWrap: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: 'rgba(255,255,255,0.25)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fabText: {
    fontSize: 14,
    fontWeight: '700',
    color: C.white,
    letterSpacing: 0.2,
  },
});