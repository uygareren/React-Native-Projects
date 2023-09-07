import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import userDataSet from '../data/data';
import {User} from '../types/types';
import HomeUserCard from '../components/HomeUserCard';
import { useNavigation } from '@react-navigation/native';

interface HomepageScreenProps {
  navigation: any; 

}

const HomepageScreen: React.FC<HomepageScreenProps> = () => {

  const navigation = useNavigation();

  const renderItem = ({ item } : {item: User}) => {
    return <HomeUserCard user={item} navigation={navigation} />;  
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={userDataSet}
        keyExtractor={(item) => item.id.toString()} 
        renderItem={renderItem} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomepageScreen;
