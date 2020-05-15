import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import AlertButton from "./src/screens/AlertButton"

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Alert: AlertButton
  },

  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
