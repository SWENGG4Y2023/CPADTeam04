import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const AcknowledgmentScreen = ({route, navigation}) => {
  const {userInfo} = route.params;

  const handleGoBack = () => {
    navigation.navigate('Home', {userInfo}); // Adjust the navigation to your home or main screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vote Acknowledged</Text>
      <Text style={styles.message}>
        Your vote has been recorded and acknowledged.
      </Text>
      <Button title="Back to Home" onPress={handleGoBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  details: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default AcknowledgmentScreen;
