import React from "react";
import { ScrollView ,Text} from "react-native";
import { styles } from "./styles";

import SliderSection from "./components/SliderSection";
import MobileAppsSection from "./components/MobileAppsSection";
import ShortcutsSection from "./components/ShortcutsSection";
import PartnersSection from "./components/PartnersSection";
import BlogSection from "./components/BlogSection";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
    
      <SliderSection />
      <MobileAppsSection />
      <ShortcutsSection navigation={navigation} />
      <PartnersSection/>
      <BlogSection />
    </ScrollView>
  );
}
