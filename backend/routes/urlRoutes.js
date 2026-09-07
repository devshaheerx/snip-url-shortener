import express from "express";
import { createShortUrl, getAllUrls, deleteUrl } from "../controllers/urlController.js";

const router = express.Router();

router.post("/", createShortUrl);
router.get("/", getAllUrls);
router.delete("/:id", deleteUrl);

export default router;