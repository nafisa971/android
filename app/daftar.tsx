import { Text, TextInput, SafeAreaView, ScrollView, StyleSheet, Button, Alert, ToastAndroid } from 'react-native';
import { useRouter } from 'expo-router';
import { Link } from 'expo-router';
import { useState } from 'react';
import axios from 'axios';
const API_URL = 'http://10.10.111.45/CRUD_EasyUI/apiregis/regis';

export default function  Index() {
  const router = useRouter(); // Gunakan router untuk navigasi
  const [nama, setNama] = useState('');
  const [telepon, setTelepon] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    var bodyFormData = new FormData();
    if (username == ""){
      Alert.alert("Mohon isikan username")
    } else if(password == ""){
      Alert.alert("Mohon isikan password")
    } else if(telepon == ""){
      Alert.alert("Mohon isikan no hp")
    } else if(nama == ""){
      Alert.alert("Mohon isikan nama")
    } else if(email == ""){
      Alert.alert("Mohon isikan email")
      
    }else{
      bodyFormData.append('username', username);
      bodyFormData.append('password', password);
      bodyFormData.append('no_hp', telepon);
      bodyFormData.append('email', email);
      bodyFormData.append('nama_guru', nama);


      axios({
        method: "post",
        url: API_URL,
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
    }
  };
 
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>  
        <Text style={styles.paragraph}>LOGIN</Text>

        <Text style={styles.paragraph2}>NAMA PENGGUNA</Text>
        <TextInput 
          value={username}
          onChangeText={setUsername}
          style={styles.input} 
          underlineColorAndroid="transparent" />

        <Text style={styles.paragraph2}>KATA SANDI</Text>
        <TextInput 
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input} 
          underlineColorAndroid="transparent" />

        <Text style={styles.paragraph2}>EMAIL</Text>
        <TextInput 
          value={email}
          onChangeText={setEmail}
          style={styles.input} 
          underlineColorAndroid="transparent" />

        <Text style={styles.paragraph2}>NO HP</Text>
        <TextInput 
          value={telepon}
          onChangeText={setTelepon}
          style={styles.input} 
          underlineColorAndroid="transparent" />

          <Text style={styles.paragraph2}>NAMA LENGKAP</Text>
        <TextInput 
          value={nama}
          onChangeText={setNama}
          style={styles.input} 
          underlineColorAndroid="transparent" />
        
        {/* Tombol Daftar */}
        <Button title="Daftar"
          // onPress={() => router.push('/(tabs)')}
          onPress={handleRegister}
          />

        {/* Link untuk Login */}
      
      
      <Link href="/daftar" style={styles.paragraph3}>
        Sudah punya akun? Login
        
      </Link>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'white',
    padding: 8,
  },
  scrollContainer: {
    padding: 8,
    justifyContent: 'center',
    alignContent: 'center',
    flexGrow: 1,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    height: 42,
    color: 'black',
    backgroundColor: 'lightgrey',
    marginBottom: 20,
  },
  paragraph: {
    margin: 24,
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#6CB1E3',
  },
  paragraph2: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'black',
  },
  paragraph3: {
    margin: 10,
    fontSize: 14,
    textAlign: 'center',
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
