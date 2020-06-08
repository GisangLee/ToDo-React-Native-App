import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Dimensions,
  Platform,
} from "react-native";
import { render } from "react-dom";

const { height, width } = Dimensions.get("window");

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"></StatusBar>
        <Text style={styles.title}>Cute To Do</Text>
        <View style={styles.card}>
          <TextInput style={styles.input} placeholder={"New To DO"}></TextInput>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFB88C",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 30,
    marginTop: 50,
    fontWeight: "200",
    marginBottom: 30,
  },
  card: {
    backgroundColor: "white",
    flex: 1,
    width: width - 50,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    ...Platform.select({
      ios: {
        shadowColor: "rgba(50, 50, 50)",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: -1,
          width: 0,
        },
      },
      android: {
        elevation: 7,
      },
    }),
  },
  input: {},
});
