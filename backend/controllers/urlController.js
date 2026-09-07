import { nanoid } from "nanoid";
import Url from "../models/Url.js";

// Create short URL
export const createShortUrl = async (req, res) => {
  try {
    const { originalUrl, customAlias, expiresInDays } = req.body;

    if (!originalUrl) {
      return res.status(400).json({ message: "originalUrl is required" });
    }

    const shortCode = customAlias || nanoid(7);

    const existing = await Url.findOne({ shortCode });
    if (existing) {
      return res.status(409).json({ message: "That alias is already taken" });
    }

    const expiresAt = expiresInDays
      ? new Date(Date.now() + expiresInDays * 24 * 60 * 60 * 1000)
      : null;

    const url = await Url.create({ originalUrl, shortCode, expiresAt });

    res.status(201).json(url);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all URLs
export const getAllUrls = async (req, res) => {
  try {
    const urls = await Url.find().sort({ createdAt: -1 });
    res.json(urls);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a URL permanently
export const deleteUrl = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Url.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Link not found" });
    }

    res.json({ message: "Link deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};