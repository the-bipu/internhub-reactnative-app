import { Stack, useNavigation, useRouter } from "expo-router";
import { useState } from "react";
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View, StyleSheet } from "react-native";

import Welcome from '../../components/home/welcome/Welcome';
import Featuredjobs from "../../components/home/featured/Featuredjobs";
import Popularjobs from "../../components/home/popular/Popularjobs";

export default function Explore() {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");
    const [activebar, setActivebar] = useState(false);

    const handleNavClick = () => {
        setActivebar(!activebar);
    };

    const handlePress = () => {
        router.push("/");
    };

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen
                options={{
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <TouchableOpacity onPress={handleNavClick} style={styles.headerButton}>
                            <Image source={require("../../assets/images/bar.png")} style={styles.icon} />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <View style={styles.headerButton}>
                            <Image source={require("../../assets/images/bipu.jpg")} style={styles.profileImage} />
                        </View>
                    ),
                    headerTitle: "",
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Welcome
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                    />
                    <Featuredjobs />
                    <Popularjobs />
                </View>
            </ScrollView>

            {activebar && (
                <View style={styles.overlay}>
                    <View style={styles.sidebar}>
                        <Text style={styles.sidebarText}>Internship</Text>
                        <Text style={styles.sidebarText}>Contact</Text>
                        <Text style={styles.sidebarText}>FAQs</Text>
                        <TouchableOpacity style={styles.button} onPress={handlePress}>
                            <Text style={styles.buttonText}>Get Started</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FAFAFC",
        height: "100%",
    },
    headerButton: {
        width: 40,
        height: 40,
        backgroundColor: "#E5E7EB",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },
    icon: {
        width: 28,
        height: 28,
    },
    profileImage: {
        width: 36,
        height: 36,
        borderRadius: 8,
    },
    scrollView: {
        width: "100%",
        height: "auto",
    },
    contentContainer: {
        padding: 16,
    },
    overlay: {
        width: "100%",
        height: "100%",
        position: "absolute",
        backgroundColor: "transparent",
    },
    sidebar: {
        backgroundColor: "white",
        width: "70%",
        height: "100%",
        padding: 16,
    },
    sidebarText: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    button: {
        justifyContent: "center",
        backgroundColor: "#0a0f17",
        borderRadius: 25,
        paddingVertical: 12,
        paddingHorizontal: 24,
        marginTop: 40,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
    },
});