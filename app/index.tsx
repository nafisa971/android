import { Text, TextInput, SafeAreaView, ScrollView, StyleSheet, Button, Alert, ToastAndroid } from 'react-native';
import { useRouter } from 'expo-router';
import { Link } from 'expo-router';
import { useState } from 'react';
import axios from 'axios';
const API_URL = 'http://10.10.70.33/CRUD_EasyUI/Api/login';

export default function  Index() {
  const router = useRouter(); // Gunakan router untuk navigasi
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    var bodyFormData = new FormData();
    if (username == ""){
      Alert.alert("Mohon isikan username")
    } else if(password == ""){
      Alert.alert("Mohon isikan password")
      
    }else{
      bodyFormData.append('nama', username);
      bodyFormData.append('password', password);
      axios({
        method: "post",
        url: API_URL,
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(response => {
        // Handle successful login
        console.log(username, password);
        console.log('Login successful', response.data);
        if(response.data.status){
          router.push('/(tabs)')
          ToastAndroid.show('Berhasil Login!', ToastAndroid.SHORT);
        }else{
          Alert.alert(response.data.message)
        }
        
        // Navigate to your app's main screen or set authentication state
      })
      .catch(error => {
        // Handle login error
        console.error('Login failed', error.response);
        Alert.alert('Login Failed', 'Please check your credentials and try again.');
      });
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
        

        {/* Tombol Login */}
        <Button title="Login"
          // onPress={() => router.push('/(tabs)')}
          onPress={handleLogin}
          />

        {/* Link untuk Daftar */}
      <Link href="/daftar" style={styles.paragraph3}>
        Belum punya akun? Daftar
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
