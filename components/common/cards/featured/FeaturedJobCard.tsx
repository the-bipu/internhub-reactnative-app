import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { checkImageURL } from '../../../../utils';
import { useRouter } from 'expo-router';

const FeaturedJobCard = ({ item }: any) => {
    const { internship_name, company_name, img_link, location, heading_url, stipend } = item;
    const router = useRouter();

    return (
        <TouchableOpacity style={styles.card}>
            <View style={styles.logoContainer}>
                <Image
                    source={{
                        uri: checkImageURL(img_link)
                            ? img_link
                            : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg',
                    }}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.internshipTitle} numberOfLines={1}>
                    {internship_name}
                </Text>
                <Text style={styles.companyName} numberOfLines={1}>
                    {company_name}
                </Text>
            </View>

            <View style={styles.footer}>
                <Text style={styles.location} numberOfLines={1}>
                    {location}
                </Text>
                <Text style={styles.stipend} numberOfLines={1}>
                    {stipend}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 250,
        backgroundColor: '#4873d1',
        padding: 16,
        borderRadius: 12,
        justifyContent: 'space-between',
        shadowColor: '#fff',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        marginRight: 8,
    },
    logoContainer: {
        width: 56,
        height: 56,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginBottom: 8,
    },
    logo: {
        width: 48,
        height: 48,
        borderRadius: 12,
    },
    infoContainer: {
        marginBottom: 8,
    },
    internshipTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    companyName: {
        fontSize: 12,
        color: '#f4f4f4',
    },
    footer: {
        marginTop: 8,
    },
    location: {
        fontSize: 14,
        color: '#e0e0e0',
    },
    stipend: {
        fontSize: 14,
        color: '#e0e0e0',
    },
});

export default FeaturedJobCard;
