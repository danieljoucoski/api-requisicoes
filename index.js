const express = require("express");
const fs = require("fs");

const app = express ();
const port = 3000;

app.use(express.json());


//http://localhost:3000/saudacao?nome=bruno
app.get("/saudacao",(req,res)=>{
    const nome = req.query.nome;
    
    if(!nome){
        return res.status(404).json(
            {
                erro:"nome não foi informado"
            }
        )
    }

res.json(
    {
        mensagem: `saudacões ${nome}!`
    }
)


})
app.post("/imc",(req,res)=>{
    const {nome, idade, altura,peso}= req.body;
    if(!nome && !idade && !altura && !peso){
        return res.status(404).json({ erro: "dados incompleto" })
    }
const imc = peso / (altura * altura);

res.json({
    nome,
    idade,
    imc:imc.toFixed(2)
})

})

//finalzão
app.listen(port, () =>{
    console.log(`servidor rodando em http://localhost:${port}`)
})
