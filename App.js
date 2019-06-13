// import React from 'react';
// import { Text, View } from 'react-native';
// import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
// import BadInstagramCloneApp from './parts/CameraPart'

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Home!</Text>
//       </View>
//     );
//   }
// }

// class SettingsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Settings!</Text>
//       </View>
//     );
//   }
// }

// const TabNavigator = createBottomTabNavigator({
//   Home: HomeScreen,
//   Settings: BadInstagramCloneApp
// });

// export default createAppContainer(TabNavigator);


import React, { Component } from 'react'
import { View } from 'react-native';
import Calander from './components/Calander/Calander';

export default class App extends Component {
  render() {
    return (
      <View>
          <Calander />
      </View>
    )
  }
}
