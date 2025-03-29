import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'; // Ensure correct import

const ManualCreateScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.plantInfoContainer}>
          <Text style={styles.plantName}>Arugula</Text>
          <Text style={styles.plantDescription}>Peppery, fast-growing, great for beginners</Text>
        </View>
        <Image
          source={{ uri: 'https://source.unsplash.com/random/100x100/?arugula' }} // Replace with actual image URL or asset
          style={styles.plantImage}
        />
      </View>

      {/* Form Fields */}
      <View style={styles.formContainer}>
        {/* Sowing Date */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Sowing Date:</Text>
          <View style={styles.datePickerContainer}>
            <TextInput
              style={styles.dateInput}
              placeholder="DD/MM/YYYY"
              placeholderTextColor="#DF6D14"
            />
            <MaterialCommunityIcons name="calendar" size={24} color="#DF6D14" />
          </View>
        </View>

        {/* Substrate Type */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Substrate Type:</Text>
          <View style={styles.dropdownContainer}>
            <TextInput
              style={styles.dropdownInput}
              placeholder="Coconut"
              placeholderTextColor="#DF6D14"
            />
            <MaterialCommunityIcons name="chevron-down" size={24} color="#DF6D14" />
          </View>
        </View>

        {/* Harvest Date */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Harvest Date:</Text>
          <View style={styles.datePickerContainer}>
            <TextInput
              style={styles.dateInput}
              placeholder="DD/MM/YYYY"
              placeholderTextColor="#DF6D14"
            />
            <MaterialCommunityIcons name="calendar" size={24} color="#DF6D14" />
          </View>
        </View>

        {/* Description */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Description:</Text>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>Germination Time: 2-3 days</Text>
            <Text style={styles.descriptionText}>Growth Speed: Fast</Text>
          </View>
        </View>

        {/* Upload Picture */}
        <TouchableOpacity style={styles.uploadButton}>
          <Text style={styles.uploadButtonText}>upload picture</Text>
        </TouchableOpacity>
        <Text style={styles.uploadStatus}>No file selected</Text> {/* Add upload status message */}
      </View>

      {/* Create Batch Button */}
      <TouchableOpacity style={styles.createButton} onPress={() => console.log('Create batch pressed')}>
        <Text style={styles.createButtonText}>Create</Text>
      </TouchableOpacity>

      {/* Cancel Button */}
      <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
        <View style={styles.cancelIconContainer}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#DF6D14" />
          <Text style={styles.cancelText}>cancel</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F5E9',
    padding: 16,
    paddingTop: '20%', // Add padding to move the header down
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  plantInfoContainer: {
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
  formContainer: {
    flex: 1,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: '#DF6D14',
    marginBottom: 8,
  },
  datePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  dateInput: {
    flex: 1,
    marginRight: 8,
    fontSize: 16,
    color: '#DF6D14',
  },
  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  dropdownInput: {
    flex: 1,
    marginRight: 8,
    fontSize: 16,
    color: '#DF6D14',
  },
  descriptionContainer: {
    backgroundColor: '#FDEBD0',
    borderRadius: 8,
    padding: 16,
  },
  descriptionText: {
    fontSize: 16,
    color: '#DF6D14',
    marginBottom: 8,
  },
  uploadButton: {
    backgroundColor: '#FDEBD0',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 16,
    maxWidth: 200, // Shorten the button
  },
  uploadButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#DF6D14',
  },
  uploadStatus: {
    fontSize: 14,
    color: '#DF6D14',
    marginLeft: 16,
  },
  createButton: {
    backgroundColor: '#DF6D14',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignSelf: 'flex-end',
    marginBottom: 16,
  },
  createButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  cancelButton: {
    position: 'absolute',
    bottom: 50, // Adjusted as per your request
    left: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cancelIconContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 8,
    flexDirection: 'row', // Align arrow and text horizontally
    alignItems: 'center',
  },
  cancelText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#DF6D14',
  },
});

export default ManualCreateScreen;