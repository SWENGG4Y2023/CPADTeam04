import React from 'react';
import {View, Text, Button, StyleSheet, Alert} from 'react-native';
import {signOut} from 'firebase/auth';
import {auth} from '../firebase';

const HomeScreen = ({route, navigation}) => {
  const {userInfo} = route.params;
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Indian Voter App</Text>
      <Button
        title="Show Voter Id"
        onPress={() => navigation.navigate('VoterId', {userInfo})}
      />
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
});

export default HomeScreen;
