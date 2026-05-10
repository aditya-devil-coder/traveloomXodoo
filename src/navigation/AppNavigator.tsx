import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import LoginScreen from '../screens/LoginScreen/LoginScreen';
import RegisterScreen from '../screens/Registerscreen/Registerscreen';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import CreateTripScreen from '../screens/Createtripscreen/Createtripscreen';
import ChatScreen from '../screens/ChatScreen/ChatScreen';
import BlogScreen from '../screens/BlogScreen/Blogscreen';
import BlogDetailScreen from '../screens/BlogDetailScreen/BlogDetailScreen';
import MeScreen from '../screens/MeScreen/MeScreen';
import NotificationScreen from '../screens/NotificationScreen/NotificationScreen';
import MessageScreen from '../screens/MessageScreen/MessageScreen';

const Tab   = createBottomTabNavigator();
const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login"    component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeMain"      component={HomeScreen} />
      <Stack.Screen name="CreateTrip"    component={CreateTripScreen} />
      <Stack.Screen name="Notifications" component={NotificationScreen} />
      <Stack.Screen name="MessageScreen" component={MessageScreen} />
    </Stack.Navigator>
  );
}

function ChatStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ChatMain"      component={ChatScreen} />
      <Stack.Screen name="MessageScreen" component={MessageScreen} />
    </Stack.Navigator>
  );
}

function BlogStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BlogMain"         component={BlogScreen} />
      <Stack.Screen name="BlogDetailScreen" component={BlogDetailScreen} />
      <Stack.Screen name="MessageScreen"    component={MessageScreen} />
    </Stack.Navigator>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor:   '#E8445A',
        tabBarInactiveTintColor: '#999999',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#F0F0F0',
          height: 60,
          paddingBottom: 8,
          paddingTop: 4,
        },
        tabBarLabelStyle: { fontSize: 11, fontWeight: '500' },
      }}>

      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="explore" size={size} color={color} />,
        }}
      />

      {/* ✅ Chat tab — hamesha ChatMain (list) pe reset hoga */}
      <Tab.Screen
        name="Chat"
        component={ChatStack}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="chat-bubble-outline" size={size} color={color} />,
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            // Prevent default behavior
            e.preventDefault();
            // Always reset to ChatMain when tab is pressed
            navigation.navigate('Chat', { screen: 'ChatMain' });
          },
        })}
      />

      <Tab.Screen
        name="Blogs"
        component={BlogStack}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="article" size={size} color={color} />,
        }}
      />

      <Tab.Screen
        name="Me"
        component={MeScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="account-circle" size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen name="Main" component={MainTabs} />
    </Stack.Navigator>
  );
}

export default AppNavigator;