const { db } = require('../firebase')
//para que detecte las peticiones
const { Router } = require('express')
const router = Router()

router.get('/', async(req, res) => {
    //intente lo que esta dentro del try, si truena te muestra lo que sucedio y ya no truena por completo
    try {
        //indicaciones ejemp. query busqueda
        //Todo lo que se obtenga se guradara en la variable querySnapshot
        const querySnapshot = await db.collection(contacts).get()
        //map genera 
        const contacts = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }))
    } catch(error){
        console.log('Error', error)
    }
})  

//linea 26 maestro 