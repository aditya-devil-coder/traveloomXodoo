import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { styles, C } from './CreateTripScreen.styles';

// ── Types ─────────────────────────────────────────────────────────
interface FormRowProps {
  label: string;
  placeholder?: string;
  value: string;
  onChangeText: (t: string) => void;
  isDate?: boolean;
}

// ── Data ──────────────────────────────────────────────────────────
const SUGGESTION_SLOTS = [
  { id: '1' },
  { id: '2' },
  { id: '3' },
  { id: '4' },
  { id: '5' },
  { id: '6' },
];

// ── Sub Components ────────────────────────────────────────────────

const FormRow = ({
  label,
  placeholder,
  value,
  onChangeText,
  isDate = false,
}: FormRowProps) => (
  <View style={styles.formRow}>
    <Text style={styles.formLabel}>{label}</Text>
    <View style={styles.inputWrap}>
      <TextInput
        style={styles.input}
        placeholder={placeholder ?? (isDate ? 'DD / MM / YYYY' : '')}
        placeholderTextColor={C.textMuted}
        value={value}
        onChangeText={onChangeText}
      />
      {isDate && (
        <Icon name="calendar" size={14} color={C.textMuted} style={styles.inputIcon} />
      )}
    </View>
  </View>
);

const SuggestionCard = () => (
  <View style={styles.suggCard}>
    <View style={styles.suggCardInner} />
  </View>
);

// ── Main Screen ───────────────────────────────────────────────────
export default function CreateTripScreen({ navigation }: any) {
  const [tripName,   setTripName]   = useState('');
  const [startDate,  setStartDate]  = useState('');
  const [place,      setPlace]      = useState('');
  const [placeStart, setPlaceStart] = useState('');
  const [endDate,    setEndDate]    = useState('');

  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" backgroundColor={C.white} />

      {/* ── Top Bar ── */}
      <View style={styles.topBar}>
        <TouchableOpacity
          onPress={() => navigation?.goBack()}
          style={styles.backBtn}>
          <Icon name="arrow-left" size={20} color={C.text} />
        </TouchableOpacity>
        <Text style={styles.screenTitle}>Create a new Trip</Text>
        <View style={{ width: 36 }} />
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">

        {/* ── Trip Name ── */}
        <View style={styles.section}>
          <View style={styles.tripNameWrap}>
            <TextInput
              style={styles.tripNameInput}
              placeholder="Trip name..."
              placeholderTextColor={C.textMuted}
              value={tripName}
              onChangeText={setTripName}
            />
            <TouchableOpacity style={styles.saveBtn} activeOpacity={0.8}>
              <Icon name="check" size={16} color={C.white} />
            </TouchableOpacity>
          </View>
        </View>

        {/* ── Plan a New Trip Form ── */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionAccentBar} />
            <Text style={styles.sectionTitle}>Plan a new trip</Text>
          </View>

          <View style={styles.formCard}>
            <FormRow
              label="Start Date:"
              isDate
              value={startDate}
              onChangeText={setStartDate}
            />
            <View style={styles.divider} />
            <FormRow
              label="Select a Place :"
              placeholder="Search destination..."
              value={place}
              onChangeText={setPlace}
            />
            <View style={styles.divider} />
            <FormRow
              label="Start Date:"
              isDate
              value={placeStart}
              onChangeText={setPlaceStart}
            />
            <View style={styles.divider} />
            <FormRow
              label="End Date:"
              isDate
              value={endDate}
              onChangeText={setEndDate}
            />
          </View>
        </View>

        {/* ── Suggestions ── */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionAccentBar} />
            <Text style={styles.sectionTitle}>
              Suggestion for Places to Visit/Activities to perform
            </Text>
          </View>

          <View style={styles.suggGrid}>
            {SUGGESTION_SLOTS.map(slot => (
              <SuggestionCard key={slot.id} />
            ))}
          </View>
        </View>

      </ScrollView>

      {/* ── Create Button ── */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.createBtn} activeOpacity={0.88}>
          <Icon name="plus" size={16} color={C.white} />
          <Text style={styles.createBtnText}>Create Trip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}