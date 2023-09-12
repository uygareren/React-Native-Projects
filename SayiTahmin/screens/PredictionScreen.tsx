import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserPredictionBoard from '../components/UserPredictionBoard';
import UpdateNumberComponent from '../components/UpdateNumberComponent';
import UserPredictionList from '../components/UserPredictionList';
import { useSelector } from 'react-redux';



interface PredictionScreenProps{
    
}

const PredictionScreen : React.FC<PredictionScreenProps> = () => {

    const user_prediction_number = useSelector((state: { numberPrediction: { user_predict: number[] } }) => state.numberPrediction.user_predict );


    const renderPredictions = ({ item }: { item: number}) => {
        let counter = user_prediction_number.indexOf(item) + 1 

        return <UserPredictionList counter = {counter} number = {item}/>

    }

    return (
        <SafeAreaView style = {styles.container}>
            <UpdateNumberComponent/>
            <UserPredictionBoard/>
            <FlatList
            data={user_prediction_number}
            renderItem={renderPredictions}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        marginTop: 30,
        backgroundColor: "white"
    },
    
})


export default PredictionScreen;