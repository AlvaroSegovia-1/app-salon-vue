import express from "express"

//Configurar la app
const app = express()

// Definir una ruta
app.get('/',(req, res)=>{

    const product = {
        id:1,
        price: 30,
        name: "laptop"
    }
 res.json(product)
})

// Definir puerto
const PORT = process.env.PORT || 4000

// Arrancar la app
app.listen(PORT, () => {
    console.log('El servidor se está ejeutando en el puerto:', PORT)
})
