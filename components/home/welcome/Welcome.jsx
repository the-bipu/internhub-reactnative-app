import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';

import { useRouter } from 'expo-router';

import { icons, SIZES } from '../../../constants';
const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  // const [activeJobType, setActiveJobType] = useState('Full-time');

  return (
    <View className='flex items-center'>
      <View className='w-full'>
        <Text className=' font-normal text-xl text-[#444262]'>Hello Bipu,</Text>
        <Text className=' font-bold text-2xl text-[#312651] mt-1'>Find your perfect internship</Text>
      </View>

      <View className='flex items-center justify-center flex-row mt-4 h-12'>
        <View className='flex-1 bg-white border border-white mr-2 justify-center items-center rounded-md h-full shadow-md'>
          <TextInput
            className='font-normal w-full h-full px-4'
            value={searchTerm}
            onChange={(text) => setSearchTerm(text)}
            placeholder='What are you looking for?'
          />
        </View>

        <TouchableOpacity className='w-12 h-12 bg-[#FF7754] rounded-md flex justify-center items-center' onPress={handleClick}>
          <Image
            source={require("../../../assets/images/search.png")}
            resizeMode='contain'
            className='w-1/2 h-1/2'>
          </Image>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsVerticalScrollIndicator={false} className='w-full h-auto mt-4'>
        <View className=' w-24 h-20 bg-[#3b3f80] text-white font-bold rounded-xl mr-2'>
          <Text>Web Development</Text>
        </View>
        <View className=' w-24 h-20 bg-[#3b3f80] text-white font-bold rounded-xl mr-2'>
          <Text>Machine Learning</Text>
        </View>
        <View className=' w-24 h-20 bg-[#3b3f80] text-white font-bold rounded-xl mr-2'>
          <Text>Data Science</Text>
        </View>
        <View className=' w-24 h-20 bg-[#3b3f80] text-white font-bold rounded-xl mr-2'>
          <Text>Finance</Text>
        </View>
        <View className=' w-24 h-20 bg-[#3b3f80] text-white font-bold rounded-xl mr-2'>
          <Text>Marketing</Text>
        </View>
        <View className=' w-24 h-20 bg-[#3b3f80] text-white font-bold rounded-xl mr-2'>
          <Text>App Development</Text>
        </View>
      </ScrollView>

    </View>
  )
}

export default Welcome