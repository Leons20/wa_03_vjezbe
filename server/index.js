import express from "express";
import proizvodiRouter from "./routes/proizvodi.js";
import narudzbeRouter from "./routes/narudzbe.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use('/proizvodi', proizvodiRouter);
app.use('/narudzbe', narudzbeRouter);
app.use(cors());

let PORT = 3000;

app.get('/', (req, res) => {
    res.status(200).json({ message: "OK" });
});

app.listen(PORT, error => {
    if(error){
        console.error(`Greška prilikom pokretanja poslužitelja: ${error.message}`);
    } else{
        console.log(`Server poktenut na http://localhost:${PORT}`);
    }
});