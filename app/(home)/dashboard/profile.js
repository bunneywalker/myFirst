import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function Profile() {
  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <LinearGradient colors={['#FF8C00', '#FF6347']} style={styles.profileSection}>
        <Image
          source={{
            uri: 'https://scontent.fmnl14-1.fna.fbcdn.net/v/t39.30808-1/448777058_2247413658925223_2196210580947812140_n.jpg?stp=dst-jpg_s200x200&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeHoz4YiB57I91YkKF_15aEL3cpdQJphf6vdyl1AmmF_qzoGO8kF6eFOdyrZ_NQNtucTrEHA3_9WwEX3bZkygshf&_nc_ohc=ur4Pk0ge-nsQ7kNvgHzCVOU&_nc_zt=24&_nc_ht=scontent.fmnl14-1.fna&_nc_gid=Aj8AR5HoKw8G-LzSwmYWWIS&oh=00_AYDf3Om3SKGuuJ-lJcwUNeNPWu75wa4NITYGU8gJVv0Bxw&oe=674F6B87',
          }}
          style={styles.profileImage}
        />
        <Text style={styles.username}>Paulo Rosales</Text>
        <Text style={styles.email}>paulorosales24@gmail.com</Text>
        <Text style={styles.bio}>
          Driven by curiosity and powered by MongoDB, Express.js, React, Node.js, I craft intuitive, reliable software that makes a difference. From frontend to backend, I turn challenges into opportunities to innovate.
        </Text>
      </LinearGradient>

      {/* Highlights Section */}
      <View style={styles.highlights}>
        <LinearGradient colors={['#3b5998', '#8b9dc3']} style={styles.highlightCard}>
          <Text style={styles.highlightNumber}>24</Text>
          <Text style={styles.highlightLabel}>Projects</Text>
        </LinearGradient>
        <LinearGradient colors={['#1DA1F2', '#00acee']} style={styles.highlightCard}>
          <Text style={styles.highlightNumber}>2.3k</Text>
          <Text style={styles.highlightLabel}>Followers</Text>
        </LinearGradient>
        <LinearGradient colors={['#32CD32', '#228B22']} style={styles.highlightCard}>
          <Text style={styles.highlightNumber}>500</Text>
          <Text style={styles.highlightLabel}>Following</Text>
        </LinearGradient>
      </View>

      {/* Account Info */}
      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>Account Information</Text>
        <Text style={styles.infoText}>Membership: Premium</Text>
        <Text style={styles.infoText}>Joined: January 2022</Text>
        <Text style={styles.infoText}>Location: Misamis Oriental, Cagayan de Oro</Text>
      </View>

      {/* Social Media Links */}
      <View style={styles.socialMediaSection}>
        <Text style={styles.socialMediaTitle}>Connect with me</Text>
        <View style={styles.socialIcons}>
          <TouchableOpacity>
            <FontAwesome name="facebook" size={30} color="#1877F2" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="twitter" size={30} color="#1DA1F2" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="linkedin" size={30} color="#0A66C2" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="github" size={30} color="#333" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Edit Profile Button */}
      <TouchableOpacity>
        <LinearGradient colors={['#FF7F50', '#FF4500']} style={styles.button}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAD2',
    padding: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
    borderRadius: 20,
    padding: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#fff',
    marginBottom: 15,
  },
  username: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#e0e0e0',
    marginBottom: 10,
  },
  bio: {
    fontSize: 14,
    color: '#dcdcdc',
    textAlign: 'center',
    paddingHorizontal: 20,
    lineHeight: 22,
  },
  highlights: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  highlightCard: {
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  highlightNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  highlightLabel: {
    fontSize: 14,
    color: '#fff',
    marginTop: 5,
  },
  infoSection: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 20,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#444',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
  socialMediaSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  socialMediaTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#444',
    marginBottom: 10,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    marginHorizontal: 15,
  },
  button: {
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});
