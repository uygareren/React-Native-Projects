import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeBlogCard from "../components/HomeBlogCard"
import { useNavigation } from '@react-navigation/native';

interface HomepageScreenProps {
    
}

const HomepageScreen: React.FC<HomepageScreenProps> = ({}) => {

    const navigation = useNavigation();

    return (
        <View style = {styles.container}>
            <HomeBlogCard navigation={navigation}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})

export default HomepageScreen;
