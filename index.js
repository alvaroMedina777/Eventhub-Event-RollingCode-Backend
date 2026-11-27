import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { dbConnect } from "./src/config/database.js";
import authRoutes from "./src/routes/auth.routes.js";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

app.get("/api/auth", (req, res) => {
    res.json({ message: "API is working" });
});

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5500;

await dbConnect().catch((error) => {
    console.error("No fue posible iniciar el servidor sin MongoDB", error.message);
    process.exit(1);
});

app.listen(PORT, () => console.log(`✅ Server online en puerto ${PORT}`));
