import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import NewsScreen from '../screens/NewsScreen/NewsScreen';

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    News: NewsScreen,
  },
  {
    tabBarOptions: {
      activeTintColor: '#F8F8F8', // active icon color
      inactiveTintColor: '#586589', // inactive icon color
      style: {
        backgroundColor: '#171F33', // TabBar background
      },
      labelStyle: {
        fontSize: 14,
      },
    },
  },
);

const AppStack = createStackNavigator({ TabNavigator }, { headerMode: 'none' });

export default AppStack;
