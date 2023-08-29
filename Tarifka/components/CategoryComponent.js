import { StyleSheet, Text, View, Image, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import React from 'react';

export default function CategoryComponent({ id, categoryName, image, navigation }) {


  const handleDetail = () => {
    navigation.navigate('CategoryDetail',{category_name:categoryName});
  }

  return (
    <TouchableWithoutFeedback onPress={handleDetail}>
      <SafeAreaView style={styles.container}>
        <View style={styles.bodyContainer}>
          <Image style={styles.image} source={{ uri: image }} />
          <Text style={styles.text}>{categoryName}</Text>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  bodyContainer: {
    paddingHorizontal: 10,
    marginTop: 20,
    width: '95%',
    height: 95,
    backgroundColor: '#ECEFF1',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 180,
  },
  text: {
    fontSize: 20,
    marginLeft: 20,
  },
  categoriesText: {
    fontSize: 26,
    color: 'white',
    marginTop: 50,
    alignSelf: 'center',
  },
});
