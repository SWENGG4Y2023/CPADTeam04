// App.js
import React from 'react';
import {AppNavigator} from './navigation';

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login">
//         <Stack.Screen name="Login" component={LoginScreen} />
//         <Stack.Screen name="Voter ID" component={VoterIdScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
export default function App() {
  return <AppNavigator />;
}
