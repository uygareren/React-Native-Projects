import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Search from './components/Search';
import data from './data/product.json';
import ProductCard from './components/ProductCard';
import { useEffect, useState } from 'react';

export default function App() {

  const [productData, setproductData] = useState([]);

  useEffect(() => {
    setproductData(data);
  }, [])



  const renderComponent = ({ item }) => {
    return <ProductCard imageUrl={item.imgURL} title={item.title} price={item.price} isStock = {item.inStock} />;
  };
  

  return (
    <View style={styles.container}>
      <Search/>
      <FlatList
        data={productData}
        renderItem={renderComponent}
        keyboardShouldPersistTaps="handled"
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} // Her satırda 2 ürün kartı olacak şekilde düzenleme yapıldı
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
