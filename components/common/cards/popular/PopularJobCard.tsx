import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { checkImageURL } from '../../../../utils';
import { useRouter } from "expo-router";

const PopularJobCard = ({ item }: any) => {
  const { internship_name, company_name, img_link, location, stipend } = item;
  const router = useRouter();

  return (
    <TouchableOpacity style={styles.cardContainer}>
      <TouchableOpacity style={styles.imageContainer}>
        <Image
          source={{
            uri: checkImageURL(img_link)
              ? img_link
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
          }}
          style={styles.image}
          resizeMode='contain'
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.internshipText} numberOfLines={1}>
          {internship_name}
        </Text>
        <Text style={styles.companyText} numberOfLines={1}>
          {company_name}
        </Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.detailText} numberOfLines={1}>{location}</Text>
        <Text style={styles.detailText} numberOfLines={1}>{stipend}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 200,
    backgroundColor: '#4873d1',
    padding: 16,
    borderRadius: 12,
    justifyContent: 'space-between',
    shadowColor: '#ffffff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginRight: 8,
  },
  imageContainer: {
    width: 56,
    height: 56,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginBottom: 8,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 12,
  },
  textContainer: {
    flexDirection: 'column',
    gap: 4,
  },
  internshipText: {
    fontWeight: '500',
    fontSize: 16,
    color: 'white',
    marginTop: 8,
  },
  companyText: {
    fontWeight: '500',
    fontSize: 12,
    color: '#f4f4f4',
    marginTop: 8,
  },
  detailsContainer: {
    marginTop: 16,
    width: '100%',
  },
  detailText: {
    color: '#e0e0e0',
  },
});

export default PopularJobCard;