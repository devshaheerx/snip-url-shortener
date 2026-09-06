import express from "express";
import {
  createShortUrl,
  getAllUrls,
  hideUrl,
} from "../controllers/urlController.js";

const router = express.Router();

router.post("/", createShortUrl);
router.get("/", getAllUrls);
router.patch("/:id/hide", hideUrl);

export default router;
