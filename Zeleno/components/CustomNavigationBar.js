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
    position: 'absolute', // Position the navigation bar at the bottom
    bottom: 15, // Stick to the bottom
    left: 0,
    right: 0, // Full width
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
    paddingHorizontal: 35, // Add some padding for better alignment
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    color: '#DF6D14', // Color for "Journal"
  },
  fab: {
    width: 95,
    height: 95,
    borderRadius: 50,
    backgroundColor: '#DF6D14',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', // Position the FAB absolutely
    top: -30, // Adjust the top position as needed
    left: '50%', // Center the FAB horizontally
    transform: [{ translateX: -30 }], // Fine-tune horizontal centering
  },
});

export default CustomNavigationBar;