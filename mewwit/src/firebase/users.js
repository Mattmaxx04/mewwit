import { app } from "./index.js";
import { collection, addDoc, doc, deleteDoc, onSnapshot, getDoc, getFirestore } from "firebase/firestore";
import user from '../store/profile.js'

const db = getFirestore(app)
const userRef = collection(db, 'users')

const addUser = (user)=>{
    addDoc(userRef, user)
}

export { addUser }