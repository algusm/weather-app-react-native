import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackParamList } from './src/types/navigation';

import WeeklyForecast from './src/components/WeeklyForecast';
import DailyForecast from './src/components/DailyForecast';

const Stack = createNativeStackNavigator<StackParamList>();

function App(): React.JSX.Element {
  
  return (
    <PaperProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown : false}}>
        <Stack.Screen name="Weekly" component={WeeklyForecast}/>
        <Stack.Screen name="Daily" component={DailyForecast}/>
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
