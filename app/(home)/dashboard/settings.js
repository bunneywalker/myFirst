import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function Settings() {
  const navigation = useNavigation();

  const settingsOptions = [
    { icon: 'user', label: 'Account', color: '#ff6347', action: () => navigation.navigate('AccountSettings') },
    { icon: 'bell', label: 'Notifications', color: '#ff8c00', action: () => navigation.navigate('NotificationSettings') },
    { icon: 'lock', label: 'Privacy', color: '#e74c3c', action: () => navigation.navigate('PrivacySettings') },
    { icon: 'question-circle', label: 'Help & Support', color: '#8e44ad', action: () => navigation.navigate('HelpSupport') },
    { icon: 'info-circle', label: 'About', color: '#2ecc71', action: () => navigation.navigate('About') },
  ];

  return (
    <LinearGradient
      colors={['#ff7e5f', '#feb47b']}
      style={styles.gradientBackground}
    >
      <ScrollView contentContainerStyle={styles.container}>
        {settingsOptions.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.settingOption}
            onPress={option.action}
          >
            <FontAwesome name={option.icon} size={24} color={option.color} style={styles.icon} />
            <Text style={styles.optionText}>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 30,
    alignSelf: 'center',
  },
  settingOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  icon: {
    marginRight: 15,
  },
  optionText: {
    fontSize: 16,
    color: '#2c3e50',
    fontWeight: 'bold',
  },
});
