import { StyleSheet, Text, View } from "react-native";
import React from "react";

const IndexPage = () => {
  return (
    <View style={styles.container}>
      <Text>IndexPage</Text>
    </View>
  );
};

export default IndexPage;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
