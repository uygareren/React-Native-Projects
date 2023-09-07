import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import ProfileComponent from '../components/ProfileComponent';
import userDataSet from '../data/data';
import { User } from '../types/types';

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
  const [data, setdata] = useState<User[]>([]);

  const id = route.params.id;

  useEffect(() => {
    const userData = userDataSet.filter((user) => user.id === id);
    setdata(userData);

    console.log(data)
  }, [id]);

  return (
    <View style={styles.container}>
      <ProfileComponent data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default ProfileScreen;
