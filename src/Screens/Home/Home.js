// import React, { Component } from 'react';

// import { Text, View, Button, TouchableOpacity ,StyleSheet} from 'react-native';
// import style from './Style';

// class Home extends Component {

//   render() {
//     function fun() {
//       alert("React Native")
//     }

//     return (
//       <View style={style.TOpView}>

//       <View style={style.container}>
//         <Text style={style.fonts}>My App</Text>
//         <View style={style.container}>
//         <TouchableOpacity
//           onPress={fun}
//           activeOpacity={0.7}
//           style={style.touchBtn}>
//           <Text style={{ color: 'white' }}>Continue</Text>
//         </TouchableOpacity>
//         </View>

//       </View>
//       </View>
//     );

//   }

// }

// export default Home;

//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity,Image } from 'react-native';
import styles from './Style'

// create a component
class Home extends Component {
  render() {
    function fun() {
            alert("React Native")
          }
    return (
      <View style={styles.container}>

        <View style={styles.imagestyle}>
          <Image style={styles.ImgStyle} source={require('../../assets/Images/images.png')}/>
          <Image style={styles.logostyle} source={require('../../assets/Images/logo.png')}/>
          <Image style={styles.ImgStyle} source={require('../../assets/Images/edit.png')}/>
        </View>
        <View style={styles.ViewText}>
          <Text style={styles.txtStyle}>
            My App
          </Text>

        </View>
    <View>
    <TouchableOpacity
        style={styles.btn}
          onPress={fun}
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

