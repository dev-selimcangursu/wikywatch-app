import React from "react";
import { ScrollView, View } from "react-native";
import Header from "../../components/Header";
import styles from "./style";
import BlogCard from "./components/BlogCard";

const blogData = [
  {
    id: 1,
    title: "Wiky Watch ile Güvende Kalın",
    description: "Çocuğunuzun güvenliği için en iyi teknolojik çözümler.",
    image: require("../../assets/images/blogs/blog-1.jpg"),
  },
  {
    id: 2,
    title: "Wiky Watch Özellikleri",
    description: "Adım sayar, canlı konum ve daha fazlası.",
    image: require("../../assets/images/blogs/blog-2.jpg"),
  },
    {
    id: 3,
    title: "Wiky Watch Özellikleri",
    description: "Adım sayar, canlı konum ve daha fazlası.",
    image: require("../../assets/images/blogs/blog-3.jpg"),
  },
];

export default function BlogList({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Header title="Blog" subtitle="Güncel Haberler ve Yazılar" />
      <View style={styles.listContainer}>
        {blogData.map((item) => (
          <BlogCard
            key={item.id}
            blog={item}
            onPress={() => navigation.navigate("BlogDetail", { blog: item })}
          />
        ))}
      </View>
    </ScrollView>
  );
}
