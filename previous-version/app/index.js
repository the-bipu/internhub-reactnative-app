import { useState } from "react";

import { View, ScrollView, SafeAreaView, Text, Image, Button, TouchableOpacity } from "react-native";
import { Stack, useRouter } from "expo-router";
import { useNavigation } from '@react-navigation/native'

import { icons, images } from '../constants';
import { Popularjobs, ScreenHeaderBtn, Welcome } from '../components';

const Home = () => {
    const navigation = useNavigation();
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("")

    const handlePress = () => {
        navigation.navigate('main');
    }

    return (
        <SafeAreaView className='flex-1 bg-[#ffffff] w-full h-full'>
            <Stack.Screen
                options={{
                    headerShadowVisible: false,
                    headerTitle: ""
                }}
            />

            <View className='w-full flex items-center mb-12'>
                <Text className='text-2xl font-bold text-[#0a0f17] mb-4'>Welcome to,</Text>
                <Image
                    source={require("../assets/images/InternHub.png")}
                    className="w-[170px] h-[26px] flex justify-center items-center"
                />
            </View>
            <View className='bg-white w-full p-4 flex items-center justify-center gap-4'>
                <Image
                    source={require("../assets/images/login.png")}
                    className="w-[355px] h-[365px] flex justify-center items-center m-2"
                />
            </View>
            <View className='w-full p-4 flex items-center mt-10'>
                <Text className='text-lg font-bold text-[#0a0f17] text-center mb-8'>Begin your internship journey now. Click 'Get Started' to explore our homepage.</Text>
                <TouchableOpacity
                    className='flex justify-start mb-10 bg-[#0a0f17] text-white rounded-full px-6 py-3'
                    onPress={handlePress}
                >
                    <Text className="text-xl font-bold text-center text-white">
                        Get Started
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Home;