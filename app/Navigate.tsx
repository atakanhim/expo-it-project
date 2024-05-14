import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from "@/app/contexts/AuthContext";
import { LoginScreen, Screen1, Screen2, HomeModal } from "./screens/index";
import { Ionicons } from "@expo/vector-icons";
import React from "react";


const AuthStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const AppTab = createBottomTabNavigator();

const AuthStackScreen = () => ( // loginscreende props gönderemeye çaklışrıken tiğpini degiştirdigim icin hat alıyorum
    <AuthStack.Navigator>
        <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
        {/* <AuthStack.Screen name="CreateUserScreen" component={CreateUserScreen} /> */}
        {/* Buraya diğer kimlik doğrulama ekranlarınızı ekleyebilirsiniz */}
    </AuthStack.Navigator>
);

const AppTabScreen = () => (
    <AppTab.Navigator initialRouteName="Profile" screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            let iconname: any;

            if (route.name === "HomeStackGroup") {
                iconname = (focused ? "home" : "home-outline");
            }
            else if (route.name === "Profile") {
                iconname = (focused ? "home" : "home-outline");
            }
            else if (route.name === "Discover") {
                iconname = (focused ? "home" : "home-outline");
            }
            return <Ionicons name={iconname} size={24} color={color} />
        },
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "gray"

    })}>

        <AppTab.Screen name="Profile" component={Screen1} />
        <AppTab.Screen name="HomeStackGroup" component={HomeStackGroup} options={{ headerShown: false, tabBarLabel: "Home" }} />
        {/* Buraya uygulamanın diğer ana ekranlarını ekleyebilirsiniz */}
    </AppTab.Navigator>
);
const HomeStackGroup = () => ( // loginscreende props gönderemeye çaklışrıken tiğpini degiştirdigim icin hat alıyorum
    <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={Screen2} />
        <HomeStack.Screen name="HomeModal" component={HomeModal} options={{ presentation: "modal", animation: "slide_from_bottom" }} initialParams={{ categories: null }} />
        {/* Buraya diğer kimlik doğrulama ekranlarınızı ekleyebilirsiniz */}
    </HomeStack.Navigator>
);

const Root: React.FC = () => {
    const { authState } = useAuth();

    return authState?.authenticated ? <AppTabScreen /> : <AuthStackScreen />;
};
const RootNavigator: React.FC = () => <NavigationContainer><Root /></NavigationContainer>

export default RootNavigator;