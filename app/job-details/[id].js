import React, { useEffect, useState } from 'react';
import { Text, View, SafeAreaView, ActivityIndicator, Image } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { checkImageURL } from '../../utils/index';
import axios from 'axios';

const JobDetails = () => {
  const params = useLocalSearchParams();
  const router = useRouter();
  const [pageData, setPageData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`https://internhub-ouzno5uqlbzy4urko5mvulxnh.vercel.app/internship/internship/detail/${params.id}`);
        setPageData(response.data);
      } catch (error) {
        setError("Error fetching data");
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (params.id) {
      fetchData().catch(error => console.error("Unhandled promise rejection:", error));
    }
  }, [params.id]);

  return (
    <SafeAreaView>
      {isLoading ? (
        <View>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : error ? (
        <View>
          <Text>{pageData}</Text>
          <Text>Error: {error}</Text>
        </View>
      ) : (
        <View className='flex items-center justify-center w-full h-auto mt-2'>
          {pageData ? (
            <View>
              <Image
                source={{
                  uri: checkImageURL(pageData?.img_link)
                    ? pageData?.img_link
                    : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
                }}
                className='w-12 h-12 rounded-xl'
                resizeMode='contain'
              />
              <Text>{pageData?.internship_name}</Text>
              <Text>{pageData?.stipend}</Text>
              <Text>{pageData?.internship_url}</Text>
              <Text>{pageData?.company_name}</Text>
              <Text>{pageData?.location}</Text>
              <Text>{pageData?.duration}</Text>
              <Text>{pageData?.apply_by}</Text>
              <Text>{pageData?.about_company}</Text>
              <Text>{pageData?.who_can_apply}</Text>
              <Text>{pageData?.more_about}</Text>
            </View>
          ) : (
            <Text>No data available</Text>
          )}
        </View>
      )}
    </SafeAreaView>
  );
};

export default JobDetails;
