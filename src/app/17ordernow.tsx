import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import styles from '@/src/styles/17ordernow';
import { ref, push } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { database } from '@/firebase';

const OrderNowScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { item } = route.params || {};

  const [count, setCount] = useState(1);
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [total, setTotal] = useState(0);


  useEffect(() => {
    if (item?.price) {
      const unitPrice = parseInt(item.price);
      setTotal(unitPrice * count);
    }
  }, [count, item]);

  const increaseCount = () => setCount((prev) => prev + 1);
  const decreaseCount = () => setCount((prev) => (prev > 1 ? prev - 1 : 1));

  const handleConfirm = async () => {
    if (!address.trim() || !phone.trim()) {
      alert('කරුණාකර ලිපිනය සහ දුරකථන අංකය ඇතුළත් කරන්න.');
      return;
    }

    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      alert('ඇතුළුවීම් තොරතුරු හමු නොවුණි.');
      return;
    }

    const orderRef = ref(database, 'orders');
    const newOrder = {
      itemId: item.id || null,
      itemName: item.itemName || '',
      sellerEmail: item.email || '',
      imageUri: item.imageUri || '',
      buyerEmail: user.email || '',
      address,
      phone,
      count,
      price: item.price,
      total: total,
      createdAt: Date.now()
    };

    try {
      await push(orderRef, newOrder);
      alert('ඔබේ ඇණවුම සාර්ථකව භාරගන්නා ලදි!');
      navigation.goBack();
    } catch (error) {
      console.error('Firebase order push error:', error);
      alert('ඇණවුම භාරදීමේ දෝෂයකි.');
    }
  };


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="chevron-left" size={28} color="black" />
          </TouchableOpacity>
          <Text style={styles.title}>weKjqu ;yjqre lrkak</Text>
        </View>

        <View style={styles.quantityRow}>
          <Text style={styles.countText}>{'m%udKh( '}</Text>
          <TouchableOpacity onPress={decreaseCount} style={styles.qtyButton}>
            <Text style={styles.qtyText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.countText}>{count}</Text>
          <TouchableOpacity onPress={increaseCount} style={styles.qtyButton}>
            <Text style={styles.qtyText}>+</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label1}>,smskh</Text>
        <TextInput
          style={styles.input1}
          placeholder="ඔබේ ලිපිනය"
          value={address}
          onChangeText={setAddress}
          multiline
        />

        <Text style={styles.label2}>ÿrl:k wxlh</Text>
        <TextInput
          style={styles.input}
          placeholder="දුරකථන අංකය"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          maxLength={10}
        />

        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>{'uq¿ uqo, ('}</Text>
          <Text style={styles.totalValue}>re' {total}</Text>
        </View>

        <View style={styles.notice}>
          <Text style={styles.notice1}>{')m%jdyk .dia;= tl;=lr ke;'}</Text>
        </View>

        <TouchableOpacity onPress={handleConfirm} style={styles.confirmButton}>
          <Text style={styles.confirmText}>weKjqï lrkak</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default OrderNowScreen;
