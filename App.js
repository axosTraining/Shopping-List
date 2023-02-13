import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [product, setProduct] = useState('');
  const [list, setList] = useState([]);

  const addProduct = () => {
    if (product !== '') {
      setList([product, ...list]);
      setProduct('');
    } else {
      alert('please fill in product field');
    }
  }

  const clearAll = () => {
    setList([]);
    setProduct('');
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textfield}
        onChangeText={currValue => setProduct(currValue)}
        value={product}
      />
      <View style={{ flexDirection: 'row' }}>
        <Button onPress={addProduct} title='Add' />
        <Button onPress={clearAll} title='Clear' />
      </View>
      {list.length > 0 && <Text style={styles.header}>Shopping List:</Text>}
      <FlatList
        data={list}
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
  },
  header: {
    marginTop: 10,
    color: 'blue',
    fontWeight: 'bold',
  }
});
