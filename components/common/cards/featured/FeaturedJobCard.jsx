import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { checkImageURL } from '../../../../utils';
import { useRouter } from "expo-router";

const FeaturedJobCard = ({ item }) => {
    const { internship_name, img_link, location, heading_url, stipend } = item;
    const router = useRouter();

    const handleCardPress = () => {
        router.push(`/job-details/${heading_url}`);
    };

    return (
        <TouchableOpacity
            // style={styles.container(selectedJob, item)}
            className=' w-64 bg-[#3b3f80] p-4 rounded-xl flex justify-between shadow-lg shadow-white mr-2'
            onPress={() => handleCardPress()}
        >
            <TouchableOpacity className=' w-14 h-14 bg-white flex items-center justify-center rounded-xl'>
                <Image
                    source={{
                        uri: checkImageURL(img_link)
                            ? img_link
                            : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
                    }}
                    className='w-12 h-12 rounded-xl'
                    resizeMode='contain'
                />
            </TouchableOpacity>

            <Text className=' font-medium text-lg text-white mt-2' numberOfLines={1}>
                {internship_name}
            </Text>

            <View className='mt-8 w-full'>
                <Text className=' text-gray-100' numberOfLines={1}>{location}</Text>
                <Text className=' text-gray-100' numberOfLines={1}>{heading_url}</Text>
                <Text className=' text-gray-100' numberOfLines={1}>{stipend}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default FeaturedJobCard