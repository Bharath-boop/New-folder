import express from 'express'
import db from './db/db-conncet.js'
import { userSchema } from './db/schema.js'
import { eq } from 'drizzle-orm'
import { v4 } from 'uuid'
const app = express()
app.use(express.json())
app.post('/create', async (req, res) => {
    let id = v4()
    let [user] = await db.select().from(userSchema).where(eq(userSchema.email, req.body.email))
    if (!user) {
        await db.insert(userSchema).values({
            id,
            name: req.body.name,
            email: req.body.email,
        })
        let [user] = await db.select().from(userSchema).where(eq(userSchema.id, id))
        return res.send(user)
    }
    else {
        return res.send("alredy expt")
    }
})

app.get('/', async (req, res) => {
    try {
        let user = await db.select().from(userSchema)
        return res.send(user)
    } catch (error) {
        console.log(error);
    }
})

app.get('/:id', async (req, res) => {
    try {
        let { id } = req.params
        let user = await db.select().from(userSchema).where(eq(userSchema.id, id))
        if (user) {
            return res.send(user)
        }
        else {
            return res.send("NOT VALID ID")
        }
    } catch (err) {
        console.log(err);
    }
})

app.put('/:id', async (req, res) => {
    let { id } = req.params
    try {
        await db.update(userSchema).set({ name: req.body.name, email: req.body.email }).where(eq(userSchema.id, id))
        return res.send("UPDATE DATA")
    } catch (error) {
        console.log(err);
    }
})

app.delete("/:id", async (req, res) => {
    let { id } = req.params
    try {
        await db.delete(userSchema).where(eq(userSchema.id, id));
        return res.send("data deleted")
    } catch (error) {
        console.log(err);
    }
})


app.listen(8000, () => {
    console.log("SERVER IS RUNING 8000")
})