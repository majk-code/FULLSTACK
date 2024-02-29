import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import Deck from './models/Deck'
const app = express();
const port = 5000;

app.use(express.json())

app.post('/decks', async (req: Request,res: Response) => {
    console.log(req.body)
    const newDeck = new Deck({
        title: req.body.title
    });
    const createdDeck = await newDeck.save()
    res.json(createdDeck)
})

const db = mongoose.connect('mongodb+srv://michalpukalom1kel:gDGsp0N4ofHAMPU1@app.0svzuoj.mongodb.net/?retryWrites=true&w=majority&appName=APP')

app.listen(port)
console.log(`server działa na porcie ${port}`)
