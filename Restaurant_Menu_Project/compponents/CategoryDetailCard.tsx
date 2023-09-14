import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


interface CategoryDetailCardProps{
    image: string,
    title: string,
    calory: string,
    affordability: string
}

const CategoryDetailCard: React.FC<CategoryDetailCardProps> = ({image, title, calory, affordability}) => {

    const navigation = useNavigation<NavigationProp<any>>()

    return (
        <SafeAreaView style = {styles.container}>
            <View style = {styles.image_view}>
                <Image style = {styles.image} source={{uri: image}}/>
            </View>
            <View style = {styles.body_view}>
                <Text style = {styles.title}>{title}</Text>

                <View style = {styles.text_view}>
                    <Text style = {styles.text}>{calory}</Text>
                    <Text style = {styles.text}>{affordability}</Text>
                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
   container:{
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,

   },
   image_view:{
    width: 350,
    height: 250,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignSelf: 'center'
   },
   image:{
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,    
    resizeMode: 'contain'
   },
   body_view:{
    backgroundColor: "white",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
   },
   title:{
    fontSize: 24,
    fontWeight: "700",
    marginTop: 10,
    alignSelf: 'center'

   },
   text_view:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 15,
    backgroundColor: "white",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
   },
   text:{
    fontSize: 18,
    fontStyle:'normal',
    marginBottom: 10

   }


})

export default CategoryDetailCard;