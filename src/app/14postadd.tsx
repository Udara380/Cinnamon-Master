import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/14postadd'; 
import { useFonts } from 'expo-font';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { database } from '@/firebase';
import { ref, push, set } from 'firebase/database';
import { getAuth } from 'firebase/auth';



const AddItemForm = () => {
  const [itemName, setItemName] = useState('');
  const [amount, setAmount] = useState('');
  const [price, setPrice] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [imageBase64, setImageBase64] = useState(null);
  const [imagePreviewUri, setImagePreviewUri] = useState(null);
  const [uploading, setUploading] = useState(false);
  const navigation = useNavigation();


  const pickImage = async () => {
    try {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!permissionResult.granted) {
        Alert.alert('අවසර අකුරු', 'පින්තූර තෝරා ගැනීමට media library access අවශ්‍යයි.');
        return;
      }
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.7,
        base64: true,
      });

      if (!result.canceled) {
        setImageBase64(result.assets[0].base64);
        setImagePreviewUri(result.assets[0].uri);
      }
    } catch (error) {
      console.error('pickImage Error:', error);
      Alert.alert('දෝෂයක්', 'පින්තූර තෝරා ගැනීමේදී දෝෂයක් සිදු විය.');
    }
  };

  const uploadImageAsync = async (base64String) => {
    try {
      const apiKey = '85e3b6d99020ee88c5ecf538e6ebccb9';
      const formData = new FormData();
      formData.append('image', base64String);

      const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
        method: 'POST',
        body: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      const data = await response.json();
      if (data.success) {
        return data.data.url;
      } else {
        throw new Error('ImgBB upload failed');
      }
    } catch (error) {
      console.error('Image upload failed:', error);
      throw error;
    }
  };

  const validateForm = () => {
    if (!itemName.trim()) return Alert.alert('දෝෂයක්', 'අයිතම නාමය ඇතුල් කරන්න.');
    if (!amount.trim()) return Alert.alert('දෝෂයක්', 'ප්‍රමාණය ඇතුල් කරන්න.');
    if (!price.trim()) return Alert.alert('දෝෂයක්', 'මිල ඇතුල් කරන්න.');
    if (!phone.trim()) return Alert.alert('දෝෂයක්', 'දුරකථන අංකය ඇතුල් කරන්න.');
    if (phone.trim().length !== 10) return Alert.alert('දෝෂයක්', 'දුරකථන අංකය 10ක් විය යුතුයි.');
    if (!description.trim()) return Alert.alert('දෝෂයක්', 'විස්තරයක් ඇතුල් කරන්න.');
    if (!imageBase64) return Alert.alert('දෝෂයක්', 'පින්තූරයක් තෝරන්න.');
    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      setUploading(true);

      const imageUrl = await uploadImageAsync(imageBase64);

      // 🔑 Get current user's email
      const auth = getAuth();
      const user = auth.currentUser;
      const email = user?.email || 'anonymous@example.com'; // fallback if user null

      const itemsRef = ref(database, 'items');
      const newItemRef = push(itemsRef);

      await set(newItemRef, {
        itemName,
        amount,
        price,
        phone,
        description,
        imageUri: imageUrl,
        createdAt: Date.now(),
        email, // 👈 Add email here
      });

      Alert.alert('සාර්ථකයි', 'Item එක සාර්ථකව ඇතුල් කරන ලදි!');

      setItemName('');
      setAmount('');
      setPrice('');
      setPhone('');
      setDescription('');
      setImageBase64(null);
      setImagePreviewUri(null);
    } catch (error) {
      Alert.alert('දෝෂයක්', 'දත්ත සුරැකුමට ප්‍රශ්නයක් ඇතිවී ඇත.');
      console.error(error);
    } finally {
      setUploading(false);
    }
  };


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F3F3F3' }}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        style={styles.scrollView}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>oekaùula m,lrkak</Text>
      </View>
        <Text style={[styles.label, { fontFamily: '4u-emanee' }]}>whs;u kduh</Text>
        <TextInput style={styles.input} value={itemName} onChangeText={setItemName} />

        <Text style={[styles.label, { fontFamily: '4u-emanee' }]}>
          whs;uhl m%udKh ^.%Eï 500$ ñ',S 100&
        </Text>
        <TextInput style={styles.input} value={amount} onChangeText={setAmount} />

        <Text style={[styles.label, { fontFamily: '4u-emanee' }]}>whs;uhl ñ,</Text>
        <TextInput
          style={styles.input}
          value={price ? `Rs. ${price}` : ''}
          onChangeText={(text) => {
            const clean = text.replace(/^Rs.\s*/, '').replace(/[^\d]/g, '');
            setPrice(clean);
          }}
          keyboardType="numeric"
        />

        <Text style={[styles.label]}>ÿrl;k wxlh</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          maxLength={10}
        />

        <Text style={[styles.label, { fontFamily: '4u-emanee' }]}>úia;rh</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={4}
        />

        <Text style={[styles.label, { fontFamily: '4u-emanee' }]}>whs;u PdhdrEmh</Text>
        <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
          {imagePreviewUri ? (
            <Image source={{ uri: imagePreviewUri }} style={styles.image} />
          ) : (
            <Text style={[styles.imageText, { fontFamily: '4u-emanee' }]}>
              PdhdrEmhla f;darkak
            </Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={[styles.buttonText, { fontFamily: '4u-emanee' }]}>{'m,lrkak'}</Text>
        </TouchableOpacity>
      </ScrollView>

      {uploading && (
        <View
          style={{
            position: 'absolute',
            top: 10,
            left: 0,
            right: 0,
            alignItems: 'center',
            zIndex: 100,
          }}
        >
          <View
            style={{
              backgroundColor: '#333',
              paddingVertical: '4%',
              paddingHorizontal: '10%',
              borderRadius: 20,
            }}
          >
            <Text style={{ color: 'white', fontFamily: '4u-emanee' }}>
              {"oekaùu m<fjñka''"}
            </Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default AddItemForm;
