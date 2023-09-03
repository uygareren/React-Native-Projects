import { StatusBar } from 'expo-status-bar';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import HomeBlogCard from "../components/HomeBlogCard"
import { RootState } from '../redux/Store'; // Adjust the import path based on your project structure
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

interface Post {
    id: string;
    title: string;
    content: string;
  }

interface HomepageScreenProps {
    
    id: string;
    title: string;
    content: string;
      
}

const HomepageScreen: React.FC<HomepageScreenProps> = ({}) => {

    const navigation = useNavigation();

    const posts = useSelector((state: RootState) => state.blog.posts);

    useEffect(() => {
        console.log(posts);
    }, [posts]);

    // renderItem function to render individual blog post items
    const renderItem = ({ item }: { item: Post }) => (
        <HomeBlogCard navigation={navigation} title={item.title} id={item.id} />
    );

    return (
        <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        />
    );

}


const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})

export default HomepageScreen;
