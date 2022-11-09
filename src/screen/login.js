
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

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function handleSubmit(email, password) {
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
          navigation.navigate('addproduct');
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
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn}
      onPress={() => handleSubmit(email, password)}>
      
      
        <Text style={styles.loginText}>LOGIN</Text>
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

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});
export default Login