import { useState } from "react";

import { View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { icons, images } from '../constants';
import { Popularjobs, ScreenHeaderBtn, Welcome } from '../components';

const Home = () => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("")

    return (
        <SafeAreaView className='flex bg-[#FAFAFC]'>
            <Stack.Screen
                options={{
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" className='bg-[#83829A] text-white' />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
                    ),
                    headerTitle: ""
                }}
                className='bg-[#FAFAFC]'
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View className='flex-1 p-4'>

                    <Welcome
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        handleClick={() => {
                            if (searchTerm) {
                                router.push(`/search/${searchTerm}`)
                            }
                        }}
                    />
                    <Popularjobs />
                    <Popularjobs />
                    <Popularjobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;