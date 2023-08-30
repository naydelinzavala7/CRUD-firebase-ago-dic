require('dotenv').config()
//const { app } = require('firebase-admin')
//Entorno de firabase admin inicialize app y applicationdefault
const  {initializeApp, applicationDefault } = require('firebase-admin/app')
//Para usar todo lo de firebase
const { getFirestore } = require('firebase-admin/firestore')

//el firestore sirve para consultar la base de datos
initializeApp({
    credential: applicationDefault()
})

const db = getFirestore()
module.exports  = {
    db
}