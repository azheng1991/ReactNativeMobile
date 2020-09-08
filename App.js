// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React from "react";
import "./App.css";
import Board from "./Components/Board";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

function App() {
  return (
    <View>
      <Board />
    </View>
  );
}

export default App;
