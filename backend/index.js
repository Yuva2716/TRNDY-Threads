import express from 'express';
import cors from 'cors'
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv'


const app = express()

// Middleware configuration
app.use(cors())
app.use(express.static('public'));
app.use(express.json({limit:'10mb'}))
app.use(express.urlencoded({limit:'10mb',extended:true}))

// Load environment variables
dotenv.config()

// Ensure environment variable is correctly loaded

const client = new MongoClient(process.env.MONGODB_CONNECTION_STRING)

let ProductCollection;
let CartCollection

const main = async () => {

        await client.connect().then(console.log("Successfully connect with Database")).catch(err=>console.log(err));
        ProductCollection = client.db("projectdatabase").collection('products')
        CartCollection = client.db("projectdatabase").collection("carts")        
}

app.get('/', async (req,res) => {
        try {
                const products = await ProductCollection.find().toArray()
                res.send({
                   status :200,
                   products  
                })           
             } catch (error) {
                 res.status(500).json({ message: "Error fetching products" });    
             }            
})


app.get("/products", async (req,res) => {
        try {
           const products = await ProductCollection.find().toArray()
           res.send({
              status :200,
              products  
           })           
        } catch (error) {
            res.status(500).json({ message: "Error fetching products" });    
        }        
})

app.post('/products' , async (req,res) => {
        const newProduct = req.body        
        const result = await ProductCollection.insertOne({newProduct})
        res.status(200).json(result)
})

app.get('/cart', async (req,res) => {
        const cartItems = await CartCollection.find().toArray()
        res.status(200).json(cartItems)     
})

app.post('/cart', async (req,res) => {
        const cartItem = req.body
        const result = await CartCollection.insertOne(cartItem)
        res.status(200).json(result)
})

app.put("/cart/:id",async (req,res) => {
        const {id} = req.params
        const updatedCartItem = req.body
        const result = await CartCollection.updateOne(
            {_id:new ObjectId(id)},
            {$set:updatedCartItem}    
        )
        res.status(200).json(result)
})

app.delete("/cart/:id",async (req,res) => {
        const {id} = req.params
        const result = await CartCollection.deleteOne({_id: new ObjectId(id)})
        res.status(200).json(result)
})

app.delete("/cart",async (req,res) => {
        const result = await CartCollection.deleteMany({})
        res.status(200).json(result)
})

const startedServer = async () => {
        await main()
        app.listen(5000, ()=>{
                console.log('listening on PORT 5000')
        })
}
startedServer()