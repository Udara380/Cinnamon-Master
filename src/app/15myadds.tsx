import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
  Alert,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { ref, onValue, remove } from 'firebase/database';  // <-- remove import added
import { getAuth } from 'firebase/auth';
import { Feather } from '@expo/vector-icons';
import { database } from '@/firebase';
import styles from '@/src/styles/15myadds';

const MyOrdersScreen = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { width, height } = Dimensions.get('window');
  const fontSize = width * 0.05;

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    const userEmail = user?.email;

    if (!userEmail) {
      Alert.alert('ඇතුළුවීම අසාර්ථකයි', 'ඔබට ඔබේ ප්‍රකාශන බැලිය නොහැක.');
      setLoading(false);
      return;
    }

    const itemsRef = ref(database, 'items');
    const unsubscribe = onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const itemsArray = Object.keys(data)
          .map((key) => ({
            id: key,
            ...data[key],
          }))
          .filter((item) => item.email === userEmail)
          .sort((a, b) => b.createdAt - a.createdAt);

        setProducts(itemsArray);
      } else {
        setProducts([]);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // New: Delete handler
  const handleDelete = (itemId, itemName) => {
    Alert.alert(
      'අනුමැතිය',
      `${itemName} මකන්න ඔබට විශ්වාසද?`,
      [
        { text: 'අවලංගු කරන්න', style: 'cancel' },
        {
          text: 'ඔව්',
          style: 'destructive',
          onPress: async () => {
            try {
              const itemRef = ref(database, `items/${itemId}`);
              await remove(itemRef);
              Alert.alert('සාර්ථකයි', `${itemName} මකා දමා ඇත.`);
            } catch (error) {
              Alert.alert('දෝෂයක්', 'මකීමේදී දෝෂයක් සිදු විය.');
              console.error(error);
            }
          },
        },
      ]
    );
  };

  const renderCard = ({ item }) => (
    <View style={styles.card}>
      {item.imageUri ? (
        <Image source={{ uri: item.imageUri }} style={styles.image} />
      ) : null}
      <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
        {item.itemName}
      </Text>
      <Text style={styles.quantity}>{item.amount}</Text>
      <Text style={styles.price}>Rs. {item.price}</Text>

      {/* Delete button instead of orders button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#d9534f' }]}  // Red button
        onPress={() => handleDelete(item.id, item.itemName)}
      >
        <Text style={[styles.buttontext, { color: '#fff' }]}>ulkak</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={[styles.topRow, { alignItems: 'center' }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginRight: 10 }}>
          <Feather name="chevron-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={{ fontFamily: '4u-emanee', fontSize, flex: 1, textAlign: 'left' }}>
          uf.a oekaùï
        </Text>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#34a853" />
      ) : (
        <FlatList
          data={products}
          renderItem={renderCard}
          keyExtractor={(item) => item.id}
          numColumns={3}
          columnWrapperStyle={styles.row}
          contentContainerStyle={{ paddingBottom: height * 0.3 }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default MyOrdersScreen;
