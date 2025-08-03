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
import styles from '@/src/styles/18orderDetails'

const { width } = Dimensions.get('window');

const OrderDetailsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const order = route.params?.order;


  if (!order) {
    return (
      <View style={styles.center}>
        <Text style={styles.centerText}>whs;u o;a; fidhd.; fkdyel</Text>
      </View>
    );
  }

  const handleCall = () => {
    if (order.phone) {
      Linking.openURL(`tel:${order.phone}`);
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
        <Text style={styles.title}>weKjqï úia;r</Text>
      </View>

      {/*  Image + Info Row */}
      <View style={styles.imageRow}>
        {order.imageUri && (
          <Image source={{ uri: order.imageUri }} style={styles.image} />
        )}
        <View style={styles.detailsBox}>
          <Text style={styles.name}>{order.itemName}</Text>
          <Text style={styles.text2}>{'whs;u .Kk ('} {order.count}</Text>
          <Text style={styles.text1}>
           {"uq¿ uqo, ( re'"} {parseInt(order.count) * parseInt(order.price)}
          </Text>
        </View>
      </View>

      {/*  Description */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>mdßfNda.slhf.a ,smskh</Text>
        <Text style={styles.text}>{order.address}</Text>
      </View>


      {/*  Phone + Call Now */}
      <View style={styles.phoneRow}>
        <Text style={styles.text}>📞  {order.phone}</Text>
        <TouchableOpacity style={styles.callButton} onPress={handleCall}>
          <Text style={styles.callText}>l;d lrkak</Text>
        </TouchableOpacity>
      </View>

      
      {/* <TouchableOpacity style={styles.orderButton}
        onPress={() => navigation.navigate('OrderNow', { order})}>
        <Text style={styles.orderText}>weKjqï lrkak</Text>
      </TouchableOpacity> */}
    </ScrollView>
  );
};



export default OrderDetailsScreen;
