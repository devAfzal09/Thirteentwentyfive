import express from "express";
import { getUsers } from "../services/user.services.js";

const router = express.Router();

router.get("/", getUsers);

export default router;
