import React, { useEffect } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import BlogDetailComponent from '../components/BlogDetailComponent';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootState } from '../redux/Store';

interface BlogDetailScreenProps {}

type BlogDetailScreenRouteProp = RouteProp<{ BlogDetailScreen: { id: string } }, 'BlogDetailScreen'>;

const BlogDetailScreen: React.FC<BlogDetailScreenProps> = () => {

  const route = useRoute<BlogDetailScreenRouteProp>();
  const id = route.params?.id;

  const posts = useSelector((state: RootState) => state.blog.posts);

  const filteredPosts = posts.filter((post) => post.id === id);

  const renderPosts = ({ item }: { item: { id: string; title: string; content: string } }) => (
    <BlogDetailComponent title={item.title} content={item.content} />
  );

  return (
    <FlatList
      data={filteredPosts} 
      renderItem={renderPosts}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  postContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  postContent: {
    fontSize: 16,
  },
});

export default BlogDetailScreen;
