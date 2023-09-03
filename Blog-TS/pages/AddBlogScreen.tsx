import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddBlogComponent from '../components/AddBlogComponent';

interface AddBlogScreenProps {
    
}

const AddBlogScreen: React.FC<AddBlogScreenProps> = ({}) => {
    return (
        <View style = {styles.container}>
            <AddBlogComponent/>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})

export default AddBlogScreen;
