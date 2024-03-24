import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from "react-native";
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import { useRouter } from "expo-router";
import styles from "./popularjobs.style";
import { COLORS, SIZES } from "../../../constants";
import axios from "axios";

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
        const response = await axios.get("", {});
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
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <>
            {/* <FlatList>
              {data.map((item, index) => (
                <PopularJobCard
                  key={index} // Assuming each item has a unique identifier, replace 'index' with the actual identifier
                  item={item}
                  selectedJob={selectedJob}
                  handleCardPress={handleCardPress}
                />
              ))}
            </FlatList> */}
            <FlatList
              horizontal
              data={data}
              renderItem={({ item, index }) => (
                <PopularJobCard
                  key={index} // Assuming each item has a unique identifier, replace 'index' with the actual identifier
                  item={item}
                  selectedJob={selectedJob}
                  handleCardPress={handleCardPress}
                />
              )}
              keyExtractor={(item, index) => index.toString()} // Use index as key as we don't have unique identifiers
            />
            <Text>Hello</Text>
            {/* <Text style={styles.fullData}>{JSON.stringify(data.internships[0], null, 2)}</Text> */}
          </>
        )}
      </View>
    </View>
  );
};

export default Popularjobs;