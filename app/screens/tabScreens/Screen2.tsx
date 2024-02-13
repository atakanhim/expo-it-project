import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Screen2 = () => {
    const navigation = useNavigation<any>();
    return (
        <View>
            <Pressable onPress={() => { navigation.navigate('HomeModal') }} >
                <Text>Screen2</Text>

            </Pressable>
        </View>
    )
}

export default Screen2