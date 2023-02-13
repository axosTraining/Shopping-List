import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [result, setResult] = useState('');
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [history, setHistory] = useState([]);

  const checkValues = () => {
    let check = true;
    if (isNaN(x) && !isNaN(y)) {
      check = false;
      setResult('Type the first value please')
    } else if (!isNaN(x) && isNaN(y)) {
      check = false;
      setResult('Type the second value please')
    } else if (isNaN(x) && isNaN(y)) {
      check = false;
      setResult('Type the values please')
    }
    return (check);
  }

  const makeMinus = () => {
    let check = checkValues();
    if (check) {
      setResult(`Result: ${x - y}`);
      setHistory([`${x} - ${y} = ${x - y}`, ...history]);
    }
  }

  const makePlus = () => {
    if (checkValues()) {
      setResult(`Result: ${x + y}`);
      setHistory([`${x} + ${y} = ${x + y}`, ...history]);
    }
  }

  const clearAll = () => {
    setResult('');
    setX('');
    setY('');
  }

  return (
    <View style={styles.container}>
      <Text>{result}</Text>
      <TextInput
        style={styles.textfield}
        onChangeText={currValue => setX(parseInt(currValue))}
        value={x}
        keyboardType='numeric'
      />
      <TextInput
        keyboardType='numeric'
        style={styles.textfield}
        onChangeText={currValue => setY(parseInt(currValue))}
        value={y}
      />
      <View style={{ flexDirection: 'row' }}>
        <Button onPress={makePlus} title='+' />
        <Button onPress={makeMinus} title='-' />
      </View>
      <Button onPress={clearAll} title='Clear' />
      <Text>History:</Text>
      <FlatList
        data={history}
        renderItem={({ item }) => <Text style={{ fontSize: 18 }}>{item}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textfield:
  {
    height: 30,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1
  }
});
