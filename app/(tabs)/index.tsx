import { Text, TextInput, SafeAreaView, Image, StyleSheet } from 'react-native';

// You can import supported modules from npm



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    
    
      <Text style={styles.paragraph}>
        LOGIN
      </Text>
       <Text style={styles.paragraph2}>
        NAMA
      </Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid='transparent'
      />
     
       <Text style={styles.paragraph2}>
        PASSWORD
      </Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid='transparent'
      
      />
      
      
       <Text style={styles.paragraph3}>
        Belum daftar? Daftar
      </Text>
      
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'lightgrey',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'grey'
    
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
