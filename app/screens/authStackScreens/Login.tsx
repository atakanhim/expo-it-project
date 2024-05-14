import { View, Text, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { GoogleSigninButton } from "@react-native-google-signin/google-signin"
import { User } from '@/constants/type'
import { useAuth } from '@/app/contexts/AuthContext'

const LoginScreen = () => {
    const [userInfo, setUserInfo] = useState<User | null>(null)
    const [error, setError] = useState<any>(null);
    const { onGoogleLogin, onLogout } = useAuth();
    const signin = async () => {
        try {
            setUserInfo(await onGoogleLogin!());
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View>
            <Text>Giriş yap </Text>
            <GoogleSigninButton size={GoogleSigninButton.Size.Wide} color={GoogleSigninButton.Color.Dark} onPress={signin} />



        </View>
    )
}

export default LoginScreen