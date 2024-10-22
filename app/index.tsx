import { Text, TextInput, SafeAreaView, ScrollView, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';
import { Link } from 'expo-router';


export default function  Index() {
  const router = useRouter(); // Gunakan router untuk navigasi

 
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>  
        <Text style={styles.paragraph}>LOGIN</Text>

        <Text style={styles.paragraph2}>NAMA PENGGUNA</Text>
        <TextInput style={styles.input} underlineColorAndroid="transparent" />

        <Text style={styles.paragraph2}>KATA SANDI</Text>
        <TextInput style={styles.input} underlineColorAndroid="transparent" secureTextEntry />

        {/* Tombol Login */}
        <Button title="Login"
          onPress={() => router.push('/(tabs)')}
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
