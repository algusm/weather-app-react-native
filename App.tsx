import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import { PaperProvider } from 'react-native-paper';

import WeeklyForecast from './src/components/WeeklyForecast';

function App(): React.JSX.Element {
  
  return (
    <PaperProvider>
      <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <WeeklyForecast />
      </ScrollView>
    </SafeAreaView>
    </PaperProvider>
  );
}

export default App;
