import React from "react";
import { ScrollView, Text, Image, View } from "react-native";
import styles from "./style";

export default function BlogDetail({ route }) {
  const { blog } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={blog.image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{blog.title}</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam.
        </Text>
      </View>
    </ScrollView>
  );
}
