import axios from 'axios'
import React, { Component } from 'react'
import { View, Text } from 'react-native';

export default class NewScreen extends Component {
  state = {
		users: []
	}
	componentDidMount() {
		axios.get(`https://63477c350484786c6e814c67.mockapi.io/users`)
		  .then(res => {
			const users = res.data;
			this.setState({ users });
		  })
		  .catch(error => console.log(error));
	  }
	
  render() {
	return (
    <View>
      {this.state.users.map((user) => (
        <View
          style={{
            marginTop: 30,
            flexDirection: "row",
            backgroundColor: "white",
            marginBottom: 15,
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              width: 48,
              height: 36,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{
              fontWeight: 16,
              fontWeight: '700',
            }}>{user.id}</Text>
          </View>
          <Text style={{
            width: '40%',
            fontSize: 16,
          }}>{user.name}</Text>
          <Text style={{
            width: '60%',
            fontSize: 16,
          }}>{user.email}</Text>
        </View>
      ))}
    </View>
  );
  }
}
