import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import { PaperProvider } from 'react-native-paper';

import LocationSearch from './src/components/LocationSearch';

function App(): React.JSX.Element {
  
  return (
    <PaperProvider>
      <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <LocationSearch />
      </ScrollView>
    </SafeAreaView>
    </PaperProvider>
  );
}

export default App;
