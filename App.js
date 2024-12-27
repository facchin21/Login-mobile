import { ContainerImage } from "./src/components/ContainerImage";
import { ContainerText } from "./src/components/ContainerText";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <ContainerImage />
      <ContainerText />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#f1f1f1",
    flex: 1,
  },
});
