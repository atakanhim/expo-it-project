
import React, { useCallback } from 'react';
import { AuthProvider, useAuth } from './app/contexts/AuthContext';
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen"
import RootNavigator from '@/app/Navigate';


const App: React.FC = () => {
  // const [fontsLoaded] = useFonts({
  //   regular: require("./assets/fonts/SourceSansPro-Regular.ttf"),
  //   semibold: require("./assets/fonts/SourceSansPro-Semibold.ttf"),

  // });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync()
  //   }
  // }, [fontsLoaded])

  // if (!fontsLoaded) {
  //   return null;
  // }


  return (

    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
};


export default App;