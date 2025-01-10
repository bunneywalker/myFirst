import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from 'react-native-vector-icons';

export default function Dashboard() {
  return (
    <LinearGradient
      colors={['#ff7e5f', '#feb47b']}
      style={styles.gradientBackground}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.cardContainer}>
          <LinearGradient
            colors={['#ff6a00', '#ff8c00']}
            style={[styles.card]}
          >
            <FontAwesome name="hourglass-start" size={30} color="#fff" />
            <Text style={styles.cardTitle}>24</Text>
            <Text style={styles.cardLabel}>In Progress</Text>
          </LinearGradient>
          <LinearGradient
            colors={['#ff9a8b', '#ff6a88']}
            style={[styles.card]}
          >
            <FontAwesome name="clipboard" size={30} color="#fff" />
            <Text style={styles.cardTitle}>60</Text>
            <Text style={styles.cardLabel}>In Review</Text>
          </LinearGradient>
          <LinearGradient
            colors={['#f7b731', '#f6a731']}
            style={[styles.card]}
          >
            <FontAwesome name="pause" size={30} color="#fff" />
            <Text style={styles.cardTitle}>15</Text>
            <Text style={styles.cardLabel}>On Hold</Text>
          </LinearGradient>
          <LinearGradient
            colors={['#4caf50', '#81c784']}
            style={[styles.card]}
          >
            <FontAwesome name="check-circle" size={30} color="#fff" />
            <Text style={styles.cardTitle}>50</Text>
            <Text style={styles.cardLabel}>Completed</Text>
          </LinearGradient>
        </View>
        <View style={styles.chartContainer}>
          <Text style={styles.chartTitle}>Project Statistics</Text>
          <LineChart
            data={{
              labels: ['M', 'T', 'W', 'T', 'F', 'S'],
              datasets: [
                {
                  data: [30, 50, 70, 90, 50, 60],
                  strokeWidth: 2,
                },
              ],
            }}
            width={350}
            height={220}
            chartConfig={{
              backgroundColor: '#FFF',
              backgroundGradientFrom: '#f4f4f4',
              backgroundGradientTo: '#f4f4f4',
              color: (opacity = 1) => `rgba(0, 150, 136, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            }}
            bezier
          />
        </View>
        <View style={styles.summaryContainer}>
          <LinearGradient
            colors={['#e3f2fd', '#bbdefb']}
            style={styles.summaryBox}
          >
            <Text style={styles.summaryTitle}>Total working hours</Text>
            <Text style={styles.summaryValue}>74:30:01</Text>
            <Text style={styles.summaryPercent}>47%</Text>
          </LinearGradient>
          <LinearGradient
            colors={['#fce4ec', '#f8bbd0']}
            style={styles.summaryBox}
          >
            <Text style={styles.summaryTitle}>Total task activity</Text>
            <Text style={styles.summaryValue}>104 Tasks</Text>
            <Text style={styles.summaryPercent}>60%</Text>
          </LinearGradient>
        </View>
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
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    width: '48%',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  cardLabel: {
    fontSize: 16,
    color: '#fff',
    marginTop: 5,
  },
  chartContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  summaryBox: {
    width: '48%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 4,
  },
  summaryTitle: {
    fontSize: 16,
    color: '#7f8c8d',
  },
  summaryValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  summaryPercent: {
    fontSize: 14,
    color: '#2ecc71',
    marginTop: 5,
  },
});
