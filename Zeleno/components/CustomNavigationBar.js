import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CustomNavigationBar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Journal Icon */}
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name="book-open-variant" size={32} color="#DF6D14" />
        <Text style={styles.label}>Journal</Text>
      </View>

      {/* Floating Action Button (FAB) */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('CreateNewBatch')} // Navigate to CreateNewBatchScreen
      >
        <MaterialCommunityIcons name="plus" size={32} color="#FFFFFF" />
      </TouchableOpacity>

      {/* Explore Icon */}
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name="earth" size={32} color="#A5846B" />
        <Text style={styles.label}>Explore</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Distribute icons evenly
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // Ensure white background
    paddingVertical: 16,
    paddingHorizontal: 16, // Reduce this value to bring icons closer
    borderTopWidth: 1,
    borderTopColor: '#EAEAEA',
  },
  iconContainer: {
    alignItems: 'center',
    paddingHorizontal: 30, // Add some padding for better alignment
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    color: '#DF6D14', // Color for "Journal"
  },
  fab: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#DF6D14',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomNavigationBar;