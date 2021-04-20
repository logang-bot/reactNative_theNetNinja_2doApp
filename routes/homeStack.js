import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import About from "../screens/about";
import ReviewDetails from "../screens/reviewDetails";
const screens = {
  Home: {
    screen: Home,
  },
  ReviewDetails: {
    screen: ReviewDetails,
  },
  About: {
    screen: About,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
