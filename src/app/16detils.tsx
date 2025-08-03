import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import styles from '@/src/styles/16details'

const { width } = Dimensions.get('window');



const OrderDetailsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const item = route.params?.item;

  if (!item) {
    return (
      <View style={styles.center}>
        <Text style={styles.centerText}>whs;u o;a; fidhd.; fkdyel</Text>
      </View>
    );
  }

  const handleCall = () => {
    if (item.phone) {
      Linking.openURL(`tel:${item.phone}`);
    } else {
      alert('දුරකථන අංකය ලබාගත නොහැක.');
    }
  };



  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/*  Back and Title */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>weKjqï lrkak</Text>
      </View>

      {/*  Image + Info Row */}
      <View style={styles.imageRow}>
        {item.imageUri && (
          <Image source={{ uri: item.imageUri }} style={styles.image} />
        )}
        <View style={styles.detailsBox}>
          <Text style={styles.name}>{item.itemName}</Text>
          <Text style={styles.text2}>ප්‍රමාණය: {item.amount}</Text>
          <Text style={styles.text1}>මිල: රු. {item.price}</Text>
        </View>
      </View>

      {/*  Description */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>úia;rh</Text>
        <Text style={styles.text}>{item.description}</Text>
      </View>


      {/*  Phone + Call Now */}
      <View style={styles.phoneRow}>
        <Text style={styles.text}>📞  {item.phone}</Text>
        <TouchableOpacity style={styles.callButton} onPress={handleCall}>
          <Text style={styles.callText}>l;d lrkak</Text>
        </TouchableOpacity>
      </View>

      {/* 🛒 Order Now Button */}
      <TouchableOpacity style={styles.orderButton}
        onPress={() => navigation.navigate('OrderNow', { item })}>
        <Text style={styles.orderText}>weKjqï lrkak</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};



export default OrderDetailsScreen;
