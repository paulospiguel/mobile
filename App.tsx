import React from "react";
import { NativeBaseProvider, StatusBar } from "native-base";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { THEME } from "./src/styles/theme";
import { Loading } from "./src/components/Loading";
import { SignIn } from "./src/screens/SignIn";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />

      {fontsLoaded ? <SignIn /> : <Loading />}
    </NativeBaseProvider>
  );
}
