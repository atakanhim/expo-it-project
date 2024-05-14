import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useAuth } from '@/app/contexts/AuthContext'
import { db } from "@/db/FirebaseConfig"
import {
    DocumentChange,
    addDoc,
    collection,
    getDocs,
    onSnapshot,
} from "firebase/firestore";
import uuid from 'react-native-uuid';

const addDataToFirestore = async (data: any) => {
    try {
        const docRef = await addDoc(collection(db, "users"), {
            __id: uuid.v4(),
            employess: [{}],
            born: 1815
        });

        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};
const listele = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });
}
const update = async () => {

}
const Screen1 = () => {
    const { onLogout } = useAuth();
    const logout = async () => await onLogout!()
    return (
        <View>
            <Pressable onPress={logout}>
                <Text>buton</Text>
            </Pressable>


            <Pressable onPress={addDataToFirestore}>
                <Text className='border border-cyan-800 p-10'>Veri Ekle</Text>
            </Pressable>
            <Pressable onPress={listele}>
                <Text className='border border-cyan-800 p-10'>Veri Ekle</Text>
            </Pressable>
            <Text className='text-xl text-center'>Screen1</Text>
        </View>
    )
}

export default Screen1