import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RouteProp } from '@react-navigation/native';

type ProfileScreenRouteProp = RouteProp<ParamList, 'ProfileScreen'>;

type ParamList = {
  ProfileScreen: {
    id: number; 
  };
};

interface ProfileScreenProps {
  route: ProfileScreenRouteProp; 
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ route }) => {
  const id = route.params.id;

  return (
    <View style={styles.container}>
      <Text>Profile Screen for ID: {id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileScreen;
