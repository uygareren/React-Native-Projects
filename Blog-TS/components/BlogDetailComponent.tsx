import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

interface BlogDetailComponentProps{
    title: string,
    content: string
}

const BlogDetailComponent: React.FC<BlogDetailComponentProps> = ({title, content}) => {

    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>{title}</Text>
            <Text style = {styles.descpription}>{content}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width:"90%",
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 10,
        paddingVertical: 20
    },
    title:{
        fontSize: 24
    },
    descpription:{
        fontSize: 18
    }
})


export default BlogDetailComponent;