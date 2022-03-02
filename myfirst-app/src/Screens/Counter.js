import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => {
      return count + 10;
    });
  };
  const reset = () => {
    setCount(0);
  };
  const decrement = () => {
    setCount((count) => {
      return count - 10;
    });
  };
  return (
    <View style={styles.Counter}>
      <Text style={styles.Text}>Counter</Text>
      <Text style={styles.answer}>{count}</Text>
      <TouchableOpacity style={styles.buttonCount} onPress={() => increment()}>
        <Text style={styles.answer}> + 10</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonCount} onPress={() => reset()}>
        <Text style={styles.answer}> Reset</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonCount} onPress={() => decrement()}>
        <Text style={styles.answer}> - 10</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  Counter: {
    marginTop: 40,
  },
  Text: {
    fontSize: 30,
    textAlign: "center",
  },
  answer: {
    fontSize: 25,
    textAlign: "center",
  },
  buttonCount: {
    height: 100,
    width: 200,
    backgroundColor: "purple",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});
