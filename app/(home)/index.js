import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome } from 'react-native-vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home() {
  const router = useRouter();

  return (
    <LinearGradient colors={['#ff7e5f', '#feb47b']} style={styles.container}>
      <View style={styles.card}>
        {/* Home Icon */}
        <FontAwesome name="home" size={60} color="#feb47b" style={styles.icon} />

        <Text style={styles.title}>Welcome Home!</Text>
        <Text style={styles.subtitle}>
          Dive into the app to explore features and efficiently manage your account.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/(home)/dashboard')}
        >
          <Text style={styles.buttonText}>Go to Dashboard</Text>
        </TouchableOpacity>
      </View>
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
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    width: '90%',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  icon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3b3b3b',
    marginBottom: 15,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#6c757d',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
    paddingHorizontal: 15,
  },
  button: {
    backgroundColor: '#e63946',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
    letterSpacing: 1, 
  },
});

