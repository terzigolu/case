import React from 'react';
import { ScrollView } from 'react-native';
import AppLayout from '~containers/AppLayout';
import FavoritesList from '~components/FavoritesList';

const ProfileScreen = () => {
  return (
    <AppLayout>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}>
        <FavoritesList />
      </ScrollView>
    </AppLayout>
  );
};

export default ProfileScreen;
