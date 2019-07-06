import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import LoadingScreen from './src/screens/LoadingScreen/LoadingScren';
import AppStack from './src/stacks/AppStack';
import AuthStack from './src/stacks/AuthStack';

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'Loading',
    },
  ),
);
