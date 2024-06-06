// screens/RegisterScreen.js
import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../firebase';
import axios from 'axios';

const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [mobile, setMobile] = useState('');
  const [voterid, setVoterid] = useState('');

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await axios.post('http://localhost:3000/register', {
        email,
        aadhar,
        mobile,
        voterid,
        name,
      });
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert(error.message);
    }
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
      <Text style={styles.label}>Name</Text>
      <TextInput style={styles.input} onChangeText={setName} value={name} />

      <Text style={styles.label}>Aadhar Number</Text>
      <TextInput style={styles.input} onChangeText={setAadhar} value={aadhar} />

      <Text style={styles.label}>Mobile Number</Text>
      <TextInput style={styles.input} onChangeText={setMobile} value={mobile} />

      <Text style={styles.label}>Voter ID</Text>
      <TextInput
        style={styles.input}
        onChangeText={setVoterid}
        value={voterid}
      />
      <Button title="Register" onPress={handleRegister} />
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

export default RegisterScreen;
