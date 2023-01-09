import { initializeApp } from "firebase/app";
import {getFirestore, addDoc, getDocs, getDoc, updateDoc, deleteDoc, collection, doc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "benihana-skate-store.firebaseapp.com",
  projectId: "benihana-skate-store",
  storageBucket: "benihana-skate-store.appspot.com",
  messagingSenderId: "665526221988",
  appId: "1:665526221988:web:caa939d13ab8c70764ba31"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore()


const loadDB = async () => {
    const promise = await fetch('./json/products.json')
    const products = await promise.json()
    products.forEach(async (prod) => {
        await addDoc(collection(db,"products"), { 
            model: prod.model,
            brand: prod.brand,
            idCategory: prod.idCategory,
            stock: prod.stock,
            price: prod.price,
            img: prod.img
        })
    })
}

const getProducts = async() => {
    const productos = await getDocs(collection(db, "products"))
    const items = productos.docs.map(prod => {
        return {...prod.data(), id: prod.id}
    })
    return items
}

const getProduct =  async (id) => {
    const product = await getDoc(doc(db, "products", id))
    const item = {...product.data(), id: product.id}
    return item
}

const updateProduct = async (id, info) => {
    const state = await updateDoc(doc(db,"products", id), info)
    return state
}

const deleteProduct = async(id) =>{
    const state = await deleteDoc(doc(db, "products", id))
    return state
}

const createPurchaseOrder = async (client, preTotal, fecha ) => {
    const purchaseOrder = await addDoc(collection(db, "purchaseOrder"),{
        nombreCompleto: client.nombre,
        email: client.email,
        dni: client.dni,
        direccion: client.direccion,
        celular: client.celular,
        fecha: fecha,
        precioTotal: preTotal
    })

    return purchaseOrder
}

const getPurchaseOrder =  async (id) => {
    const purchaseOrder = await getDoc(doc(db, "purchaseOrder", id))
    const item = {...purchaseOrder.data(), id: purchaseOrder.id}
    return item
}

export {loadDB, getProducts, getProduct, updateProduct, deleteProduct, createPurchaseOrder, getPurchaseOrder}