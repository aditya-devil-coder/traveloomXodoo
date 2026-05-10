import { StyleSheet, Platform } from 'react-native';

// ── Design tokens — synced with app palette ──────────────────────
const C = {
  accent:      '#E8445A',
  accentLight: '#FFF2F4',
  text:        '#1a1a1a',
  textMuted:   '#AAAAAA',
  white:       '#FFFFFF',
  bg:          '#F8F8F8',
  border:      '#EBEBEB',
};

export const styles = StyleSheet.create({

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
});