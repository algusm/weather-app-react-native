import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackParamList } from './src/types/navigation';

import WeeklyForecast from './src/components/WeeklyForecast';
import DailyForecast from './src/components/DailyForecast';
import { store } from './src/store/store';

const Stack = createNativeStackNavigator<StackParamList>();

function App(): React.JSX.Element {
  
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown : false}}>
            <Stack.Screen name="Weekly" component={WeeklyForecast}/>
            <Stack.Screen name="Daily" component={DailyForecast}/>
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

export default App;
