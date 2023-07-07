import {collection, getDocs, getFirestore } from 'firebase/firestore'

const getItems = async () => {
    const db = getFirestore()
    const itemsRef = collection(db, "items")
    const snapshot = await getDocs(itemsRef)

    return snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
}

export { getItems }