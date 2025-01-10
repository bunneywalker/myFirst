import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';

export default function Dashboard() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={['#ff7e5f', '#feb47b']} 
      style={styles.container}
    >
      <View style={styles.greetingContainer}>
        <Text style={styles.title}>Confirm Logout</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/(auth)/login')}>
        <FontAwesome name="sign-out" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cancelButton} onPress={() => router.back()}>
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  greetingContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff', 
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    flexDirection: 'row', 
    alignItems: 'center',
    backgroundColor: '#e74c3c', 
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 20,
  },
  icon: {
    marginRight: 10, 
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  cancelButton: {
    backgroundColor: '#bdc3c7', 
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cancelButtonText: {
    color: '#2c3e50', 
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
  },
});
