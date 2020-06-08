import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Dimensions,
  Platform,
  ScrollView,
} from "react-native";
import ToDo from "./ToDo";
import { render } from "react-dom";

const { height, width } = Dimensions.get("window");

export default class App extends React.Component {
  state = {
    newToDo: "",
  };
  render() {
    const { newToDo } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"></StatusBar>
        <Text style={styles.title}>다이어리</Text>
        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder={"할 일 적기"}
            value={newToDo}
            onChangeText={this._controlNewToDo}
            placeholderTextColor="#999"
            returnKeyType={"done"}
            autoCorrect={false}
          ></TextInput>
          <ScrollView contentContainerStyle={styles.toDos}>
            <ToDo text={"Hello I'm To Do"} />
          </ScrollView>
        </View>
      </View>
    );
  }
  _controlNewToDo = (text) => {
    this.setState({
      newToDo: text,
    });
  };
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
  input: {
    padding: 20,
    borderBottomColor: "#bbb",
    borderBottomWidth: 1,
    fontSize: 18,
  },
  toDos: {
    alignItems: "center",
  },
});
