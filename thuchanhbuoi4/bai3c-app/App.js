import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import anh1 from "./assets/Picture1.png";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Img product */}
      <View style={styles.p1}>
        <Image source={anh1} style={styles.anh1} />
      </View>

      {/* Detail product */}
      <View style={styles.p2}>

        {/* Title begin */}
        <Text style={{
          textAlign: 'center',
          paddingTop: 5,
          fontSize: 15,
        }}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        {/* Title end */}

        {/* Star Rating begin */}
        <View style={{
          flexDirection: 'row',
          paddingTop: 10,
          paddingLeft: 15,
          alignItems: 'center',
        }}>
          <View style={{
            flex: 1,
            flexDirection: 'row',
          }}>
            {
              Array.from({ length: 5 }, (x, i) => {
                return (
                  <MaterialIcons key={i} name="star" size={30} color="#E0E41A" />
                )
              })
            }
          </View>
          <View style={{
            flex: 1,
          }}>
            <Text>(Xem 828 đánh giá)</Text>
          </View>
        </View>
        {/* Star Rating end */}

        {/* Unit Price begin */}
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingTop: 10,
          paddingLeft: 15,
        }}>
          <Text style={{
            flex: 1,
            fontSize: 18,
            fontWeight: 'bold',
          }}>1.790.000 đ</Text>
          <Text style={{
            flex: 1,
            fontSize: 15,
            fontWeight: 'bold',
            color: '#808080',
            textDecorationLine: 'line-through',
          }}>1.790.000 đ</Text>
        </View>
        {/* Unit Price end */}

        {/* Question begin */}
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingTop: 15,
          paddingLeft: 15,
        }}>
          <View style={{
            flex: 8,
          }}>
            <Text style={{
              fontSize: 12,
              fontWeight: 'bold',
              color: '#FA0000',
            }}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
          </View>
          <View style={{
            flex: 7,
          }}>
            <AntDesign name="questioncircleo" size={22} color="black" />
          </View>
        </View>
        {/* Question end */}

        {/* Select color begin */}
        <View style={{
          borderWidth: 1,
          width: '90%',
          height: 45,
          flexDirection: 'row',
          marginTop: 15,
          marginLeft: 17,
          marginRight: 17,
          borderRadius: 12,
        }}>
          <View style={{
            flex: 8,
            justifyContent: 'center',
            marginLeft: 90,
          }}>
            <Text>4 MÀU-CHỌN MÀU</Text>
          </View>
          <View style={{
            flex: 1,
            justifyContent: 'center',
            marginRight: 10,
          }}>
            <AntDesign name="right" size={22} color="black" />
          </View>
        </View>
        {/* Select color end */}

        {/* Button Buy begin */}
        <View style={{
            flexDirection: 'row',
            marginTop: 30,
        }}>
          <Pressable style={styles.button1}>
            <Text style={styles.text1}>CHỌN MUA</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  p1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 25,
  },
  anh1: {
    width: 250,
    height: 290,
    resizeMode: 'stretch',
  },
  p2: {
    flex: 1,
    flexDirection: 'column',
  },
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
    width: '95%',
    height: 50,
    borderRadius: 10,
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
