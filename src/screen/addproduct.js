import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

const Addproduct = ({ navigation }) => {
  const [name, setUsername] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [offprice, setOffprice] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function productsubmit(name, image,price,offprice) {
    const data = {email, password};
    console.log(data, 'this is dataa');
  
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
  
        ACCEPT: 'application/json',
      },
      body: JSON.stringify(data),
    };
  
    fetch('API_HERE/auth/sign_in', requestOptions).then(async response => {
      
      if (response.token) {
        await AsyncStorage.setItem('userToken', response.token); 
        setIsLoggedIn(true);
        if (setIsLoggedIn) {
          navigation.navigate('ProfileLanding');
        }
      }
    });
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/icon/log.png")} />


      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="product name."
          placeholderTextColor="#003f5c"
          onChangeText={(name) => setEmail(name)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder=" Image."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(image) => setPassword(image)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Product price."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(price) => setPassword(price)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Product offerprice."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(offprice) => setPassword(offprice)}
        />
      </View>
        
        <TouchableOpacity style={styles.loginBtn} 
        onPress={() => productsubmit(name,image,price,offprice)}>
        >
          <Text >ADD</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text >Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text >Delete</Text>
        </TouchableOpacity>
        
     </View>
      );
}

      const styles = StyleSheet.create({
        container: {
        flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
  },

      image: {
        marginBottom: 40,
  },

      inputView: {
        backgroundColor: "#FFC0CB",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,

      alignItems: "center",
  },

      TextInput: {
        height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
  },

      forgot_button: {
        height: 30,
      marginBottom: 30,
  },

  loginBtn : {
        width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#FF1493",
  },
});
export default Addproduct