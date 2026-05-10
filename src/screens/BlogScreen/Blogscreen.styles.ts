import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },

  // ─── Header ───────────────────────────────────────────────
  header: {
    backgroundColor: '#E8445A',
    paddingTop: 56,
    paddingBottom: 20,
    paddingHorizontal: 16,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  headerGreeting: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.75)',
    fontWeight: '500',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 2,
  },
  notifBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.18)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // ─── Search ───────────────────────────────────────────────
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 11,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#1a1a1a',
    paddingVertical: 0,
  },

  // ─── Category Tabs ─────────────────────────────────────────
  categorySection: {
    backgroundColor: '#fff',
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  categoryRow: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 8,
    flexDirection: 'row',
  },
  categoryTab: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
    borderWidth: 1.5,
    borderColor: 'transparent',
  },
  categoryTabActive: {
    backgroundColor: '#fff0f2',
    borderColor: '#E8445A',
  },
  categoryTabText: {
    fontSize: 13,
    color: '#777',
    fontWeight: '500',
  },
  categoryTabTextActive: {
    color: '#E8445A',
    fontWeight: '700',
  },

  // ─── List Content ─────────────────────────────────────────
  listContent: {
    paddingBottom: 24,
  },

  // ─── Results Row ─────────────────────────────────────────
  resultsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#f8f8f8',
    zIndex: 10,
  },
  resultsCount: {
    fontSize: 13,
    color: '#888',
    fontWeight: '500',
  },
  sortBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  sortBtnText: {
    fontSize: 13,
    color: '#555',
    fontWeight: '500',
  },
  sortDropdown: {
    position: 'absolute',
    right: 0,
    top: 36,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#eee',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
    minWidth: 150,
    zIndex: 100,
    overflow: 'hidden',
  },
  sortOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  sortOptionActive: {
    backgroundColor: '#fff0f2',
  },
  sortOptionText: {
    fontSize: 14,
    color: '#555',
  },
  sortOptionTextActive: {
    color: '#E8445A',
    fontWeight: '600',
  },

  // ─── Section Label ─────────────────────────────────────────
  sectionLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 10,
  },
  sectionLabelDot: {
    width: 4,
    height: 18,
    borderRadius: 2,
    backgroundColor: '#E8445A',
  },
  sectionLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1a1a1a',
    letterSpacing: 0.2,
  },

  // ─── Featured Card ─────────────────────────────────────────
  featuredSection: {
    paddingHorizontal: 16,
  },
  featuredCard: {
    borderRadius: 18,
    overflow: 'hidden',
    height: 240,
    marginBottom: 4,
    shadowColor: '#E8445A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 6,
  },
  featuredImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  featuredOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '75%',
    backgroundColor: 'rgba(0,0,0,0.45)',
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },
  featuredContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    paddingBottom: 18,
    backgroundColor: 'rgba(0,0,0,0)',
    // Gradient effect
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -60 },
    shadowOpacity: 0.6,
    shadowRadius: 30,
  },
  featuredTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
    lineHeight: 24,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },
  featuredMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  featuredMetaText: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.85)',
    fontWeight: '500',
  },
  metaDot: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: 'rgba(255,255,255,0.5)',
    marginHorizontal: 2,
  },

  // ─── Category Pill ─────────────────────────────────────────
  categoryPill: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginBottom: 8,
  },
  categoryPillText: {
    fontSize: 11,
    color: '#fff',
    fontWeight: '700',
    letterSpacing: 0.3,
    textTransform: 'uppercase',
  },
  categoryPillSmall: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  categoryPillSmallText: {
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.2,
    textTransform: 'uppercase',
  },

  // ─── Blog Card ─────────────────────────────────────────────
  blogCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  blogCardImage: {
    width: 110,
    height: '100%',
    resizeMode: 'cover',
  },
  blogCardContent: {
    flex: 1,
    padding: 12,
    gap: 4,
  },
  blogCardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  blogCardReadTime: {
    fontSize: 11,
    color: '#aaa',
    fontWeight: '500',
  },
  blogCardTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1a1a1a',
    lineHeight: 20,
    marginBottom: 4,
  },
  blogCardExcerpt: {
    fontSize: 12,
    color: '#888',
    lineHeight: 17,
    marginBottom: 8,
  },
  blogCardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 2,
  },
  blogCardAuthorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flex: 1,
  },
  authorAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#fff0f2',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: '#E8445A',
  },
  authorAvatarText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#E8445A',
  },
  blogCardAuthor: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
  },
  blogCardDate: {
    fontSize: 10,
    color: '#aaa',
  },
  chatWithBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    backgroundColor: '#fff0f2',
    borderWidth: 1,
    borderColor: '#ffd0d6',
  },
  chatWithBtnText: {
    fontSize: 11,
    color: '#E8445A',
    fontWeight: '700',
  },

  // ─── Empty State ─────────────────────────────────────────
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    paddingTop: 60,
    gap: 12,
  },
  emptyIconBox: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#fff0f2',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  emptySubtitle: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    lineHeight: 22,
  },
});