import { useState } from "react";

import { View, ScrollView, SafeAreaView, Image, Text, TouchableOpacity } from "react-native";
import { Stack, useRouter } from "expo-router";
import { useNavigation } from '@react-navigation/native'

import { Popularjobs, Welcome } from '../components';

import { RootStackParamList } from '../constants/types'; // Import your type
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

const MainPage = () => {
    const router = useRouter();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [searchTerm, setSearchTerm] = useState("");
    const [activebar, setActivebar] = useState(false);

    const handleNavClick = () => {
        setActivebar(!activebar);
    }

    const handlePress = () => {
        navigation.navigate('login');
    }

    return (
        <SafeAreaView className='flex bg-[#FAFAFC] h-full'>
            <Stack.Screen
                options={{
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <TouchableOpacity onPress={handleNavClick} className='w-10 h-10 bg-gray-200 hover:bg-gray-500 flex items-center justify-center rounded-md'>
                            <Image
                                source={require("../assets/images/bar.png")}
                                className=" w-7 h-7 flex justify-center items-center"
                            />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <View className='w-10 h-10 bg-gray-200 flex items-center justify-center rounded-md'>
                            <Image
                                source={require("../assets/images/bipu.jpg")}
                                className=" w-9 h-9 flex justify-center items-center rounded-md"
                            />
                        </View>
                    ),
                    headerTitle: ""
                }}
                // className='bg-[#FAFAFC]'
            />

            <ScrollView showsVerticalScrollIndicator={false} className='w-full h-auto'>
                <View className='p-4'>
                    {/* <Welcome
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        handleClick={() => {
                            if (searchTerm) {
                                router.push(`/search/${searchTerm}`)
                            }
                        }}
                    /> */}
                </View>
            </ScrollView>

            {activebar && (
                <View className='w-full h-full absolute bg-transparent'>
                    <View className='bg-white w-[70%] h-full p-4'>
                        <Text className='text-xl font-bold'>Internship</Text>
                        <Text className='text-xl font-bold'>Contact</Text>
                        <Text className='text-xl font-bold'>FAQs</Text>
                        <TouchableOpacity
                            className='flex justify-start mb-10 bg-[#0a0f17] text-white rounded-full px-6 py-3 mt-10'
                            onPress={handlePress}
                        >
                            <Text className="text-xl font-bold text-center text-white">
                                Get Started
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </SafeAreaView>
    )
}

export default MainPage;