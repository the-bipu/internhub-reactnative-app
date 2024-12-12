import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';

import { useRouter } from 'expo-router';

import { icons, SIZES } from '../../../constants';

const data = [
  { title: 'Web Development', image: require("../../../assets/images/category/web-dev.jpg") },
  { title: 'Machine Learning', image: require("../../../assets/images/category/machine-learning.jpg") },
  { title: 'Data Science', image: require("../../../assets/images/category/data-science.jpg") },
  { title: 'Finance', image: require("../../../assets/images/category/finance.jpg") },
  { title: 'Marketing', image: require("../../../assets/images/category/marketing.jpg") },
  { title: 'App Development', image: require("../../../assets/images/category/app-dev.jpg") },
];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();

  return (
    <View className='flex items-center'>
      <View className='w-full'>
        <Text className=' font-normal text-xl text-[#444262]'>Hello Bipu,</Text>
        <Text className=' font-bold text-2xl text-[#312651] mt-1'>Find your perfect internship</Text>
      </View>

      <View className='flex items-center justify-center flex-row mt-4 h-12'>
        <View className='flex-1 bg-white border border-[#efefef] mr-2 justify-center items-center rounded-md h-full shadow-md'>
          <TextInput
            className='font-normal w-full h-full px-4'
            value={searchTerm}
            onChange={(text) => setSearchTerm(text)}
            placeholder='What are you looking for?'
          />
        </View>

        <TouchableOpacity className='w-12 h-full bg-[#4873d1] rounded-md flex justify-center items-center' onPress={handleClick}>
          <Image
            source={require("../../../assets/images/search.png")}
            resizeMode='contain'
            className='w-1/2 h-1/2' />
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsVerticalScrollIndicator={false} className='w-full h-auto mt-4'>
        {data.map((item, index) => (
          <TouchableOpacity key={index} className=' w-24 h-20 flex items-center justify-center relative text-white font-bold rounded-xl mr-2 shadow'>
            <Image
              source={item.image}
              resizeMode='cover'
              className='w-full h-full rounded-xl' />
            <View className='w-full h-full bg-[#0000004e] rounded-xl absolute' />
            <Text className='w-11/12 absolute bottom-1 right-2 text-white text-right font-bold text-xs'>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

    </View>
  )
}

export default Welcome