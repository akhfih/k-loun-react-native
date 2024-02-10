import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";

export default class HomeScreen extends Component {
  render() {
    return ( <View style={styles.container}>
      <Text>Home</Text>
    </View>)
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
});
