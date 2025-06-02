import React, { useEffect } from "react";
import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchFaqs } from "../../redux/slices/faqSlice";
import FAQItem from "./components/FAQItem";
import Header from "../../components/Header";
import styles from "./style";

export default function FaqScreen() {
  const dispatch = useDispatch();
  const { data: faqData, loading, error } = useSelector((state) => state.faq);

  useEffect(() => {
    dispatch(fetchFaqs());
  }, [dispatch]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header
        title="Sıkça Sorulan Sorular"
        subtitle="Merak Ettiğiniz Konular Hakkında Sıkça Sorulan Sorulara Aşağıdan Ulaşabilirsiniz."
      />

      {loading && <ActivityIndicator size="large" color="#000" />}
      {error && <Text style={{ color: "red" }}>{error}</Text>}

      <View style={styles.faqList}>
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </View>
    </ScrollView>
  );
}
