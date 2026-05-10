import { StyleSheet, Platform, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

// ── Design tokens — synced with your existing app palette ──────
const C = {
  accent:      '#E8445A',   // your explorePink
  accentLight: '#FFF2F4',   // soft red tint for focused input bg
  accentDim:   '#F0AEAE',   // muted red for disabled button
  text:        '#1a1a1a',   // your existing dark text
  textSub:     '#666666',   // your existing subtitle grey
  textMuted:   '#AAAAAA',
  white:       '#FFFFFF',
  bg:          '#F8F8F8',
  border:      '#EBEBEB',
  card:        '#FFFFFF',
};

export const styles = StyleSheet.create({

  // ── Root ──────────────────────────────────────────────────────
  root: {
    flex: 1,
    backgroundColor: C.bg,
  },

  // ── Thin red strip at top (brand touch) ───────────────────────
  accentBar: {
    height: 3,
    backgroundColor: C.accent,
    width: '100%',
  },

  // ── Scroll container ──────────────────────────────────────────
  scroll: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: Platform.OS === 'ios' ? 56 : 44,
    paddingBottom: 40,
  },

  // ── Brand row ─────────────────────────────────────────────────
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 48,
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

  // ── Heading ───────────────────────────────────────────────────
  headingBlock: {
    marginBottom: 36,
  },
  heading: {
    fontSize: 34,
    fontWeight: 'bold',
    color: C.text,           // #1a1a1a — your exploreTitle color
    lineHeight: 44,
    letterSpacing: -0.4,
    marginBottom: 10,
    fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
  },
  headingAccent: {
    color: C.accent,         // #E8445A — your explorePink
  },
  subheading: {
    fontSize: 14,            // matches your exploreSubtitle
    color: C.textSub,        // #666 — matches your existing subtitle
    lineHeight: 22,          // matches your exploreSubtitle lineHeight
    fontWeight: '400',
  },

  // ── Card ──────────────────────────────────────────────────────
  card: {
    backgroundColor: C.card,
    borderRadius: 20,
    padding: 24,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.07,
    shadowRadius: 18,
    elevation: 4,
    borderWidth: 1,
    borderColor: C.border,
  },

  // ── Field label ───────────────────────────────────────────────
  label: {
    fontSize: 11,
    fontWeight: '600',
    color: C.textSub,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    marginBottom: 8,
  },

  // ── Input row ─────────────────────────────────────────────────
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: C.bg,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: C.border,
    paddingHorizontal: 14,
    height: 50,
  },
  inputRowFocused: {
    borderColor: C.accent,        // #E8445A border on focus
    backgroundColor: C.accentLight,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: C.text,
    paddingVertical: 0,
  },

  // ── Forgot ────────────────────────────────────────────────────
  forgotRow: {
    alignSelf: 'flex-end',
    marginTop: 12,
    marginBottom: 4,
  },
  forgotText: {
    fontSize: 13,
    color: C.accent,              // #E8445A
    fontWeight: '600',
  },

  // ── Sign in button ────────────────────────────────────────────
  btn: {
    marginTop: 20,
    height: 52,
    borderRadius: 14,
    backgroundColor: C.accent,    // #E8445A
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: C.accent,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 14,
    elevation: 6,
  },
  btnDim: {
    backgroundColor: C.accentDim,
    shadowOpacity: 0,
    elevation: 0,
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

  // ── Divider ───────────────────────────────────────────────────
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 22,
    gap: 10,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: C.border,
  },
  dividerLabel: {
    fontSize: 12,
    color: C.textSub,
    fontWeight: '500',
  },

  // ── Social buttons ────────────────────────────────────────────
  socialRow: {
    flexDirection: 'row',
    gap: 12,
  },
  socialBtn: {
    flex: 1,
    height: 48,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: C.border,
    backgroundColor: C.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  socialBtnText: {
    fontSize: 14,
    fontWeight: '600',
    color: C.text,
  },

  // ── Footer ────────────────────────────────────────────────────
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
    color: C.accent,              // #E8445A
  },
});