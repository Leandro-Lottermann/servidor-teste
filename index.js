const express = require('express'); //back end importa assim
const { MongoClient, ServerApiVersion } = require("mongodb")

const app = express();

const PORT = 8080;




const uri = "mongodb+srv://leandrinho:cafezinho@nomequeeuquero.y5c3b8d.mongodb.net/?retryWrites=true&w=majority";


const client = new MongoClient( uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
} ) //inicio a connection

const collection = client.db("LojinhaWeb").collection("Produto")


app.get("/", (req, res) => {
    res.send("tico")
})

app.get("/produtos", async (req, res) => {
    
    console.log('chamou')
    const produtos = await collection.find().toArray()
    res.send(produtos).end()
})

app.get("/fechar", (req, res) => {
    res.send("Fechou")
    client.close()
})


app.listen(PORT, () => {
    console.log("servidor esta abrido")
}) //fica ouvindo naquela porta.


