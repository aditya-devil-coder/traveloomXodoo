import { StyleSheet, Dimensions } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const HERO_HEIGHT = 320;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  // ─── Floating Header ──────────────────────────────────────────
  floatingHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 48,
    paddingBottom: 12,
    paddingHorizontal: 16,
    gap: 10,
  },
  headerBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#E8445A',
  },
  backBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'rgba(0,0,0,0.35)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    flex: 1,
    fontSize: 15,
    fontWeight: '700',
    color: '#fff',
  },
  headerActions: {
    flexDirection: 'row',
    gap: 8,
  },
  headerActionBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'rgba(0,0,0,0.35)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // ─── Hero ──────────────────────────────────────────────────────
  heroContainer: {
    height: HERO_HEIGHT,
    overflow: 'hidden',
  },
  heroImage: {
    width: '100%',
    height: HERO_HEIGHT,
    resizeMode: 'cover',
  },
  heroGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: HERO_HEIGHT * 0.75,
    backgroundColor: 'rgba(0,0,0,0.55)',
  },
  heroContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    paddingBottom: 24,
  },
  categoryBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginBottom: 10,
  },
  categoryBadgeText: {
    fontSize: 11,
    color: '#fff',
    fontWeight: '800',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  heroTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#fff',
    lineHeight: 30,
    marginBottom: 10,
    textShadowColor: 'rgba(0,0,0,0.4)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 6,
  },
  heroMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  heroMetaText: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.85)',
    fontWeight: '500',
  },
  heroDot: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: 'rgba(255,255,255,0.45)',
    marginHorizontal: 2,
  },

  // ─── Article Body ─────────────────────────────────────────────
  articleBody: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -24,
    paddingTop: 24,
    paddingHorizontal: 20,
  },

  // ─── Author Card ──────────────────────────────────────────────
  authorCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  authorLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  authorAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#fff0f2',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
  authorAvatarText: {
    fontSize: 16,
    fontWeight: '800',
  },
  authorName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  authorLabel: {
    fontSize: 12,
    color: '#999',
    marginTop: 1,
  },
  chatAuthorBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1.5,
  },
  chatAuthorBtnText: {
    fontSize: 13,
    fontWeight: '700',
  },

  // ─── Divider ──────────────────────────────────────────────────
  divider: {
    height: 1,
    backgroundColor: '#f0f0f0',
    marginVertical: 18,
  },

  // ─── Excerpt ──────────────────────────────────────────────────
  excerptText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 26,
    fontStyle: 'italic',
    fontWeight: '500',
    letterSpacing: 0.1,
  },

  // ─── Content Blocks ───────────────────────────────────────────
  contentSection: {
    gap: 6,
  },
  blockSpacer: {
    height: 10,
  },
  h2Row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    marginTop: 20,
    marginBottom: 6,
  },
  h2Accent: {
    width: 4,
    height: '100%',
    minHeight: 22,
    borderRadius: 2,
    marginTop: 3,
  },
  h2Text: {
    flex: 1,
    fontSize: 19,
    fontWeight: '800',
    color: '#1a1a1a',
    lineHeight: 26,
    letterSpacing: 0.1,
  },
  h3Text: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2c2c2c',
    lineHeight: 24,
    marginTop: 14,
    marginBottom: 4,
  },
  paragraphText: {
    fontSize: 15,
    color: '#444',
    lineHeight: 26,
    letterSpacing: 0.1,
  },

  // ─── Tags Section ─────────────────────────────────────────────
  tagsSection: {
    marginTop: 28,
  },
  sectionLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  sectionDot: {
    width: 4,
    height: 18,
    borderRadius: 2,
  },
  sectionLabelText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  tagsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tagChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  tagChipText: {
    fontSize: 12,
    fontWeight: '600',
  },

  // ─── Engagement Row ───────────────────────────────────────────
  engagementRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 28,
    marginBottom: 8,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#f0f0f0',
  },
  engageBtn: {
    alignItems: 'center',
    gap: 4,
  },
  engageBtnText: {
    fontSize: 12,
    color: '#888',
    fontWeight: '600',
  },

  // ─── CTA Banner ──────────────────────────────────────────────
  ctaBanner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 18,
    padding: 20,
    marginTop: 24,
  },
  ctaLeft: {
    flex: 1,
  },
  ctaTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 3,
  },
  ctaSubtitle: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.85)',
    fontWeight: '500',
  },
  ctaBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    marginLeft: 12,
  },
  ctaBtnText: {
    fontSize: 13,
    fontWeight: '800',
  },
});