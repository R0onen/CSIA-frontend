import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const BatchConfirmationScreen = ({ route, navigation }) => {
  const { plantName, plantDescription, sowingDate, harvestDate, substrateType } = route.params;

  return (
    <View style={styles.container}>
      {/* Success Message */}
      <Text style={styles.successMessage}>Batch has created successfully!</Text>

      {/* Card Section */}
      <View style={styles.card}>
        {/* Top Row: Plant Name, Description, and Icon */}
        <View style={styles.topRow}>
          {/* Left Column: Plant Name and Description */}
          <View style={styles.leftColumn}>
            <Text style={styles.plantName}>{plantName}</Text>
            <Text style={styles.plantDescription}>{plantDescription}</Text>
          </View>

          {/* Right Column: Plant Icon */}
          <View style={styles.plantIconContainer}>
            <MaterialCommunityIcons name="leaf" size={50} color="#4CAF50" />
          </View>
        </View>

        {/* Details Section */}
        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Sowing Date:</Text>
            <Text style={styles.detailValue}>{sowingDate}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Substrate:</Text>
            <Text style={styles.detailValue}>{substrateType}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Harvest Date:</Text>
            <Text style={styles.detailValue}>{harvestDate}</Text>
          </View>
        </View>
      </View>

      {/* Buttons Section */}
      <View style={styles.buttonContainer}>
        {/* Go to Journal Button */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Journal')}>
          <MaterialCommunityIcons name="notebook" size={24} color="#FFFFFF" />
          <Text style={styles.buttonText}>Go to Journal</Text>
        </TouchableOpacity>

        {/* Add Batch Button */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ManualCreate')}>
          <MaterialCommunityIcons name="plus" size={24} color="#FFFFFF" />
          <Text style={styles.buttonText}>Add batch</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F5E9',
        padding: 16,
        alignItems: 'center',
        justifyContent: 'flex-start', // Start from the top
        paddingTop: '20%', // Adjust this percentage to control height placement
    },    
  successMessage: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#DF6D14',
    marginTop: 64, // Increased margin to move it further down
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#FDEBD0',
    borderRadius: 8,
    padding: 16,
    marginTop: 32,
    width: '100%',
    alignItems: 'center', // Center content horizontally
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16, // Add spacing between the top row and details
    width: '100%',
    justifyContent: 'space-between', // Space out name/description and icon
  },
  leftColumn: {
    flex: 1,
  },
  plantName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#DF6D14',
  },
  plantDescription: {
    fontSize: 16,
    color: '#DF6D14',
    marginTop: 8,
  },
  plantIconContainer: {
    width: 100,
    height: 100,
    borderRadius: 8,
    borderColor: '#000', // Optional: Add border for better visibility
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    alignSelf: 'center', // Center the details horizontally
    marginTop: 16, // Add spacing between the icon and details
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15, // Add spacing between rows
  },
  detailLabel: {
    fontSize: 16,
    color: '#DF6D14',
    marginRight: 8,
  },
  detailValue: {
    fontSize: 16,
    color: '#DF6D14',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 16, // Space between buttons
    justifyContent: 'space-between', // Distribute buttons with space between them
    marginTop: 32,
    marginBottom: 16,
    paddingHorizontal: 16, // Add horizontal padding for better spacing
  },
  button: {
    backgroundColor: '#8B4513',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginLeft: 8,
  },
});

export default BatchConfirmationScreen;