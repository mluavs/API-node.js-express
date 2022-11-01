const express = require('express');
const app = express();
const data = require('./data.json')

//verbos http
//GET = responsável por receber dados de um resource 
//POST = enviar dados ou informações para serem processados por um resource 
//PUT = atualizar os dados de um resource 
//DELETE = vai deletar um resource 

//http://localhost:3000/clients (esse clients ali no final é o resource, então o GET, o POST, o PUT e o DELETE se referem a ele)

app.use(express.json());

app.get("/clients", function(req, res){
    res.json(data);
})

app.get("/clients/:id", function(req, res){
    const { id } = req.params
    const cliente = data.find(clie => clie.id == id)

    if(!cliente) return res.status(404).json();
    
    res.json(cliente)

});


app.post("/clients", function(req, res){
    const { name, email } = req.body;

    //salvar

    res.json({ name, email })
})



app.put("/clients/:id", function(req, res){

    const { id } = req.params
    const cliente = data.find(clie => clie.id == id)

    if(!cliente) return res.status(404).json();
    
    const { name } = req.body;

    cliente.name = name;

    res.json(cliente)

})
app.delete("/clients/:id", function(req, res){
    const { id } = req.params
    const clientesFiltered = data.filter(client => client.id != id)

    res.json(clientesFiltered)


})

app.listen(3000, function () {
    console.log('server is running');
})
