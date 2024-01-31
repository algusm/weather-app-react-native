/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import LocationSearch from './src/components/LocationSearch';

function App(): React.JSX.Element {
  
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <LocationSearch />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
