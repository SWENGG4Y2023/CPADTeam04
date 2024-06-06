import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Alert,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

const VoteScreen = ({route, navigation}) => {
  const {userInfo} = route.params;
  const [isVoting, setIsVoting] = useState(false);
  const [parties, setParties] = useState([]);
  const [selectedParty, setSelectedParty] = useState(null);

  useEffect(() => {
    const fetchParties = async () => {
      try {
        const response = await axios.get('http://localhost:3000/party');
        setParties(response.data.party);
      } catch (error) {
        Alert.alert('Error', 'Unable to fetch parties.');
        console.error(error);
      }
    };

    fetchParties();
  }, []);

  const handleVote = async () => {
    if (!selectedParty) {
      Alert.alert('Error', 'Please select a party.');
      return;
    }

    setIsVoting(true);
    try {
      await axios.post('http://localhost:3000/vote', {
        contact: userInfo.email,
        party: selectedParty,
      });
      navigation.navigate('Acknowledgment', {userInfo});
    } catch (error) {
      Alert.alert('Error', 'Unable to submit vote.');
      console.error(error);
    } finally {
      setIsVoting(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vote</Text>
      <FlatList
        data={parties}
        keyExtractor={item => item.name}
        renderItem={({item}) => (
          <TouchableOpacity
            style={[
              styles.partyItem,
              selectedParty === item.name && styles.selectedPartyItem,
            ]}
            onPress={() => setSelectedParty(item.name)}>
            <Text style={styles.partyName}>{item.name}</Text>
            <Text style={styles.partyLeader}>Leader: {item.leader}</Text>
          </TouchableOpacity>
        )}
      />
      <Button title="Submit Vote" onPress={handleVote} disabled={isVoting} />
    </View>
  );
};

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
  partyItem: {
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    marginBottom: 8,
  },
  selectedPartyItem: {
    backgroundColor: '#d3d3d3',
  },
  partyName: {
    fontSize: 18,
  },
  partyLeader: {
    fontSize: 14,
    color: '#666',
  },
});

export default VoteScreen;
