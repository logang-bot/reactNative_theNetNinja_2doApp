import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import Navigator from "./routes/homeStack";

import Home from "./screens/home";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const getFonts = () =>
    Font.loadAsync({
      "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
      "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
    }).then(() => setFontsLoaded(true));
  getFonts();
  if (fontsLoaded) {
    console.log(fontsLoaded);
    return <Navigator />;
  }
  // else return <Navigator />;
  else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }
}
