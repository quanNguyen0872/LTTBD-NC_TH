import React from 'react';
import { Button } from '@react-native-material/core';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import rec from "./assets/rec.png";

export default function App() {
  return (
    <LinearGradient
      colors={['#c6ffdd', '#fbd786', '#f7797d']}
      style={styles.linearGradient}
    >
      <View style={styles.container}>
        <Image source={rec} style={styles.logo}/>
        <Text style={styles.title}>Grown your business</Text>
        <Text style={styles.text}>
          We will help you to grow your business using online server
        </Text>
        <View style={styles.groupBtn}>
          <Button title="Login" style={styles.btn} />
          <Button title="Sign up" style={styles.btn} />
        </View>
        <Text style={styles.link}>HOW WE WORK?</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 50,
  },
  title: {
    marginBottom: 20,
    fontSize: 32,
    textTransform: "uppercase",
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 15,
  },
  groupBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  btn: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 8,
    paddingBottom: 8,
    marginTop: 25,
    backgroundColor: "#ed522f"
  },
  link: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 50,
  }
});
