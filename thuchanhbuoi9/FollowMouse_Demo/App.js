import React, { useRef, useState } from "react";
import { Animated, View, StyleSheet, PanResponder, Text } from "react-native";
import cat from './assets/cat.png';

const App = () => {
  const [location, setLocation] = useState({
    x: null,
    y: null,
    marginLeft: new Animated.Value(10),
    marginTop: new Animated.Value(10)
  });

  function onPress(evt){
    var x = evt.nativeEvent.locationX;
    var y = evt.nativeEvent.locationY;
    setLocation({
      x: x,
      y: y,
      marginLeft: x,
      marginTop: y
    })
  }
  function onMove(evt){
    // setLocation({marginLeft:x, marginTop:y});
  }
  function onRelease(){
    console.log("Release");
  }
  const {marginTop, marginLeft} = location;
   
  return (
    <View
      onStartShouldSetResponder={()=>true}
      onMoveShouldSetResponder= {()=>true}
      onResponderGrant={onPress}
      onResponderMove={onMove}
      onResponderRelease = {onRelease}
      style={styles.container}>

      <Text>Show something!</Text>
     
      <Animated.Image
       source = {cat}
       style={{marginLeft: marginLeft, marginTop: marginTop}}
       >

      </Animated.Image>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default App;