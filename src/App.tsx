import React, {useEffect} from 'react';
import {RootNavigator} from './navigation/RootNavigator';
import {PaperProvider} from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <PaperProvider>
      <RootNavigator />
    </PaperProvider>
  );
}

export default App;
