import React from 'react';
import * as Font from 'expo-font';
import { ActivityIndicator, AsyncStorage, StatusBar, StyleSheet, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

class LoadingScreen extends React.Component<NavigationScreenProps> {
  async componentDidMount() {
    await Font.loadAsync({
      inter: require('../../../assets/fonts/Inter-Regular.ttf'),
      'inter-bold': require('../../../assets/fonts/Inter-Bold.ttf'),
      'inter-semi-bold': require('../../../assets/fonts/Inter-SemiBold.ttf'),
    });
    this.getAuthState();
  }
  // Fetch the token from storage then navigate to our appropriate place
  getAuthState = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default LoadingScreen;
