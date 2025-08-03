import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { getDatabase, ref, onValue } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import styles from '@/src/styles/19myorders';

const MyPlacedOrdersScreen = () => {
  const navigation = useNavigation();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) return;

    const db = getDatabase();
    const ordersRef = ref(db, 'orders');

    onValue(ordersRef, (snapshot) => {
      const data = snapshot.val();
      if (!data) {
        setOrders([]);
        setLoading(false);
        return;
      }

      const orderList = Object.entries(data)
        .map(([id, value]) => ({ id, ...value }))
        .filter((order) => order.buyerEmail === user.email)
        .sort((a, b) => b.createdAt - a.createdAt);

      setOrders(orderList);
      setLoading(false);
    });
  }, []);

  const renderCard = ({ item }) => (
    <View style={styles.card}>
      {item.imageUri && (
        <Image source={{ uri: item.imageUri }} style={styles.image} />
      )}
      <Text style={styles.name} numberOfLines={1}>{item.itemName}</Text>
      <Text style={styles.quantity}>{'m%udKh('} {item.count}</Text>
      <Text style={styles.price}>{"uq¿ jákdlu    re'"} {item.total}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('MyorderDetails', { order: item })}
      >
        <Text style={styles.buttontext}>úia;r</Text>
      </TouchableOpacity>
    </View>
    
  );


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>uf.a weKjqï</Text>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#34a853" />
      ) : orders.length === 0 ? (
        <Text style={styles.errorname}>weKjqï fkdue;</Text>
      ) : (
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={renderCard}
          numColumns={3}
          columnWrapperStyle={styles.row}
          contentContainerStyle={{ paddingBottom: Dimensions.get('window').height * 0.3 }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default MyPlacedOrdersScreen;
