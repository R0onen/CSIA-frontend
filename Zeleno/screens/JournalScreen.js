import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'; // Import SafeAreaView and TouchableOpacity
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import CustomNavigationBar from '../components/CustomNavigationBar'; // Import the custom navigation bar

const JournalScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Text style={styles.title}>ZELENO</Text>
        <TouchableOpacity style={styles.notificationIcon}>
          <MaterialCommunityIcons name="bell" size={24} color="#DF6D14" />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        {/* Add your content here */}
        <Text style={styles.bodyText}>This is the main content area.</Text>
      </View>

      {/* Custom Navigation Bar */}
      <CustomNavigationBar navigation={navigation} /> {/* Pass navigation prop */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F5E9',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#DF6D14',
  },
  notificationIcon: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#F8F5E9',
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default JournalScreen;