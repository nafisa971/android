import { Text, TextInput, SafeAreaView, ScrollView, Image, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';
import { Link } from 'expo-router';

// You can import supported modules from npm
export default function App() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollContainer}>  
    
    
        <Text style={styles.paragraph}>
            DAFTAR
        </Text>

        <Text style={styles.paragraph2}>
        NAMA LENGKAP
        </Text>
        <TextInput
        style={styles.input}
        underlineColorAndroid='transparent'
        />

       <Text style={styles.paragraph2}>
        NO HP
        </Text>
        <TextInput
        style={styles.input}
        underlineColorAndroid='transparent'
        />

        <Text style={styles.paragraph2}>
        EMAIL
        </Text>
        <TextInput
        style={styles.input}
        underlineColorAndroid='transparent'
        />

        <Text style={styles.paragraph2}>
        NAMA PENGGUNA
        </Text>
        <TextInput
        style={styles.input}
        underlineColorAndroid='transparent'
        />

        <Text style={styles.paragraph2}>
        KATA SANDI
        </Text>
        <TextInput
        style={styles.input}
        underlineColorAndroid='transparent'
        secureTextEntry
        />
        {/* Tombol Daftar */}
        <Button title="Daftar"
          onPress={() => router.push('/(tabs)')}
          />
     
      
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
    flexGrow: 1, // Ini membuat ScrollView tumbuh sesuai dengan konten
  },
  input :{
    borderWidth : 1,
    borderRadius : 10,
    padding : 12,
    height : 42,
    color : "black",
    marginBottom: 20,
    backgroundColor: 'lightgrey',

},

  paragraph: {
    margin: 24,
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'#6CB1E3'
    
  },
  text: {
    margin: 24,
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'black'
    
  },
  paragraph2: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    color:'black'
  },
  paragraph3: {
    margin: 10,
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
    color:'blue'
  },
   logo: {
    height: 100,
    width: 100,
  }
});
