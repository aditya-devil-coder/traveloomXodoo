import { StyleSheet, Platform } from 'react-native';

// ── Tokens — matches your existing app palette ─────────────────
const C = {
  accent:       '#E8445A',   // your explorePink
  accentLight:  '#FFF2F4',   // soft red tint for focus
  accentDim:    '#F0AEAE',   // muted for disabled
  accentSuccess:'#059669',   // green for success state
  text:         '#1a1a1a',   // your existing dark text
  textSub:      '#666666',   // your existing subtitle grey
  textMuted:    '#AAAAAA',
  white:        '#FFFFFF',
  bg:           '#F8F8F8',
  border:       '#EBEBEB',
  card:         '#FFFFFF',
  pillBg:       '#FFF2F4',
};

export const styles = StyleSheet.create({

  // ── Root ────────────────────────────────────────────────────
  root: {
    flex: 1,
    backgroundColor: C.bg,
  },

  // ── Top accent bar ──────────────────────────────────────────
  accentBar: {
    height: 3,
    backgroundColor: C.accent,
    width: '100%',
  },

  // ── Scroll ──────────────────────────────────────────────────
  scroll: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: Platform.OS === 'ios' ? 56 : 44,
    paddingBottom: 48,
  },

  // ── Brand row ───────────────────────────────────────────────
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  logoMark: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: C.accent,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  brandName: {
    fontSize: 20,
    fontWeight: '700',
    color: C.text,
    letterSpacing: 0.3,
    fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
  },

  // ── Heading ─────────────────────────────────────────────────
  headingBlock: {
    marginBottom: 32,
  },
  heading: {
    fontSize: 34,
    fontWeight: 'bold',
    color: C.text,
    lineHeight: 44,
    letterSpacing: -0.4,
    marginBottom: 10,
    fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
  },
  headingAccent: {
    color: C.accent,
  },
  subheading: {
    fontSize: 14,
    color: C.textSub,
    lineHeight: 22,
    fontWeight: '400',
  },

  // ── Card ────────────────────────────────────────────────────
  card: {
    backgroundColor: C.card,
    borderRadius: 20,
    padding: 22,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.07,
    shadowRadius: 18,
    elevation: 4,
    borderWidth: 1,
    borderColor: C.border,
  },

  // ── Section pill ────────────────────────────────────────────
  sectionPill: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: C.pillBg,
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 12,
    marginBottom: 16,
    gap: 6,
  },
  sectionPillText: {
    fontSize: 12,
    fontWeight: '600',
    color: C.accent,
    letterSpacing: 0.3,
  },

  // ── Two-column row ──────────────────────────────────────────
  row: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 0,
  },
  halfField: {
    flex: 1,
  },

  // ── Individual field wrapper ────────────────────────────────
  fieldWrap: {
    marginBottom: 16,
  },

  // ── Label ───────────────────────────────────────────────────
  label: {
    fontSize: 11,
    fontWeight: '600',
    color: C.textSub,
    letterSpacing: 0.7,
    textTransform: 'uppercase',
    marginBottom: 6,
  },

  // ── Input row ───────────────────────────────────────────────
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: C.bg,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: C.border,
    paddingHorizontal: 12,
    height: 46,
  },
  inputRowFocused: {
    borderColor: C.accent,
    backgroundColor: C.accentLight,
  },
  inputRowMulti: {
    height: 88,
    alignItems: 'flex-start',
    paddingTop: 12,
    paddingBottom: 12,
  },
  inputIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: C.text,
    paddingVertical: 0,
  },
  inputMulti: {
    height: 64,
    textAlignVertical: 'top',
  },

  // ── Register button ─────────────────────────────────────────
  btn: {
    marginTop: 8,
    height: 52,
    borderRadius: 14,
    backgroundColor: C.accent,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: C.accent,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.28,
    shadowRadius: 14,
    elevation: 6,
  },
  btnDim: {
    backgroundColor: C.accentDim,
    shadowOpacity: 0,
    elevation: 0,
  },
  btnSuccess: {
    backgroundColor: C.accentSuccess,
    shadowColor: C.accentSuccess,
    shadowOpacity: 0.28,
  },
  btnInner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  btnText: {
    color: C.white,
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.3,
  },
  btnIconWrap: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: C.white,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // ── Footer ──────────────────────────────────────────────────
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 28,
  },
  footerText: {
    fontSize: 14,
    color: C.textSub,
  },
  footerLink: {
    fontSize: 14,
    fontWeight: '700',
    color: C.accent,
  },
});