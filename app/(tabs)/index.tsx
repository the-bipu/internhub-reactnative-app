import { Image, StyleSheet, SafeAreaView, View, TouchableOpacity, Text } from 'react-native';
import { Stack, useNavigation, useRouter } from 'expo-router';
import { useState } from 'react';

export default function HomeScreen() {
  const navigation = useNavigation();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const handlePress = () => {
    router.push('/explore');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShadowVisible: false, headerTitle: "" }} />

      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Welcome to,</Text>
        <Image source={require("../../assets/images/InternHub.png")} style={styles.logo} />
      </View>

      <View style={styles.imageContainer}>
        <Image source={require("../../assets/images/login.png")} style={styles.loginImage} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.descriptionText}>
          Begin your internship journey now. Click 'Get Started' to explore our homepage.
        </Text>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    width: '100%',
    height: '100%',
  },
  headerContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 12,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0a0f17',
    marginBottom: 4,
  },
  logo: {
    width: 170,
    height: 26,
  },
  imageContainer: {
    backgroundColor: 'white',
    width: '100%',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginImage: {
    width: 355,
    height: 365,
    margin: 2,
  },
  textContainer: {
    width: '100%',
    padding: 16,
    alignItems: 'center',
    marginTop: 40,
  },
  descriptionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    justifyContent: 'center',
    backgroundColor: '#0a0f17',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});