import React from 'react';
import {RootNavigator} from './navigation/RootNavigator';
import {PaperProvider} from 'react-native-paper';

function App() {
  return (
    <PaperProvider>
      <RootNavigator />
    </PaperProvider>
  );
}

export default App;
