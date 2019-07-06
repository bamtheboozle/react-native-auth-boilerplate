import React from 'react';
import { View, Button, AsyncStorage } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { Ionicons as Icon } from '@expo/vector-icons';

class NewsScreen extends React.Component<NavigationScreenProps> {
  static navigationOptions = () => ({
    title: 'News',
    tabBarIcon: ({ tintColor }: { tintColor: string }) => <Icon name="ios-bulb" color={tintColor} size={25} />,
  });

  render() {
    return (
      <View>
        <Button title="stfu im a news button" onPress={this._showMoreApp} />
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

export default NewsScreen;
