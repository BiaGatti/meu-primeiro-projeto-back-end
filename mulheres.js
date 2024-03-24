const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Bianca Gatti',
        imagem: 'Link da imagem' ,
        minibio: 'Terapeuta do feminino'
    },
    {
        nome:'Leticia Guerra',
        imagem: 'Link da imagem',
        minibio: 'maquiadora'

    },
    {
        nome: "Regina Gatti",
        imagem: 'link da imagem',
        minibio: 'Massoterapeuta'
    }
        
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta () {
    console.log( 'Servidor criado e rodando na porta ', porta)
}
app.use(router.get('/mulheres',mostraMulheres))
app.listen(porta, mostraPorta)