import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import {useEffect} from "react"
import CategoryCard from '../compponents/CategoryCard';
import {CATEGORIES} from "../data/dummy-data"


interface CategoriesScreenProps{

}

const CategoriesScreen: React.FC<CategoriesScreenProps> = () => {

    // useEffect(() => {
      
    
    //   console.log(CATEGORIES)
    // }, [])
    

    const renderCategories = ({item}: {item:{id: string ,title: string, color: string}}) => {
        return <CategoryCard id = {item.id} title = {item.title} color = {item.color} />
    }

    return (
        <View style = {styles.container}>
            <FlatList
            data={CATEGORIES}
            renderItem={renderCategories}
            keyExtractor={(item) => item.id}
            numColumns={2}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})

export default CategoriesScreen;