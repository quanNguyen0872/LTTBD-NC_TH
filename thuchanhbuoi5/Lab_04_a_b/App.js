import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, ScrollView, } from "react-native";

import FoodItem from "./FoodItem";

export default function App() {
  const [foods, setFoods] = useState([
    {
      name: "Paella Valenciana, with rabbit and chicken; and seafood paella",
      url: "https://www.bluristorante.com/wp-content/uploads/2019/03/9-Traditional-Italian-Food-Dishes-You-Will-Love-1080x700.jpg",
      status: "Opening soon",
      price: 5223.56,
      website: "https://edition.cnn.com",
      socialNetworks: 
        {
          facebook: "https://www.facebook.com",
          twitter: "https://twitter.com",
          instagram: "https://www.instagram.com",
        },
    },
    {
      name: "Gazpacho",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK4gjyk-VN438EkSnwwAcCRVgzW6F_MmeH-A&usqp=CAU",
      status: "Opening Now",
      price: 1124.56,
      website: "https://edition.cnn.com",
      socialNetworks:
        {
          twitter: "https://twitter.com",
          instagram: "https://www.instagram.com",
        },
    },
    {
      name: "Pimientos de Padron",
      url: "https://i.insider.com/5f340aab5af6cc63ab37bf14?width=1000&format=jpeg&auto=webp",
      status: "Closing soon",
      price: 2342.56,
      website: "https://edition.cnn.com",
      socialNetworks:
        {
          twitter: "https://twitter.com",
        },
    },
    {
      name: "Albondigas",
      url: "https://www.thatsmags.com/image/view/201807/favorita-1.jpg",
      status: "Comming soon",
      price: 2354.56,
      website: "https://edition.cnn.com",
      socialNetworks:
        {
          instagram: "https://www.instagram.com",
          facebook: "https://www.facebook.com",
        },
    },
    {
      name: "My Y",
      url: 'https://wowitsveggie.com/wp-content/uploads/2020/04/Vegan-Italian-Recipes-Kale-Spaghetti-Genovese-IMG_3742-800x900.jpg',
      status: "Closing soon",
      price: 9876.54,
      website: "https://myy.com.vn",
      socialNetworks:
        {
          facebook: "https://www.facebook.com",
          twitter: "https://twitter.com",
        },
    },
    {
      name: "Banh Xeo",
      url: 'https://ameovat.com/wp-content/uploads/2016/04/cach-lam-banh-xeo-01.jpg',
      status: "Opening soon",
      price: 1500.0,
      website: "https://banhxeohd.com.vn",
      socialNetworks: 
        {
          instagram: "https://www.instagram.com",
        },
    },
  ]);
  return (
    <View style={styles.container}>
      <View>
        {/* <ScrollView>
             {foods.map(eachFood => <FoodItem 
                food = {eachFood} key={eachFood.name}/>)}
         </ScrollView> */}
        <FlatList
          data={foods}
          renderItem={({ item }) => {
            return <FoodItem food={item} key={item.name}/>;
          }}
          keyExtractor={(eachFood) => eachFood.name}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
