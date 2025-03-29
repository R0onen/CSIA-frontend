import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import JournalScreen from './screens/JournalScreen';
import CreateNewBatchScreen from './screens/CreateNewBatchScreen';
import IndoorScreen from './screens/IndoorScreen';
import ManualCreateScreen from './screens/ManualCreateScreen'; // Import the new screen

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Journal">
        <Stack.Screen
          name="Journal"
          component={JournalScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateNewBatch"
          component={CreateNewBatchScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Indoor"
          component={IndoorScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ManualCreate"
          component={ManualCreateScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;