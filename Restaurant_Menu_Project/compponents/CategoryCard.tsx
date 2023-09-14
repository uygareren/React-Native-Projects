import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


interface CategoryCardProps{
    id: string,
    title: string,
    color: string
}

const CategoryCard: React.FC<CategoryCardProps> = ({id,title, color}) => {

    const navigation = useNavigation<NavigationProp<any>>()

    return (
        <View >
            <TouchableOpacity onPress={() => navigation.navigate("CategoryDetail", {id: id})} style = {[styles.category_card_view, {backgroundColor: color}]}>
                <Text style = {styles.category_title}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    category_card_view:{
        width: 175,
        height: 175,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 30,
        paddingHorizontal: 20,
        marginVertical: 10,
        marginHorizontal: 10,
        borderRadius: 25
    },
    category_title:{
        fontSize: 22,
        fontWeight: "700"
    }
})

export default CategoryCard;