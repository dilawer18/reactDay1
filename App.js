import React, { Component } from 'react';

import { View,} from 'react-native';
import Home from './src/Screens/Home/Home';

class App extends Component {

  render() {
return (
      <View style={{flex:1}}>
        <Home/>
       </View>
    );

  }

}

export default App;

