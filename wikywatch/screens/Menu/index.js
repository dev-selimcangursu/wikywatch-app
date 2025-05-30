import React from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import styles from './style';
import MenuItem from './components/MenuItem';
import { Ionicons } from '@expo/vector-icons';

const menuItems = [
  { name: 'Teknik Servis Kayıt Formu', screen: 'ServiceForm', icon: 'construct-outline' },
  { name: 'Servis Durum Sorgulama', screen: 'ServiceStatusInquiry', icon: 'search-outline' },
  { name: 'Wiky Watch Sıfırlama Formu', screen: 'ResetForm', icon: 'refresh-outline' },
  { name: 'Servis Ödeme Formu', screen: 'DevicePaymentInquiry', icon: 'card-outline' },
  { name: 'Sıkça Sorulan Sorular', screen: 'FaqScreen', icon: 'help-circle-outline' },
  { name: 'Sipariş Durumu', screen: 'OrderTracking', icon: 'cube-outline' },
  { name: 'Satış Noktaları', screen: 'SalesPoints', icon: 'location-outline' },
  { name: 'Bloglarımız', screen: 'Bloglarimiz', icon: 'newspaper-outline' },
];

export default function MenuScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/wiky-logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Menü</Text>
      </View>

      <View style={styles.menuList}>
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            title={item.name}
            icon={item.icon}
            onPress={() => navigation.navigate(item.screen)}
          />
        ))}
      </View>
    </ScrollView>
  );
}
