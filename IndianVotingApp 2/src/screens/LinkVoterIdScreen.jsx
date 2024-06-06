// components/LinkVoterIDScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const LinkVoterIDScreen = () => {
  const [voterID, setVoterID] = useState('');
  const [method, setMethod] = useState('sms');
  const [contact, setContact] = useState('');

  const linkVoterID = () => {
    axios.post('http://localhost:3000/vote', { voterID, method, contact })
      .then(() => console.log('Vote acknowledged'))
      .catch(error => console.error(error));
  };

  return (
    <View style={styles.container}>
      <Text>Enter Voter ID:</Text>
      <TextInput style={styles.input} value={voterID} onChangeText={setVoterID} />
      <Text>Select Acknowledgment Method:</Text>
      <TextInput style={styles.input} value={method} onChangeText={setMethod} />
      <Text>Enter Contact Info:</Text>
      <TextInput style={styles.input} value={contact} onChangeText={setContact} />
      <Button title="Link Voter ID" onPress={linkVoterID} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }
});

export default LinkVoterIDScreen;
