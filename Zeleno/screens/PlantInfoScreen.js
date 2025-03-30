import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation, useRoute } from '@react-navigation/native';

const PlantInfoScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { plant } = route.params; // Get the plant data passed from JournalScreen

  // State for observation entry fields
  const [observationDate, setObservationDate] = useState('');
  const [visualChanges, setVisualChanges] = useState('');
  const [height, setHeight] = useState('');
  const [lightingNotes, setLightingNotes] = useState('');
  const [humidity, setHumidity] = useState('');

  // Function to save the observation entry
  const handleSaveEntry = () => {
    console.log('Saving observation entry:', {
      date: observationDate,
      visualChanges,
      height,
      lightingNotes,
      humidity,
    });
    // Implement saving logic here (e.g., store in state or API)
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#DF6D14" />
          <Text style={styles.cancelText}>cancel</Text>
        </TouchableOpacity>
      </View>

      {/* Plant Image */}
      <Image source={plant.image} style={styles.plantImage} />

      {/* Plant Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.plantName}>{plant.plantName}</Text>
        <Text style={styles.plantDetails}>Sown on: {plant.sowingDate}</Text>
        <Text style={styles.plantDetails}>Expected Harvest: {plant.harvestDate} ({plant.daysUntilHarvest} days later)</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${(100 - plant.daysUntilHarvest / 365 * 100)}%` }]}></View>
        </View>
        <Text style={styles.progressText}>76% to harvest</Text>
      </View>

      {/* Observation Entry Form */}
      <View style={styles.observationForm}>
        <Text style={styles.sectionTitle}>Add Observation Entry</Text>
        <TextInput
          style={styles.inputField}
          placeholder="14/03/2025"
          value={observationDate}
          onChangeText={setObservationDate}
        />
        <TextInput
          style={styles.inputField}
          placeholder="Visual changes (e.g., leaves unfolded)"
          value={visualChanges}
          onChangeText={setVisualChanges}
        />
        <TextInput
          style={styles.inputField}
          placeholder="Height (cm)"
          value={height}
          onChangeText={setHeight}
        />
        <TextInput
          style={styles.inputField}
          placeholder="Lighting notes"
          value={lightingNotes}
          onChangeText={setLightingNotes}
        />
        <TextInput
          style={styles.inputField}
          placeholder="Humidity (%)"
          value={humidity}
          onChangeText={setHumidity}
        />
        <TouchableOpacity style={styles.uploadButton}>
          <Text style={styles.uploadButtonText}>upload picture</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveEntry}>
          <Text style={styles.saveButtonText}>Save Entry</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F5E9',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
  },
  cancelText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#DF6D14',
    marginLeft: 8,
  },
  plantImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
    marginTop: 16,
  },
  detailsContainer: {
    backgroundColor: '#F2D6B3',
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
  },
  plantName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#DF6D14',
    marginTop: 16,
  },
  plantDetails: {
    fontSize: 16,
    color: '#DF6D14',
    marginTop: 8,
  },
  progressBar: {
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ECE1D8',
    marginTop: 16,
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
    backgroundColor: '#DF6D14',
  },
  progressText: {
    fontSize: 14,
    color: '#DF6D14',
    textAlign: 'right',
    marginTop: 8,
  },
  observationForm: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#DF6D14',
  },
  inputField: {
    borderWidth: 1,
    borderColor: '#DF6D14',
    borderRadius: 8,
    padding: 12,
    marginTop: 8,
    backgroundColor: '#FFF',
  },
  uploadButton: {
    backgroundColor: '#DF6D14',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 8,
  },
  uploadButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  saveButton: {
    backgroundColor: '#DF6D14',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 16,
  },
  saveButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default PlantInfoScreen;