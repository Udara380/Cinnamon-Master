import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
  Alert,
  Dimensions
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ref, onValue } from 'firebase/database';
import { database } from '@/firebase';
import styles from '@/src/styles/12buy';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(true);


  const { width, height } = Dimensions.get('window');
  const FONT_SIZE_PERCENTAGE = 0.05;
  const fontSize = width * FONT_SIZE_PERCENTAGE;

  useEffect(() => {
    const itemsRef = ref(database, 'items');
    const unsubscribe = onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const itemsArray = Object.keys(data)
          .map((key) => ({
            id: key,
            ...data[key],
          }))
          .sort((a, b) => b.createdAt - a.createdAt); 
        setProducts(itemsArray);
        setFilteredProducts(itemsArray);
      } else {
        setProducts([]);
        setFilteredProducts([]);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // 🔍 Filter logic
  useEffect(() => {
    const filtered = products.filter((item) =>
      item.itemName?.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchText, products]);

  const renderCard = ({ item }) => (
  <View style={styles.card}>
    {item.imageUri ? (
      <Image source={{ uri: item.imageUri }} style={styles.image} />
    ) : null}
    <Text
      style={styles.name}
      numberOfLines={1}
      ellipsizeMode="tail"
    >
      {item.itemName}
    </Text>
    <Text style={styles.quantity}>{item.amount}</Text>
    <Text style={styles.price}>Rs. {item.price}</Text>

    <TouchableOpacity
      style={styles.button}
        onPress={() => navigation.navigate('Details', { item })}

    >
      <Text style={styles.buttontext}>
        weKjqï lrkak
      </Text>
    </TouchableOpacity>
  </View>
);

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <TextInput
          placeholder="fidhkak"
          style={styles.searchInput}
          placeholderTextColor="#888"
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity
          style={styles.ordersButton}
          onPress={() => navigation.navigate('MyOrder')}
        >
          <Text style={styles.ordersText}>Tfí weKjqï</Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#34a853" />
      ) : (
        <FlatList
          data={filteredProducts}
          renderItem={renderCard}
          keyExtractor={(item) => item.id}
          numColumns={3}
          columnWrapperStyle={styles.row}
          contentContainerStyle={{ paddingBottom: height*0.3 }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default HomeScreen;
