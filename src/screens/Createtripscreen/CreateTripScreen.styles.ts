import { StyleSheet, Platform, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

// ── Design tokens ──────────────────────────────────────────────────
export const C = {
  accent:      '#E8445A',
  accentLight: '#FFF2F4',
  text:        '#1a1a1a',
  textSub:     '#666666',
  textMuted:   '#AAAAAA',
  white:       '#FFFFFF',
  bg:          '#F8F8F8',
  border:      '#EBEBEB',
  card:        '#FFFFFF',
  inputBg:     '#F4F4F4',
};

export const styles = StyleSheet.create({

  // ── Root ──────────────────────────────────────────────────────────
  root: {
    flex: 1,
    backgroundColor: C.bg,
  },

  // ── Top Bar ───────────────────────────────────────────────────────
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: C.white,
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'ios' ? 60 : 52,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: C.border,
  },
  backBtn: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: C.bg,
    borderWidth: 1.5,
    borderColor: C.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: C.text,
    letterSpacing: -0.2,
    fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
  },

  // ── Scroll ────────────────────────────────────────────────────────
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 110,
  },

  // ── Sections ──────────────────────────────────────────────────────
  section: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    marginBottom: 12,
  },
  sectionAccentBar: {
    width: 3,
    height: 18,
    borderRadius: 2,
    backgroundColor: C.accent,
    marginTop: 2,
  },
  sectionTitle: {
    flex: 1,
    fontSize: 14,
    fontWeight: '700',
    color: C.text,
    letterSpacing: 0.1,
    lineHeight: 20,
  },

  // ── Trip Name Input ───────────────────────────────────────────────
  tripNameWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  tripNameInput: {
    flex: 1,
    height: 50,
    backgroundColor: C.card,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: C.border,
    paddingHorizontal: 16,
    fontSize: 15,
    fontWeight: '600',
    color: C.text,
  },
  saveBtn: {
    width: 50,
    height: 50,
    borderRadius: 14,
    backgroundColor: C.accent,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: C.accent,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },

  // ── Form Card ─────────────────────────────────────────────────────
  formCard: {
    backgroundColor: C.card,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: C.border,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 10,
    elevation: 2,
  },
  formRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  formLabel: {
    width: 110,
    fontSize: 13,
    fontWeight: '600',
    color: C.textSub,
  },
  inputWrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: C.inputBg,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: C.border,
    paddingHorizontal: 12,
    height: 40,
  },
  input: {
    flex: 1,
    fontSize: 13,
    color: C.text,
    fontWeight: '500',
    paddingVertical: 0,
  },
  inputIcon: {
    marginLeft: 6,
  },
  divider: {
    height: 1,
    backgroundColor: C.border,
    marginHorizontal: 16,
  },

  // ── Suggestion Grid (3 columns) ───────────────────────────────────
  suggGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  suggCard: {
    width: (width - 32 - 20) / 3,  // 3 cols · 16px side padding each · 2×10 gaps
    aspectRatio: 0.85,
    borderRadius: 16,
    backgroundColor: C.card,
    borderWidth: 1.5,
    borderColor: C.border,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
    overflow: 'hidden',
  },
  suggCardInner: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: C.bg,
  },

  // ── Footer ────────────────────────────────────────────────────────
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: C.white,
    borderTopWidth: 1,
    borderTopColor: C.border,
    paddingHorizontal: 20,
    paddingVertical: 16,
    paddingBottom: Platform.OS === 'ios' ? 30 : 16,
  },
  createBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: C.accent,
    borderRadius: 16,
    paddingVertical: 16,
    shadowColor: C.accent,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  createBtnText: {
    fontSize: 15,
    fontWeight: '700',
    color: C.white,
    letterSpacing: 0.2,
  },
});