import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { getNowPlaying } from "@/api/service/movie";

const IndexPage = () => {
  const [page, setPage] = useState<number>(1);

  const { data } = useQuery({
    queryKey: ["movies"],
    queryFn: () => getNowPlaying(page),
  });

  console.log({ data });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>IndexPage</Text>
      <Text style={styles.text}>
        {JSON.stringify(process.env.EXPO_PUBLIC_API_KEY)}
      </Text>
    </View>
  );
};

export default IndexPage;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  text: {
    color: "white",
  },
});
