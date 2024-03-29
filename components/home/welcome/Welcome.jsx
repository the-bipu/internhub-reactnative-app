import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';

import { useRouter } from 'expo-router';

import { icons, SIZES } from '../../../constants';
const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  // const [activeJobType, setActiveJobType] = useState('Full-time');

  return (
    <View>
      <View className='w-full'>
        <Text className=' font-normal text-xl text-[#444262]'>Hello Bipu</Text>
        <Text className=' font-bold text-2xl text-[#312651] mt-1'>Find your perfect internship</Text>
      </View>

      <View className='flex items-center justify-center flex-row mt-4 h-12'>
        <View className='flex-1 bg-white mr-2 justify-center items-center rounded-md h-full'>
          <TextInput
            className='font-normal w-full h-full px-4'
            value={searchTerm}
            onChange={(text) => setSearchTerm(text)}
            placeholder='What are you looking for?'
          />
        </View>

        <TouchableOpacity className='w-12 h-full bg-[#FF7754] rounded-md flex justify-center items-center' onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode='contain'
            className='w-1/2 h-1/2'>
          </Image>
        </TouchableOpacity>
      </View>

      {/* <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`)
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small}}
          horizontal
        />
      </View> */}

      {/* 
        tabsContainer: {
            width: "100%",
            marginTop: SIZES.medium,
          },
          tab: (activeJobType, item) => ({
            paddingVertical: SIZES.small / 2,
            paddingHorizontal: SIZES.small,
            borderRadius: SIZES.medium,
            borderWidth: 1,
            borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
          }),
          tabText: (activeJobType, item) => ({
            fontFamily: FONT.medium,
            color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
          }),
      */}

    </View>
  )
}

export default Welcome