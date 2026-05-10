import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Animated,
  ActivityIndicator,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { styles } from './LoginScreen.styles';

// ── Dummy credentials ─────────────────────────────────────────────
const DUMMY_USER = {
  email:    'test.com',
  password: 'travel123',
};

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail]             = useState('');
  const [password, setPassword]       = useState('');
  const [showPass, setShowPass]       = useState(false);
  const [focusedField, setFocusedField] = useState<'email' | 'password' | null>(null);
  const [loading, setLoading]         = useState(false);
  const [error, setError]             = useState('');

  const fadeAnim  = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(28)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim,  { toValue: 1, duration: 540, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 0, duration: 540, useNativeDriver: true }),
    ]).start();
  }, []);

  const handleLogin = () => {
    if (!email || !password) return;
    setError('');
    setLoading(true);

    // Simulate API call with dummy auth
    setTimeout(() => {
      setLoading(false);
      if (
        email.trim().toLowerCase() === DUMMY_USER.email &&
        password === DUMMY_USER.password
      ) {
        // ✅ Navigate to main app — replaces auth stack so back button won't return to login
        navigation.replace('Main');
      } else {
        setError('Invalid email or password. Try test@traveloop.com / travel123');
      }
    }, 1200);
  };

  const ready = email.length > 0 && password.length > 0;

  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Top red accent bar */}
      <View style={styles.accentBar} />

      <ScrollView
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>

        {/* ── Brand ── */}
        <Animated.View style={[styles.brandRow, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
          <View style={styles.logoMark}>
            <Icon name="compass" size={18} color="#FFFFFF" />
          </View>
          <Text style={styles.brandName}>Traveloop</Text>
        </Animated.View>

        {/* ── Headline ── */}
        <Animated.View style={[styles.headingBlock, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
          <Text style={styles.heading}>
            Every journey{'\n'}starts with a{' '}
            <Text style={styles.headingAccent}>login.</Text>
          </Text>
          <Text style={styles.subheading}>
            Your next destination is waiting for you.
          </Text>
        </Animated.View>

        {/* ── Form card ── */}
        <Animated.View style={[styles.card, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>

          {/* Email field */}
          <Text style={styles.label}>Email address</Text>
          <View style={[styles.inputRow, focusedField === 'email' && styles.inputRowFocused]}>
            <Icon
              name="mail"
              size={17}
              color={focusedField === 'email' ? '#E8445A' : '#AAAAAA'}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="test@traveloop.com"
              placeholderTextColor="#C0BDBD"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={t => { setEmail(t); setError(''); }}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
            />
          </View>

          {/* Password field */}
          <Text style={[styles.label, { marginTop: 20 }]}>Password</Text>
          <View style={[styles.inputRow, focusedField === 'password' && styles.inputRowFocused]}>
            <Icon
              name="lock"
              size={17}
              color={focusedField === 'password' ? '#E8445A' : '#AAAAAA'}
              style={styles.inputIcon}
            />
            <TextInput
              style={[styles.input, { flex: 1 }]}
              placeholder="travel123"
              placeholderTextColor="#C0BDBD"
              secureTextEntry={!showPass}
              value={password}
              onChangeText={t => { setPassword(t); setError(''); }}
              onFocus={() => setFocusedField('password')}
              onBlur={() => setFocusedField(null)}
            />
            <TouchableOpacity
              onPress={() => setShowPass(p => !p)}
              hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}>
              <Icon name={showPass ? 'eye-off' : 'eye'} size={17} color="#AAAAAA" />
            </TouchableOpacity>
          </View>

          {/* Error message */}
          {error.length > 0 && (
            <View style={errorStyle.wrap}>
              <Icon name="alert-circle" size={13} color="#E8445A" />
              <Text style={errorStyle.text}>{error}</Text>
            </View>
          )}

          {/* Forgot password */}
          <TouchableOpacity style={styles.forgotRow} activeOpacity={0.7}>
            <Text style={styles.forgotText}>Forgot password?</Text>
          </TouchableOpacity>

          {/* Sign in button */}
          <TouchableOpacity
            style={[styles.btn, !ready && styles.btnDim]}
            onPress={handleLogin}
            disabled={loading || !ready}
            activeOpacity={0.85}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <View style={styles.btnInner}>
                <Text style={styles.btnText}>Sign in</Text>
                <View style={styles.btnIconWrap}>
                  <Icon name="arrow-right" size={16} color="#E8445A" />
                </View>
              </View>
            )}
          </TouchableOpacity>

          {/* Divider */}
          <View style={styles.dividerRow}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerLabel}>or continue with</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Social buttons — also use dummy login */}
          <View style={styles.socialRow}>
            <TouchableOpacity
              style={styles.socialBtn}
              activeOpacity={0.8}
              onPress={() => navigation.replace('Main')}>
              <Icon name="globe" size={16} color="#444444" />
              <Text style={styles.socialBtnText}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.socialBtn}
              activeOpacity={0.8}
              onPress={() => navigation.replace('Main')}>
              <Icon name="smartphone" size={16} color="#444444" />
              <Text style={styles.socialBtnText}>Apple</Text>
            </TouchableOpacity>
          </View>

        </Animated.View>

        {/* ── Dummy credentials hint ── */}
        <Animated.View style={[hintStyle.wrap, { opacity: fadeAnim }]}>
          <Icon name="info" size={12} color="#AAAAAA" />
          <Text style={hintStyle.text}>
            Demo: test@traveloop.com  ·  travel123
          </Text>
        </Animated.View>

        {/* ── Footer ── */}
        <Animated.View style={[styles.footer, { opacity: fadeAnim }]}>
          <Text style={styles.footerText}>Don't have an account?  </Text>
          <TouchableOpacity activeOpacity={0.7} onPress={() => navigation?.navigate('Register')}>
            <Text style={styles.footerLink}>Create one</Text>
          </TouchableOpacity>
        </Animated.View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

// ── Local inline styles (small additions, not worth adding to styles file) ──
import { StyleSheet } from 'react-native';

const errorStyle = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 10,
    backgroundColor: '#FFF2F4',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  text: {
    flex: 1,
    fontSize: 12,
    color: '#E8445A',
    fontWeight: '500',
    lineHeight: 16,
  },
});

const hintStyle = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    marginTop: 16,
    marginBottom: 4,
  },
  text: {
    fontSize: 11,
    color: '#AAAAAA',
    fontWeight: '500',
  },
});