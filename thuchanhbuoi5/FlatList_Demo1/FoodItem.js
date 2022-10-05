import React, { useState, useEffect } from "react";
import { Text, View, Image } from "react-native";
import colors from './colors'

import Icon from 'react-native-vector-icons/FontAwesome5'

function _getColorFromStatus(status) {
	return status.toLowerCase().trim() == 'opening now' ? colors.success:
			(status.toLowerCase().trim() == 'closing soon' ? colors.alert :
			(status.toLowerCase().trim() == 'comming soon' ? colors.warning : colors.success))
}

function FoodItem(props) {
	let {
		name,
		price,
		socialNetworks,
		status,
		url,
		website,
	} = props.food
	return (<View
		style={{
		  height: 150,
		  paddingTop: 20,
		  paddingStart: 10,
		  flexDirection: "row",
		}}
	  >
		<Image
		  style={{
			width: 100,
			height: 100,
			resizeMode: "cover",
			borderRadius: 10,
			marginRight: 15,
		  }}
		  source={{
			uri: url
		  }}
		/>
		<View
		  style={{
			flex: 1,
			marginRight: 10,
		  }}
		>
		  <Text
			style={{
			  color: "black",
			  fontSize: "15",
			  fontWeight: "bold",
			}}
		  >
			{name}
		  </Text>
		  <View
			style={{
			  height: 1,
			  backgroundColor: "black",
			}}
		  />
		  <View style={{ flexDirection: "row" }}>
			<Text
			  style={{
				color: colors.inactive,
				fontSize: "15",
			  }}
			>
			  Status:{" "}
			</Text>
			<Text
			  style={{
				color: _getColorFromStatus(status),
				fontSize: "15"
			  }}
			>
			  {status.toUpperCase()}
			</Text>
		  </View>
		  <Text
			style={{
			  color: "rgba(0,0,0,0.5)",
			  fontSize: "15",
			}}
		  >
			Price: {price} $
		  </Text>
		  <Text
			style={{
			  color: "rgba(0,0,0,0.5)",
			  fontSize: "15",
			}}
		  >
			Food Type: Pizza
		  </Text>
		  <Text
			style={{
			  color: "rgba(0,0,0,0.5)",
			  fontSize: "15",
			}}
		  >
			Website: {website}
		  </Text>
		  <View style={{
			flexDirection: 'row'
		  }}>
			{socialNetworks['facebook'] != undefined &&<Icon
			  style={{ paddingEnd: 5 }}
			  name="facebook"
			  size={18}
			  color="rgba(0,0,0,0.5)"
			/>}
			{socialNetworks['twitter'] != undefined &&<Icon
			  style={{ paddingEnd: 5 }}
			  name="twitter"
			  size={18}
			  color="rgba(0,0,0,0.5)"
			/>}
			{socialNetworks['instagram'] != undefined &&<Icon
			  style={{ paddingEnd: 5 }}
			  name="instagram"
			  size={18}
			  color="rgba(0,0,0,0.5)"
			/>}
		  </View>
		</View>
	  </View>)
}
export default FoodItem