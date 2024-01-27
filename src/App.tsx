import React, {useEffect, useState} from 'react';
import {RootNavigator} from './navigation/RootNavigator';
import {PaperProvider} from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';
import {getLocalData} from './utils/AsyncStorage';
import {AsyncKeys} from './utils/async-keys';
import {LoginScreen} from './screens/LoginScreen/LoginScreen';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const [hasUserName, setHasUserName] = useState(null);

  useEffect(() => {
    async function fetchUserName() {
      const userName = await getLocalData(AsyncKeys.userName);
      setHasUserName(userName);
    }
    fetchUserName();
  }, []);

  return (
    <PaperProvider>
      {hasUserName ? <RootNavigator /> : <LoginScreen />}
    </PaperProvider>
  );
}

export default App;
