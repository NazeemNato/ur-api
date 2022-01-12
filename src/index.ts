import "dotenv/config"
import express from 'express';
import cors from 'cors';
import broker from "./routes/broker_route"

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api", broker)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
);