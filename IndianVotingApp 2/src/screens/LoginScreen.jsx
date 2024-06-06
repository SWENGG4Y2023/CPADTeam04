import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import {signInWithEmailAndPassword} from 'firebase/auth';
import axios from 'axios';
import {auth} from '../firebase';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        fetchUserInfo(email);
      })
      .catch(error => {
        Alert.alert('Error', error.message);
      });
  };

  const fetchUserInfo = emailprop => {
    // Replace with your actual backend URL
    const backendUrl = 'http://localhost:3000/user';

    axios
      .get(`${backendUrl}?email=${emailprop}`)
      .then(response => {
        const userInfo = response.data;
        navigation.navigate('Home', {userInfo});
      })
      .catch(error => {
        Alert.alert('Error', 'Failed to fetch user information');
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <Button
        title="Register"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default LoginScreen;
