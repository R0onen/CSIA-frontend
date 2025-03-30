import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const BatchConfirmationScreen = ({ route, navigation }) => {
  const { plantName, plantDescription, sowingDate, harvestDate, substrateType, selectedImage } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.timeStamp}>12:07</Text>
      <Text style={styles.successMessage}>Batch has been created successfully!</Text>

      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.plantName}>{plantName}</Text>
          <Text style={styles.plantDescription}>{plantDescription}</Text>
        </View>
        <Image
          source={{ uri: selectedImage || 'https://source.unsplash.com/random/100x100/?arugula' }}
          style={styles.plantImage}
        />

        <View style={styles.detailsContainer}>
          <Text style={styles.detailLabel}>Sowing Date:</Text>
          <Text style={styles.detailValue}>{sowingDate}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailLabel}>Substrate:</Text>
          <Text style={styles.detailValue}>{substrateType}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailLabel}>Harvest Date:</Text>
          <Text style={styles.detailValue}>{harvestDate}</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Journal')}>
          <MaterialCommunityIcons name="notebook" size={24} color="#FFFFFF" />
          <Text style={styles.buttonText}>Go to Journal</Text>
        </TouchableOpacity>
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
  },
  timeStamp: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#DF6D14',
    marginTop: 32,
  },
  successMessage: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#DF6D14',
    marginTop: 32,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#FDEBD0',
    borderRadius: 8,
    padding: 16,
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
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
  plantImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
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
    justifyContent: 'space-between',
    marginTop: 32,
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