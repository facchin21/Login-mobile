import { StyleSheet, View, Dimensions } from "react-native";
import { SvgTop } from "../Svg/SvgTop";
import React from "react";

const { width, height } = Dimensions.get("window");

export const ContainerImage = () => {
  return (
    <View style={styles.containerSVG}>
      <SvgTop width={width} height={height} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerSVG: {
    width: width,
    height: height / 4,
    marginBottom: 30,
  },
});
