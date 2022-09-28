import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Pressable} from 'react-native';
import React from 'react';
import anhtiki from "./assets/anhtiki.jpg";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.p1}>
        <View style={styles.p1_1}>
          <View style={styles.imgView}>
            <Image source={anhtiki} style={styles.anh} />
            <Text style={styles.textimg}>Mã giảm giá đã lưu</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>Nguyên hàm tích phân và ứng dụng</Text>
            <Text style={styles.ncc}>Cung cấp bởi Tiki Trading</Text>
            <Text style={styles.money}>141.800 đ</Text>
            <Text style={styles.giagoc}>141.800 đ</Text>
            <View style={styles.wrapper}>
              <View style={styles.soluong}>
                <Button title='-' style={styles.minus}></Button>
                <Text style={styles.textsoluong}>1</Text>
                <Button title='+' style={styles.plus}></Button>
              </View>
              <View style={styles.muasau}>
                <Text style={styles.textMS}>Mua sau</Text>
              </View>
            </View>
            <Text style={styles.xemtaiday}>Xem tại đây</Text>
          </View>
        </View>
        <View style={styles.p1_2}>
          <View style={styles.magiamgia}>
            <View
              style={{
                width: 50,
                height: 25,
                backgroundColor: '#F2DD1B',
                marginTop: 20,
                marginLeft: 20,
              }}>
            </View>
            <Text style={{
              marginTop: 20,
              marginLeft: 10,
              fontSize: 20,
              fontWeight: 'bold',
            }}>Mã giảm giá</Text>
          </View>
          <View style={styles.apdungbutton}>
            <Pressable style={styles.button}>
              <Text style={styles.text}>Áp dụng</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.p2}>
        <View style={styles.p2_1}>
            <Text style={{
              marginTop: 30,
              marginLeft: 10,
              fontSize: 12.5,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
            <Text style={{
              marginTop:30,
              marginLeft: 10,
              fontSize: 12.5,
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#134FEC',
            }}>Nhập tại đây?</Text>
        </View>
        <View style={styles.p2_2}>
            <Text style={{
              flex: 2,
              fontSize: 24,
              fontWeight: 'bold',
              marginTop: 20,
              marginLeft: 10,
            }}>Tạm Tính</Text>
            <Text style={{
              flex: 1,
              fontSize: 24,
              fontWeight: 'bold',
              marginTop: 20,
              marginRight: 20,
              color: 'red',
            }}>141.800 đ</Text>
        </View>
      </View>
      <View style={styles.p3}>
            <View style={{
              flexDirection: 'row',
            }}>
              <Text style={{
                flex: 2,
                fontSize: 24,
                fontWeight: 'bold',
                textAlign: 'left',
                color: '#808080',
                marginTop: 10,
                marginLeft: 10,
              }}>Thành tiền</Text>
              <Text style={{
                flex: 1,
                fontSize: 24,
                fontWeight: 'bold',
                color: 'red',
                marginTop: 10,
                marginRight: 20,
              }}>141.800 đ</Text>
            </View>
            <View>
              <Pressable style={styles.button1}>
                <Text style={styles.text1}>TIẾN HÀNH ĐẶT HÀNG</Text>
              </Pressable>
            </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C4C4C4',
    flexDirection: "column",
  },
  p1: {
    flex: 3,
    flexDirection: "column",
    backgroundColor: '#fff',
  },
  p1_1: {
    flex: 6,
    flexDirection: "row",
  },
  imgView: {
    flex: 3,
  },
  anh: {
    width: 150,
    height: 200,
    marginTop: 15,
    marginLeft: 10,
  },
  textimg:{
    marginLeft: 10,
    marginTop: 25,
    fontSize: 15,
    fontWeight: 'bold',
  },
  content: {
    flex: 4,
    flexDirection: "column",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 15,
  },
  ncc: {
    fontSize: 13,
    fontWeight: "bold",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 15,
  },
  money: {
    fontSize: 25,
    fontWeight: "bold",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 15,
    color: "red",
  },
  giagoc: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 12,
    fontSize: 15,
    fontWeight: "600",
    color: "#808080",
    textDecorationLine: 'line-through',
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 18,
  },
  soluong:{
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  minus:{
    backgroundColor:"#808080",
  },
  textsoluong:{
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 10,
    paddingRight: 10,
  },
  muasau:{
    flex: 1,
  },
  textMS: {
    color: "#134FEC",
    fontWeight: "bold",
    fontSize: 14,
  },
  xemtaiday: {
    paddingLeft: 10,
    fontSize: 15,
    fontWeight: "bold",
    color: "#134FEC",
  },
  p1_2: {
    flex: 2,
    flexDirection: "row",
  },
  magiamgia: {
    flex: 3,
    flexDirection: 'row',
    borderWidth: 1,
    width: 240,
    height: 65,
    borderRadius: 4,
    marginLeft: 10,
    marginTop: 5,
  },
  apdungbutton: {
    flex: 2,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
    width: 140,
    height: 65,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#0A5EB7',
    marginLeft: 10,
    marginTop: 5,
  },
  text: {
    fontSize: 18,
    lineHeight: 22,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  p2: {
    flex: 2,
    flexDirection: 'column',
  },
  p2_1: {
    height: 80,
    backgroundColor: 'white',
    marginTop: 15,
    flexDirection: 'row',
  },
  p2_2: {
    height: 80,
    backgroundColor: 'white',
    marginTop: 15,
    flexDirection: 'row',
  },
  p3: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
    width: '95%',
    height: 60,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#E53935',
    marginLeft: 10,
    marginTop: 10,
  },
  text1: {
    fontSize: 19,
    lineHeight: 22,
    fontWeight: 'bold',
    letterSpacing: 2,
    color: 'white',
  },
});
