import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import axios from "axios";

import PopularJobCard from '../../common/cards/popular/PopularJobCard';

const Popularjobs = (item) => {
  const { internship_name, img_link, location, heading_url, stipend } = item;

  const router = useRouter();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedJob, setSelectedJob] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("https://internhub-ouzno5uqlbzy4urko5mvulxnh.vercel.app/internship/top6", {});
        if (response.data && response.data.internships) {
          setData(response.data.internships);
        } else {
          setError("Data structure is not as expected");
        }
      } catch (error) {
        setError(error);
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.heading_url}`);
    setSelectedJob(item.heading_url);
  };

  return (
    <View className='mt-6'>
      <View className='flex flex-row justify-between items-center'>
        <Text className='text-xl font-bold text-[#312651]'>Popular Internship</Text>
        <TouchableOpacity>
          <Text className='font-medium text-base text-[#83829A]'>Show all</Text>
        </TouchableOpacity>
      </View>

      <View className='mt-4'>
        {isLoading ? (
          <ActivityIndicator size='large' className='text-[#312651]' />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
          horizontal
            data={data}
            renderItem={({ item, index }) => (
              <PopularJobCard
                key={index}
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;