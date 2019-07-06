import React from 'react';
import { View, Button, AsyncStorage } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { Ionicons as Icon } from '@expo/vector-icons';

class HomeScreen extends React.Component<NavigationScreenProps> {
  static navigationOptions = () => ({
    title: 'Home',
    tabBarIcon: ({ tintColor }: { tintColor: string }) => <Icon name="ios-home" color={tintColor} size={25} />,
  });

  render() {
    return (
      <View>
        <Button title="Show me more of the app" onPress={this._showMoreApp} />
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
      </View>
    );
  }

  _showMoreApp = () => {
    this.props.navigation.navigate('Other');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

export default HomeScreen;
