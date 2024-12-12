import React, { useEffect, useState } from 'react';
import { Text, View, SafeAreaView, ActivityIndicator, Image, TouchableOpacity, ScrollView, Button } from 'react-native';
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

  // Disable apply button if apply_by date is in the past
  const today = new Date();
  const year = today.getFullYear();
  const applyByDate = new Date(pageData?.apply_by);
  applyByDate.setFullYear(year);

  const formattedApplyByDate = applyByDate.toISOString().split('T')[0];

  const isApplyButtonDisabled = today > applyByDate;

  // const newAboutCompany = pageData?.about_company.replace(/(\d+\.) /g, "\n$1 ");
  const newAboutCompany = pageData?.about_company ? pageData.about_company.replace(/\./g, "\n").replace(/\:/g, ":\n") : '';
  const aboutCompanyArray = newAboutCompany ? newAboutCompany.split("\n") : [];

  const newMoreAbout = pageData?.more_about ? pageData.more_about.replace(/(\d+\.) /g, "\n$1 ") : '';
  const moreAboutArray = newMoreAbout ? newMoreAbout.split("\n") : [];

  const newWhoCanApply = pageData?.who_can_apply ? pageData.who_can_apply.replace(/(\d+\.) /g, "\n$1 ") : '';
  const whoCanApplyArray = newWhoCanApply ? newWhoCanApply.split("\n") : [];


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
        <View className='w-full h-auto relative'>
          {pageData ? (
            <>
              <ScrollView className='w-full h-auto'>
                <View className='flex items-center justify-center w-full h-auto'>
                  <View className='flex flex-col gap-2 bg-[#fff] px-4 pb-4 pt-3 w-full'>
                    <View className='flex flex-col w-full'>
                      <Text className=' font-bold text-lg'>
                        {pageData?.internship_name}
                      </Text>
                      <Text className=' font-medium text-sm' >
                        {pageData?.company_name}
                      </Text>
                    </View>
                    <View className=' flex flex-row w-full h-auto'>
                      <TouchableOpacity className=' w-16 h-16 bg-[#fff] flex items-start justify-center rounded-xl mb-2 mr-3'>
                        <Image
                          source={{
                            uri: checkImageURL(pageData?.img_link)
                              ? pageData?.img_link
                              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
                          }}
                          className='w-16 h-16 rounded-xl'
                          resizeMode='contain'
                        />
                      </TouchableOpacity>
                      <View className='flex flex-col'>
                        <Text className=' font-bold text-base'>{pageData?.location}</Text>
                        <Text className=' font-bold text-sm'>{pageData?.duration}</Text>
                      </View>
                    </View>
                  </View>

                  <View className=' w-full flex flex-col px-4 py-4 bg-[#fff] border-t border-t-[#dcdcdc]'>
                    <Text>{pageData?.stipend}</Text>
                    <Text>{pageData?.internship_url}</Text>
                    <Text>{pageData?.apply_by}</Text>

                    {aboutCompanyArray.map((paragraph, index) => (
                      <Text key={index}>{paragraph}</Text>
                    ))}
                  </View>

                  <View className=' w-full flex flex-col px-4 py-4 bg-[#fff] border-t border-t-[#dcdcdc]'>
                    {moreAboutArray.map((paragraph, index) => (
                      <Text key={index}>{paragraph}</Text>
                    ))}
                  </View>

                  {pageData?.skills.length - 3 > 0 ? (
                    <View className='flex flex-col gap-4 mt-4'>
                      <Text className='text-black text-xl font-bold'>Skills Needed</Text>
                      <View className='flex flex-row flex-wrap gap-6'>
                        {internshipDetail.skills.map((skill, index) => {
                          const excludedSkills = ['letter of recommendation', 'certificate', 'flexible work hours', 'informal dress code', 'job offer'];
                          if (!excludedSkills.includes(skill.toLowerCase())) {
                            return (
                              <View key={index} className=''>
                                {skill}
                              </View>
                            );
                          }
                          return null;
                        })}
                      </View>
                    </View>
                  ) : (
                    <></>
                  )}

                  <View className=' w-full flex flex-col px-4 py-4 pb-16 bg-[#fff] border-t border-t-[#dcdcdc]'>
                    {whoCanApplyArray.map((paragraph, index) => (
                      <Text key={index}>{paragraph}</Text>
                    ))}
                  </View>

                </View>
              </ScrollView>
              <View className=' absolute flex bottom-0 bg-white w-full h-12 items-center justify-center border'>
                <TouchableOpacity>
                  <Text>Apply Now</Text>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <Text>No data available</Text>
          )}
        </View>
      )}
    </SafeAreaView>
  );
};

export default JobDetails;
