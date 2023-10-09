import React, { useState } from 'react';
import { View, Text, Pressable, FlatList, ActivityInd, Pressableicator, ScrollView, } from 'react-native';
import { useRouter } from 'expo-router';

import styles from './popularjobs.style';
import { COLORS, SIZES } from '../../../constants';

import { PopularJobCard } from '../../common/cards/popular/PopularJobCard';

const Popularjobs = () => {
  const router = useRouter();
  const isLoading = false;
  const error = false;
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <Pressable>
          <Text style={styles.headerBtn}>Show All</Text>
        </Pressable>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <ScrollView
            data = {[1, 2, 3, 4, 5]}
            renderItem={({ item }) => (
              <PopularJobCard item={item} />
            )}
            keyExtractor={item => item.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
          
          // <FlatList
          //   data = {[1, 2, 3, 4, 5]}
          //   renderItem={({ item }) => (
          //     <PopularJobCard item={item} />
          //   )}
          //   keyExtractor={item => item.job_id}
          //   contentContainerStyle={{ columnGap: SIZES.medium }}
          //   horizontal
          // />

          // <FlatList
          //   data={[1, 2, 3, 4, 5]}
          //   renderItem={({ item }) => (
          //     <PopularJobCard item={item} />
          //   )}
          //   keyExtractor={item => item.toString()} // Assuming items are numbers
          //   contentContainerStyle={{ paddingHorizontal: SIZES.medium }}
          //   horizontal
          // />

        )}
      </View>
    </View>
  );
};

export default Popularjobs;