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
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { styles } from './RegisterScreen.styles';

// ── Types ──────────────────────────────────────────────────────
interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  additional: string;
}

// ── Reusable input field ────────────────────────────────────────
interface FieldProps {
  label: string;
  icon: string;
  placeholder: string;
  value: string;
  onChangeText: (t: string) => void;
  keyboardType?: any;
  autoCapitalize?: any;
  multiline?: boolean;
}

const Field = ({
  label,
  icon,
  placeholder,
  value,
  onChangeText,
  keyboardType = 'default',
  autoCapitalize = 'words',
  multiline = false,
}: FieldProps) => {
  const [focused, setFocused] = useState(false);

  return (
    <View style={styles.fieldWrap}>
      <Text style={styles.label}>{label}</Text>
      <View style={[
        styles.inputRow,
        focused && styles.inputRowFocused,
        multiline && styles.inputRowMulti,
      ]}>
        <Icon
          name={icon}
          size={15}
          color={focused ? '#E8445A' : '#AAAAAA'}
          style={styles.inputIcon}
        />
        <TextInput
          style={[styles.input, multiline && styles.inputMulti]}
          placeholder={placeholder}
          placeholderTextColor="#C0BDBD"
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          multiline={multiline}
          numberOfLines={multiline ? 3 : 1}
          textAlignVertical={multiline ? 'top' : 'center'}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </View>
    </View>
  );
};

// ── Main Screen ────────────────────────────────────────────────
export default function RegisterScreen({ navigation }: any) {
  const [form, setForm] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    country: '',
    additional: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const fadeAnim  = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(28)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim,  { toValue: 1, duration: 540, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 0, duration: 540, useNativeDriver: true }),
    ]).start();
  }, []);

  const set = (key: keyof FormState) => (val: string) =>
    setForm(prev => ({ ...prev, [key]: val }));

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2500);
    }, 1600);
  };

  const isReady =
    form.firstName.length > 0 &&
    form.lastName.length > 0 &&
    form.email.length > 0 &&
    form.phone.length > 0;

  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.accentBar} />

      <ScrollView
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>

        {/* ── Brand row ── */}
        <Animated.View style={[styles.brandRow, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
          <View style={styles.logoMark}>
            <Icon name="compass" size={18} color="#FFFFFF" />
          </View>
          <Text style={styles.brandName}>Traveloop</Text>
        </Animated.View>

        {/* ── Headline ── */}
        <Animated.View style={[styles.headingBlock, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
          <Text style={styles.heading}>
            Start your{'\n'}
            <Text style={styles.headingAccent}>adventure.</Text>
          </Text>
          <Text style={styles.subheading}>
            Create an account and explore the world.
          </Text>
        </Animated.View>

        {/* ── Card ── */}
        <Animated.View style={[styles.card, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>

          {/* Section pill */}
          <View style={styles.sectionPill}>
            <Icon name="user" size={13} color="#E8445A" />
            <Text style={styles.sectionPillText}>Personal Info</Text>
          </View>

          {/* Row: First & Last name */}
          <View style={styles.row}>
            <View style={styles.halfField}>
              <Field
                label="First name"
                icon="user"
                placeholder="Aryan"
                value={form.firstName}
                onChangeText={set('firstName')}
              />
            </View>
            <View style={styles.halfField}>
              <Field
                label="Last name"
                icon="user"
                placeholder="Shah"
                value={form.lastName}
                onChangeText={set('lastName')}
              />
            </View>
          </View>

          {/* Email */}
          <Field
            label="Email address"
            icon="mail"
            placeholder="you@example.com"
            value={form.email}
            onChangeText={set('email')}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          {/* Phone */}
          <Field
            label="Phone number"
            icon="phone"
            placeholder="+91 98765 43210"
            value={form.phone}
            onChangeText={set('phone')}
            keyboardType="phone-pad"
            autoCapitalize="none"
          />

          {/* Section pill 2 */}
          <View style={[styles.sectionPill, { marginTop: 6 }]}>
            <Icon name="map-pin" size={13} color="#E8445A" />
            <Text style={styles.sectionPillText}>Location</Text>
          </View>

          {/* Row: City & Country */}
          <View style={styles.row}>
            <View style={styles.halfField}>
              <Field
                label="City"
                icon="map-pin"
                placeholder="Indore"
                value={form.city}
                onChangeText={set('city')}
              />
            </View>
            <View style={styles.halfField}>
              <Field
                label="Country"
                icon="globe"
                placeholder="India"
                value={form.country}
                onChangeText={set('country')}
              />
            </View>
          </View>

          {/* Additional info */}
          <Field
            label="Additional info (optional)"
            icon="edit-3"
            placeholder="Tell us about your travel style…"
            value={form.additional}
            onChangeText={set('additional')}
            multiline
          />

          {/* Register button */}
          <TouchableOpacity
            style={[
              styles.btn,
              !isReady && !success && styles.btnDim,
              success && styles.btnSuccess,
            ]}
            onPress={handleSubmit}
            disabled={loading || success || !isReady}
            activeOpacity={0.85}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : success ? (
              <View style={styles.btnInner}>
                <Icon name="check-circle" size={18} color="#fff" />
                <Text style={styles.btnText}>You're in!</Text>
              </View>
            ) : (
              <View style={styles.btnInner}>
                <Text style={styles.btnText}>Create account</Text>
                <View style={styles.btnIconWrap}>
                  <Icon name="arrow-right" size={15} color="#E8445A" />
                </View>
              </View>
            )}
          </TouchableOpacity>

        </Animated.View>

        {/* ── Footer ── */}
        <Animated.View style={[styles.footer, { opacity: fadeAnim }]}>
          <Text style={styles.footerText}>Already have an account?  </Text>
          <TouchableOpacity activeOpacity={0.7} onPress={() => navigation?.navigate('Login')}>
            <Text style={styles.footerLink}>Sign in</Text>
          </TouchableOpacity>
        </Animated.View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}