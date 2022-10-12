
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './Style'

// create a component
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'My App'
    }
  }
  render() {
    // function fun() {
    //          alert("React Native")
    //         this.setState({name:'hello'})
    //       }
    return (
      <View style={styles.container}>

        <View style={styles.imagestyle}>
          <Image style={styles.ImgStyle} source={require('../../assets/Images/images.png')} />
          <Image style={styles.logostyle} source={require('../../assets/Images/logo.png')} />
          <Image style={styles.ImgStyle} source={require('../../assets/Images/edit.png')} />
        </View>
        <View style={styles.ViewText}>
          <Text style={styles.txtStyle}>
            {this.state.name}
          </Text>

        </View>
        <View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.setState({ name: 'React Native' })}
            activeOpacity={0.7}>
            <Text style={{ color: 'white' }}>Click Me</Text>
          </TouchableOpacity>

        </View>


      </View>
    );
  }
}


//make this component available to the app
export default Home;

