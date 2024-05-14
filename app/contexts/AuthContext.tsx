import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { GoogleSignin, GoogleSigninButton } from "@react-native-google-signin/google-signin";
import { User } from '@/constants/type';

// import { GoogleSignin } from '@react-native-google-signin/google-signin';
const key_id_token = process.env.EXPO_PUBLIC_USER_KEY ?? " ";


const AuthContext = createContext<AuthProps>({});


interface AuthProps {
    authState?: { user: User | null; authenticated: boolean | null };

    onGoogleLogin?: () => Promise<any>;
    onLogout?: () => Promise<any>;
}



// AuthProvider bileşeni ile context için bir value sağlıyoruz ve çocuk bileşenleri sarmalıyoruz
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [authState, setAuthState] = useState<{ user: User | null; authenticated: boolean | null }>({
        user: null,
        authenticated: null,
    });

    useEffect(() => {
        // Uygulama başladığında token kontrolü yapılıyor
        const bootstrapAsync = async () => {

            GoogleSignin.configure({
                webClientId: "1080126022086-r2bos620ehl5ftb01uu71cn839s3mrmv.apps.googleusercontent.com"
            });
            // AuthState güncelleniyor



        };

        bootstrapAsync();
    }, []);


    const onGoogleLogin = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const user = await GoogleSignin.signIn()
            await SecureStore.setItem(key_id_token, JSON.stringify(user.idToken));
            setAuthState({
                user: user.user,
                authenticated: true
            });
            return user.user;
        } catch (error) {
            console.log(error)
        }
    };


    const onLogout = async () => {
        // Kullanıcı çıkış işlemleri...
        await SecureStore.deleteItemAsync(key_id_token);
        setAuthState({
            user: null,
            authenticated: false
        });
        //google ile girdiyse -
        const isSignedIn = await GoogleSignin.isSignedIn();
        if (isSignedIn) {
            GoogleSignin.revokeAccess();
            GoogleSignin.signOut();
        }

    };

    return (
        <AuthContext.Provider value={{ authState, onLogout, onGoogleLogin }}>
            {children}
        </AuthContext.Provider>
    );
};

// Kendi custom hook'umuzu oluşturuyoruz
export const useAuth = () => useContext(AuthContext);