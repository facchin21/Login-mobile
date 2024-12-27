import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

export const ButtonGradient = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <LinearGradient
        colors={["#ECA5FB", "#995FEB"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.button}
      >
        <Text style={styles.text}>Sign in</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    width: "80%",
    height: "100%",
    padding: 10,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    color: "white",
  },
});
