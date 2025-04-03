import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, ScrollView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const data = [
  { title: 'Web Development', image: require("../../../assets/images/category/web-dev.jpg") },
  { title: 'Machine Learning', image: require("../../../assets/images/category/machine-learning.jpg") },
  { title: 'Data Science', image: require("../../../assets/images/category/data-science.jpg") },
  { title: 'Finance', image: require("../../../assets/images/category/finance.jpg") },
  { title: 'Marketing', image: require("../../../assets/images/category/marketing.jpg") },
  { title: 'App Development', image: require("../../../assets/images/category/app-dev.jpg") },
];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }: any) => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.greetingText}>Hello Bipu,</Text>
        <Text style={styles.headingText}>Find your perfect internship</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            value={searchTerm}
            onChangeText={setSearchTerm}
            placeholder='What are you looking for?'
          />
        </View>

        <TouchableOpacity style={styles.searchButton} onPress={handleClick}>
          <Image
            source={require("../../../assets/images/search.png")}
            resizeMode='contain'
            style={styles.searchIcon} />
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsVerticalScrollIndicator={false} style={styles.scrollContainer}>
        {data.map((item, index) => (
          <TouchableOpacity key={index} style={styles.categoryItem}>
            <Image source={item.image} resizeMode='cover' style={styles.categoryImage} />
            <View style={styles.overlay} />
            <Text style={styles.categoryText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  headerContainer: {
    width: '100%',
  },
  greetingText: {
    fontSize: 18,
    color: '#444262',
  },
  headingText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#312651',
    marginTop: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    height: 48,
  },
  inputWrapper: {
    flex: 1,
    backgroundColor: 'white',
    borderColor: '#efefef',
    borderWidth: 1,
    justifyContent: 'center',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  input: {
    fontSize: 16,
    paddingHorizontal: 16,
    height: '100%',
  },
  searchButton: {
    width: 48,
    height: '100%',
    backgroundColor: '#4873d1',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  scrollContainer: {
    width: '100%',
    marginTop: 16,
  },
  categoryItem: {
    width: 96,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#0000004e',
    borderRadius: 10,
  },
  categoryText: {
    position: 'absolute',
    bottom: 5,
    right: 8,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'right',
  },
});

export default Welcome;