import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

const [age, setAge] = useState(0)
const [min, setMin] = useState(0)
const [max, setMax] = useState(0)


function calculate() {
  const min = Math.round((220-age) * 0.65)
  const max = Math.round((220-age) * 0.85)
  setMin(min)
  setMax(max)
}


  return (
    <View style={styles.container}>
      <Text style={styles.field}>Ikä</Text>
      <TextInput 
        keyboardType='decimal-pad' 
        style={styles.input} 
        value={age}
        onChangeText={text => setAge(text)}
        />
      <Text style={styles.field}>Hr limits</Text>
      <Text style={styles.field}>{min}-{max}</Text>
      <Button onPress={calculate} title="Calculate"></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'center',
    margin: 5,
  },
  field: {
    marginBottom: 8,
  },
  input: {
    backgroundColor: "gray",
    color: "white",
    marginBottom: 8,
    height: 50,
  }
});
