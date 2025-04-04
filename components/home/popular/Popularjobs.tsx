import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import axios from "axios";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";

const Popularjobs = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedJob, setSelectedJob] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("https://internhub-ouzno5uqlbzy4urko5mvulxnh.vercel.app/internship/top6");
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
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Popular Internship</Text>
        <TouchableOpacity>
          <Text style={styles.showAll}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.listContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' style={styles.loadingIndicator} />
        ) : error ? (
          <Text style={styles.errorText}>Something went wrong</Text>
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

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#312651",
  },
  showAll: {
    fontSize: 16,
    fontWeight: "500",
    color: "#83829A",
  },
  listContainer: {
    marginTop: 16,
  },
  loadingIndicator: {
    color: "#312651",
  },
  errorText: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
  },
});

export default Popularjobs;