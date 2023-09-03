import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';


interface AddBlogComponentProps {

}

const AddBlogComponent: React.FC<AddBlogComponentProps> = ({}) => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>Başlık Giriniz</Text>
            <TextInput style = {styles.text_ınput}/>

            <Text style = {styles.text}>İçerik Giriniz</Text>
            <TextInput style = {styles.text_ınput}/>

            <TouchableOpacity style = {styles.button_view}>
                <Text style = {styles.button_text}>Kaydet</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        justifyContent: 'flex-start',
        paddingVertical: 20
    },
    text:{
        fontSize: 22,
        alignSelf: 'center',
        marginTop: 20
    },
    text_ınput:{
        width: "90%",
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 15,
        marginTop: 10,
        paddingHorizontal: 15,
        paddingVertical: 15,
        fontSize: 18,
    },
    button_view:{
        backgroundColor: "#036b1f",
        width: "60%",
        alignSelf: 'center',
        borderRadius: 20,
        marginTop: 20,
        paddingVertical: 15,
        paddingHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button_text:{
        fontSize: 18,
        fontWeight: '600',
        color: "white"
    }
})


export default AddBlogComponent;