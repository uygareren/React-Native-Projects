import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { FOODS } from "../../data/dummy-data"
import CategoryDetailCard from '../../compponents/CategoryDetailCard';

type RootStackParamList = {
  CategoryDetail: {
    id: string;
  };
};

type CategoryDetailRouteProp = RouteProp<RootStackParamList, 'CategoryDetail'>;

interface CategoryDetailProps {
  route: CategoryDetailRouteProp;
}

interface Food {
  id: string;
  title: string,
  imageUrl: string;
  complexity: string;
  affordability: string;}

const CategoryDetail: React.FC<CategoryDetailProps> = ({ route }) => {
  const id = route.params.id;

  const [food_datas, setfood_datas] = useState<Food[]>([]);

  useEffect(() => {
    const food_data = FOODS.filter((item) => item.categoryIds.includes(id));
    setfood_datas(food_data);
  }, [id]);
  
  useEffect(() => {
    console.log(food_datas); 
  }, [food_datas]); 
  
  const renderCategoryDetail = ({item} : {item:Food}) => {
    return <CategoryDetailCard image = {item.imageUrl} title = {item.title} calory = {item.complexity} affordability = {item.affordability}/>
  }
  

  return (
    <View style={styles.container}>
      <FlatList
      data={food_datas}
      renderItem={renderCategoryDetail}
      keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aee5f2"

  }
});

export default CategoryDetail;
