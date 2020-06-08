import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default class ToDo extends Component {
  state = {
    isEditing: false,
    isCompleted: false,
  };
  render() {
    const { isCompleted, isEditing } = this.state;
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
          <Text
            style={[
              styles.text,
              isCompleted ? styles.completedText : styles.uncompletedText,
            ]}
          >
            Hello I'm ToDO
          </Text>
        </View>
        {isEditing ? (
          <View style={styles.actions}>
            <TouchableOpacity onPressOut={this._finishEditing}>
              <View style={styles.actionsContainer}>
                <Text style={styles.actionText}>❤</Text>
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
    this.setState({
      isEditing: true,
    });
  };
  _finishEditing = () => {
    this.setState({
      isEditing: false,
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
});
