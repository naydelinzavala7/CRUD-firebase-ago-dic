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
        res.render('index', { contacts })
    } catch(error) {
        console.log('Error', error)
    }
})  


router.post('/new-contact', async(req, res) => {
    const { firstname, lastname, email, phone } = req.body
    await db.collection('contacts').add({
        firstname,
        lastname,
        email,
        phone
    })
    res.redirect('/')
})

router.get('/delete-contact/:id', async(req, res) => {
    await db.collection('contacts').doc(req.params.id).delete()
    res.redirect('/')
})

router.get('/edit-contact/:id', async(req,res) =>{
    const doc = await db.collection('contacts').doc(req.params.id).get()
    res.render('index', { contact: {
        id: doc.id,
        ...doc.data()
    }}) 
})

router.post('/update-contact/:id', async(req,res) => {
    const { firstname, lastname, email, phone } = req.body
    const id = req.params
    await db.collection('contacts').doc(id).update({
        firstname, 
        lastname, 
        email, 
        phone
    })
    res.redirect('/')
})

module.exports = router
//linea 26 maestro 