import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default class ToDo extends Component {
  state = {
    isEditing: false,
    isCompleted: false,
    toDoValue: "",
  };
  render() {
    const { isCompleted, isEditing, toDoValue } = this.state;
    const { text } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.column}>
          <TouchableOpacity onPress={this._toggleComplete}>
            <View
              style={[
                styles.circle,
                isCompleted ? styles.completedCircle : styles.uncompletedCircle,
              ]}
            ></View>
          </TouchableOpacity>
          {isEditing ? (
            <TextInput
              style={[
                styles.input,
                styles.text,
                isCompleted ? styles.completedText : styles.uncompletedText,
              ]}
              value={toDoValue}
              multiline={true}
              onChangeText={this._controlInput}
              returnKeyType={"done"}
              onBlur={this._finishEditing}
            ></TextInput>
          ) : (
            <Text
              style={[
                styles.text,
                isCompleted ? styles.completedText : styles.uncompletedText,
              ]}
            >
              {text}
            </Text>
          )}
        </View>
        {isEditing ? (
          <View style={styles.actions}>
            <TouchableOpacity onPressOut={this._finishEditing}>
              <View style={styles.actionsContainer}>
                <Text style={styles.actionText}>👌</Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.actions}>
            <TouchableOpacity onPressOut={this._startEditing}>
              <View style={styles.actionsContainer}>
                <Text style={styles.actionText}>🖍</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.actionsContainer}>
                <Text style={styles.actionText}>❌</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
  _toggleComplete = () => {
    this.setState((prevState) => {
      return {
        isCompleted: !prevState.isCompleted,
      };
    });
  };
  _startEditing = () => {
    const { text } = this.props;

    this.setState({
      isEditing: true,
      toDoValue: text,
    });
  };
  _finishEditing = () => {
    this.setState({
      isEditing: false,
    });
  };

  _controlInput = (text) => {
    this.setState({
      toDoValue: text,
    });
  };
}

const styles = StyleSheet.create({
  container: {
    width: width - 50,
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 3,
    marginHorizontal: 20,
  },
  completedCircle: {
    borderColor: "#859398",
  },
  uncompletedCircle: {
    borderColor: "#fc4a1a",
  },
  text: {
    fontWeight: "600",
    fontSize: 17,
    marginVertical: 20,
    paddingHorizontal: 15,
  },
  completedText: {
    color: "#859398",
    textDecorationLine: "line-through",
  },
  uncompletedText: {
    color: "#200122",
  },
  column: {
    flexDirection: "row",
    alignItems: "center",
    width: width / 2,
    justifyContent: "space-between",
  },
  actions: {
    flexDirection: "row",
  },
  actionsContainer: {
    marginVertical: 10,
    marginHorizontal: 5,
    paddingHorizontal: 10,
  },
  input: {
    marginVertical: 10,
    width: width / 2,
  },
});
