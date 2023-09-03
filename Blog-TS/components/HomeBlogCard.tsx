import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { removePost } from '../redux/Slice';

interface HomeBlogCardProps {
    navigation: any,
    title: string,
    id : string
}

const HomeBlogCard: React.FC<HomeBlogCardProps> = ({ navigation, title, id }) => {

    const dispatch = useDispatch();

    const handleNavigateToDetail = () => {
        navigation.navigate("BlogDetailScreen", { id: id });
    }

    const handleRemovePost = (postId: string) => {
        dispatch(removePost({ id: postId }));
    }

    return (
        <View style={styles.card_container}>
            <TouchableOpacity style={styles.text_view} onPress={handleNavigateToDetail}>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.delete_icon} onPress={() => handleRemovePost(id)}>
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
