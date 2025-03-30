import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import JournalScreen from './screens/JournalScreen';
import CreateNewBatchScreen from './screens/CreateNewBatchScreen';
import IndoorScreen from './screens/IndoorScreen';
import ManualCreateScreen from './screens/ManualCreateScreen'; // Import the ManualCreateScreen
import BatchConfirmationScreen from './screens/BatchConfirmationScreen'; // Import the BatchConfirmationScreen

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Journal">
        {/* Journal Screen */}
        <Stack.Screen
          name="Journal"
          component={JournalScreen}
          options={{ headerShown: false }}
        />
        {/* Create New Batch Screen */}
        <Stack.Screen
          name="CreateNewBatch"
          component={CreateNewBatchScreen}
          options={{ headerShown: false }}
        />
        {/* Indoor Screen */}
        <Stack.Screen
          name="Indoor"
          component={IndoorScreen}
          options={{ headerShown: false }}
        />
        {/* Manual Create Screen */}
        <Stack.Screen
          name="ManualCreate"
          component={ManualCreateScreen}
          options={{ headerShown: false }}
        />
        {/* Batch Confirmation Screen */}
        <Stack.Screen
          name="BatchConfirmation"
          component={BatchConfirmationScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;