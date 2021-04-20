import { createStackNavigator } from "react-navigation-stack";
import About from "../screens/about";
const screens = {
  About: {
    screen: About,
    navigationOptions: {
      title: "About GameZone",
      // headerStyle: {
      //   backgroundColor: "#333",
      // },
    },
  },
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#eee",
      height: 60,
    },
    headerTintColor: "#444",
  },
});

export default AboutStack;
