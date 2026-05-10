import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { styles } from './HomeTopBar.styles';

interface HomeTopBarProps {
  initials?: string;
  onNotificationPress?: () => void;
  onAvatarPress?: () => void;
}

const HomeTopBar = ({
  initials = 'RK',
  onNotificationPress,
  onAvatarPress,
}: HomeTopBarProps) => {
  return (
    <View style={styles.navbar}>
      {/* Left — Logo + Brand */}
      <View style={styles.navLeft}>
        <View style={styles.logoMark}>
          <Icon name="compass" size={18} color="#FFFFFF" />
        </View>
        <View style={styles.brandCol}>
          <Text style={styles.brandName}>Traveloop</Text>
          <Text style={styles.brandTagline}>Explore the world</Text>
        </View>
      </View>

      {/* Right — Notification + Avatar */}
      <View style={styles.navRight}>
        <TouchableOpacity
          style={styles.navIconBtn}
          activeOpacity={0.8}
          onPress={onNotificationPress}>
          <Icon name="bell" size={16} color="#666666" />
          <View style={styles.notifDot} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.avatarBtn}
          activeOpacity={0.8}
          onPress={onAvatarPress}>
          <Text style={styles.avatarInitials}>{initials}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeTopBar;