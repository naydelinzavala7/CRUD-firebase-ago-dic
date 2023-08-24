const app = require('./app')
//cuando tienes que esperar a que te de una respuesta el servidor
//await es que debes esperar
const main = async() => {
    app.listen(3000);
    console.log('Server Port: ', 3000)
}

main()
