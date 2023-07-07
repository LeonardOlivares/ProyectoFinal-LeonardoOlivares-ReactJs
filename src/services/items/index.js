/* import { collection, getDocs, getFirestore, query, where, doc, getDoc } from 'firebase/firestore'

const getItem = async (id) => {
    const db = getFirestore()
    const itemRef = doc(db, "items", id)
    
    try {
        const snapshot = await getDoc(itemRef)
        if (snapshot.exists()) {
            return { id: snapshot.id, ...snapshot.data() }
        }
    } catch (err) {
        return err
    } finally {
        console.log("finally")
    }
    return null
}

const getItems = async (category) => {
    const db = getFirestore()
    const itemsRef = collection(db, "items")
    let q

    if (category) {
        q = query(itemsRef, where("categoria", "==", category))
        try {
            const snapshot = await getDocs(q)
            if (snapshot.size > 0) {
                return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            }
            return []
        } catch (err) {
            return err
        } finally {
            console.log("finally")
        }
    }
} */

 /*    const itemsRef = collection(db, "items")
    const snapshot = await getDocs(itemsRef)

    return snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})) */


/* export const getItemByCategory = (category) => {
    return new Promise((resolve) => {
        resolve(products.filter((prod) => prod.categoria === category));
    }) */

/* export { getItem ,getItems } */