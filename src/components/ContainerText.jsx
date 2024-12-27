import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ButtonGradient } from "./ButtonGradient";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

export const ContainerText = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello</Text>
      <Text style={styles.subtitle}>Sign In to your account</Text>

      <TextInput placeholder="jhon@email.com" style={styles.textInput} />
      <View style={styles.containerinput}>
        <TextInput
          placeholder="password"
          style={styles.textInput}
          secureTextEntry={!visible}
        />
        <TouchableOpacity style={styles.icon} onPress={toggleVisibility}>
          <MaterialIcons
            name={visible ? "visibility-off" : "visibility"}
            size={30}
            color="gray"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text style={styles.text}>Forgot your password?</Text>
      </TouchableOpacity>
      <ButtonGradient />
      <TouchableOpacity>
        <Text style={styles.text}>Don`t have an account?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  containerinput: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 70,
    fontWeight: "bold",
    color: "#34434D",
  },
  subtitle: {
    fontSize: 16,
    color: "#c1c1c1",
  },
  textInput: {
    position: "relative",
    width: "80%",
    height: 50,
    marginTop: 20,
    paddingHorizontal: 20,
    borderRadius: 80,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 12,
    marginTop: 8,
    color: "#a3a3c6",
  },
  icon: {
    position: "absolute",
    top: 30,
    right: 55,
  },
});
