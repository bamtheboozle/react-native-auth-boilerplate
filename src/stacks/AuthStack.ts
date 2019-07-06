import { createStackNavigator } from 'react-navigation';
import SignInScreen from '../screens/SignInScreen/SignInScreen';

const AuthStackNavigator = {
  SignIn: SignInScreen,
  Register: SignInScreen,
};

const AuthStack = createStackNavigator(AuthStackNavigator, { headerMode: 'none' });

export default AuthStack;
