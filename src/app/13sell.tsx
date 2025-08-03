import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Image,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Feather } from '@expo/vector-icons';
import { getDatabase, ref, onValue } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import styles from '@/src/styles/13sell';

const screenWidth = Dimensions.get('window').width;

const HomeScreen = () => {
  const navigation = useNavigation();
  const [myOrders, setMyOrders] = useState([]);
  const [loading, setLoading] = useState(true);


  const { width, height } = Dimensions.get('window');
  const FONT_SIZE_PERCENTAGE = 0.05;
  const fontSize = width * FONT_SIZE_PERCENTAGE;

  useEffect(() => {
    const fetchMyOrders = async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      if (!user) return;

      const dbRealtime = getDatabase();
      const ordersRef = ref(dbRealtime, 'orders');

      onValue(ordersRef, (snapshot) => {
        const data = snapshot.val();
        if (!data) {
          setMyOrders([]);
          setLoading(false);
          return;
        }

        const ordersArray = Object.entries(data).map(([id, value]) => ({
          id,
          ...value,
        }));

        const filtered = ordersArray.filter(
          (order) => order.sellerEmail === user.email
        );

        const sorted = filtered.sort((a, b) => b.createdAt - a.createdAt);
        setMyOrders(sorted);
        setLoading(false);
      });
    };

    fetchMyOrders();
  }, []);

  const renderOrderCard = ({ item }) => (
    <View style={styles.card}>
      {item.imageUri ? (
        <Image source={{ uri: item.imageUri }} style={styles.image} />
      ) : null}
      <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
        {item.itemName}
      </Text>
      <Text style={styles.quantity}>{'m%udKh('}  {item.count}</Text>
      <Text style={styles.price}>
        uq¿ jákdlu(     re'{parseInt(item.count) * parseInt(item.price)}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('OrderDetails', { order: item })}
      >
        <Text style={styles.buttontext}>úia;r</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('PostAdd')}
        >
          <Feather name="plus" size={20} color="#fff" />
          <Text style={styles.buttonText}>{'oekaùula m<lrkak'}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.refreshButton}
          onPress={() => navigation.navigate('MyAdds')}
        >
          <Feather name="minus" size={20} color="#fff" />
          <Text style={styles.buttonText}>Tfí oekaùï n,kak</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.textheader}>ug ,eî we;s weKjqï</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#34a853" />
      ) : myOrders.length === 0 ? (
        <Text style={{ fontFamily: '4u-emanee', marginBottom: 10,textAlign:'center' }}>
          weKjqï fkdue;
        </Text>
      ) : (
        <FlatList
          key="orders-list-3cols"
          data={myOrders}
          keyExtractor={(item) => item.id}
          renderItem={renderOrderCard}
          numColumns={3}
          columnWrapperStyle={styles.row}
          contentContainerStyle={{ paddingBottom: height * 0.3 }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default HomeScreen;
