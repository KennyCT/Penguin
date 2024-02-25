import { json, urlencoded } from 'body-parser';
import express, { request } from 'express';
import penguinRoutes from './routes/penguinRte';
import connection from './database/config';

const app = express();

app.use(json());

app.use(urlencoded({extended: true}))

app.use("/penguin", penguinRoutes);

app.use((
    error: Error,
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
) => {
    response.status(500).json({ message: error.message });
});

connection.sync().then(() => {
    console.log("Database synced successfully");
}).catch((error) => {
    console.log("Error", error)
})

app.listen(3000);