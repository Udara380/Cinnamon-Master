import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { getDatabase, ref, onValue, remove } from 'firebase/database';
import styles from '@/src/styles/20myorderdetails';
import { useFonts } from 'expo-font';

const OrderDetailsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const order = route.params?.order;

  const [itemData, setItemData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!order?.itemId) return;
    const db = getDatabase();
    const itemsRef = ref(db, 'items');

    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const item = Object.entries(data)
          .map(([id, value]) => ({ id, ...value }))
          .find((it) => it.id === order.itemId);

        setItemData(item);
      }
      setLoading(false);
    });
  }, [order]);

  const handleCall = () => {
    if (itemData?.phone) {
      Linking.openURL(`tel:${itemData.phone}`);
    } else {
      alert('දුරකථන අංකය ලබාගත නොහැක.');
    }
  };

  const handleDeleteOrder = () => {
    Alert.alert(
      'ඇණවුම මකන්න',
      'ඇණවුම අවලංගු කරන්නද?',
      [
        {
          text: 'නැහැ',
          style: 'cancel',
        },
        {
          text: 'ඔව්',
          onPress: () => {
            if (!order?.id) {
              alert('Order ID එක නොමැත.');
              return;
            }

            const db = getDatabase();
            const orderRef = ref(db, `orders/${order.id}`);

            remove(orderRef)
              .then(() => {
                alert('ඇණවුම අවලංගු කෙරුණි');
                navigation.goBack();
              })
              .catch((error) => {
                alert('මැකීම අසාර්ථකයි: ' + error.message);
              });
          },
        },
      ],
      { cancelable: true }
    );
  };

  if (!order || !itemData) {
    return (
      <View style={styles.center}>
        {loading ? (
          <ActivityIndicator size="large" color="green" />
        ) : (
          <Text style={styles.centerText}>Order Details Not Found</Text>
        )}
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>uf.a weKjqï úia;r</Text>
      </View>

      {/* Image + Details */}
      <View style={styles.imageRow}>
        {itemData.imageUri && (
          <Image source={{ uri: itemData.imageUri }} style={styles.image} />
        )}
        <View style={styles.detailsBox}>
          <Text style={styles.name}>{itemData.itemName}</Text>
          <Text style={styles.text2}>{'whs;u .Kk ('} {order.count}</Text>
          <Text style={styles.text1}>
            {"uq¿ uqo, ( re'"} {parseInt(order.count) * parseInt(itemData.price)}
          </Text>
        </View>
      </View>

      {/* Description */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>úia;rh</Text>
        <Text style={styles.text}>{itemData.description}</Text>
      </View>

      {/* Phone + Call */}
      <View style={styles.phoneRow}>
        <Text style={styles.text}>📞  {itemData.phone}</Text>
        <TouchableOpacity style={styles.callButton} onPress={handleCall}>
          <Text style={styles.callText}>l;d lrkak</Text>
        </TouchableOpacity>
      </View>

      {/* Delete Order Button */}
      <View style={styles.section}>
        <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteOrder}>
          <Text style={styles.deleteText}>weKjqu wj,x.= lrkak</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default OrderDetailsScreen;
