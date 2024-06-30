import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";



const client = new pg.Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "Admin@123",
    database: "test1",
});

client.connect().then(() => {
    console.log("DB connceted");
})
    .catch((err) => {
        console.log(err)
    })
const db = drizzle(client);

export default db
