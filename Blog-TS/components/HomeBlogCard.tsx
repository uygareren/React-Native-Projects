import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface HomeBlogCardProps {
    navigation: any
}

const HomeBlogCard: React.FC<HomeBlogCardProps> = ({navigation}) => {



    return(
        <View style = {styles.card_container}>
            <TouchableOpacity style = {styles.text_view} onPress={() => navigation.navigate("BlogDetailScreen")}>
                <Text style = {styles.text}>React Native</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.delete_icon}>
                <FontAwesome name="trash" size={32} color="black" />
            </TouchableOpacity>
        </View>
    )
    
}


const styles = StyleSheet.create({
    card_container:{
        flexDirection: 'row',
        borderColor: "black",
        marginVertical: 20
    },
    text_view:{
        width: "88%",
        height: "100%",
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    text:{
        fontSize:22,
    },
    delete_icon:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 14
    }

})


export default HomeBlogCard;