import React from 'react'
import { View, Text , Image } from 'react-native';

import styles from './styles';

const Item = ({data}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{data.name}</Text>
            <View style={styles.box}>
                <Image source={data.image} style={styles.boxImage} />
            </View>
        </View>
    )
}

export default Item;