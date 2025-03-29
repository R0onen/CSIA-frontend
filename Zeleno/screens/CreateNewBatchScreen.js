// screens/CreateNewBatchScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CreateNewBatchScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Create new batch</Text>
        <Text style={styles.subtitle}>Choose growing environment</Text>
      </View>

      {/* Options */}
      <View style={styles.optionsContainer}>
        {/* Indoor Option */}
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Indoor')}>
          <Text style={styles.optionTitle}>Indoor</Text>
          <Text style={styles.optionDescription}>Grown on windowsills, shelves, or under grow lights.</Text>
        </TouchableOpacity>

        {/* Outdoor Option */}
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Outdoor')}>
          <Text style={styles.optionTitle}>Outdoor</Text>
          <Text style={styles.optionDescription}>Grown on balconies, terraces, or garden beds.</Text>
        </TouchableOpacity>
      </View>

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
  },
  header: {
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#DF6D14',
  },
  subtitle: {
    fontSize: 16,
    color: '#DF6D14',
    marginTop: 8,
  },
  optionsContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  option: {
    backgroundColor: '#FDEBD0',
    borderRadius: 8,
    padding: 24,
    marginBottom: 16,
  },
  optionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#DF6D14',
    textAlign: 'center',
  },
  optionDescription: {
    fontSize: 16,
    color: '#DF6D14',
    textAlign: 'center',
    marginTop: 8,
  },
  cancelButton: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cancelIconContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 8,
  },
  cancelText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#DF6D14',
  },
});

export default CreateNewBatchScreen;