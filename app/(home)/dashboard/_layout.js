import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useRouter } from 'expo-router';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons'; 
import Dashboard from './index';
import Profile from './profile';
import Settings from './settings';
import Logout from './logout';

const Drawer = createDrawerNavigator();

export default function DashboardLayout() {
  const router = useRouter();

  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerStyle: { backgroundColor: '#FF6347' },  // Updated header color
        headerTintColor: '#fff',
        drawerStyle: {
          backgroundColor: '#fafad2',  // Drawer background color (light goldenrod yellow)
          width: 250,
        },
        drawerActiveTintColor: '#FF6347',  // Updated active tint color
        drawerInactiveTintColor: '#2f4f4f',  // Updated inactive tint color
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: '500',
        },
      }}
    >
      {/* Dashboard Screen */}
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

      {/* Profile Screen */}
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome5 name="user-circle" size={size} color={color} />
          ),
        }}
      />

      {/* Settings Screen */}
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />

      {/* Logout Screen */}
      <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="logout" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
