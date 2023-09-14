import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import {useEffect} from "react"
import CategoryCard from '../compponents/CategoryCard';
import {CATEGORIES} from "../data/dummy-data"
import { SafeAreaView } from 'react-native-safe-area-context';


interface CategoriesScreenProps{

}

const CategoriesScreen: React.FC<CategoriesScreenProps> = () => {

    useEffect(() => {
      
    
      console.log(CATEGORIES)
    }, [])
    

    const renderCategories = ({item}: {item:{id: string ,title: string, color: string}}) => {
        return <CategoryCard id = {item.id} title = {item.title} color = {item.color} />
    }

    return (
        <SafeAreaView style = {styles.container}>
            <FlatList
            data={CATEGORIES}
            renderItem={renderCategories}
            keyExtractor={(item) => item.id}
            numColumns={2}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 20,
        backgroundColor: "white"
    }
})

export default CategoriesScreen;