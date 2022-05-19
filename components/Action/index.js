import React from 'react'
import { View } from 'react-native';

import { DEFINE } from '../../contains'
import Button from './Button'
import styles from './styles';


const Action = ({data}) => {
    
    return (
        <View style={styles.container}>
            <Button data={data} status={DEFINE.REACTION_LIKE} />
            <Button data={data} status={DEFINE.REACTION_DISLIKE}/>
            <Button data={data} status={DEFINE.REACTION_LOVE}/>
        </View>
    )
}

export default Action;