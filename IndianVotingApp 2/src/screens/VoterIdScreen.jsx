// VoterIDScreen.js
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

function VoterIDScreen({route, navigation}) {
  // Assuming you have voter information fetched from backend
  const {userInfo} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Voter ID</Text>
      <Text>Name: {userInfo.name}</Text>
      <Text>Email: {userInfo.email}</Text>
      <Text>Voter ID: {userInfo.voterid}</Text>
      <Text>Aadhar: {userInfo.aadhar}</Text>
      <Text>Mobile: {userInfo.mobile}</Text>
      <View>
        <Button
          title="Vote"
          onPress={() => navigation.navigate('Vote', {userInfo})}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
});

export default VoterIDScreen;
