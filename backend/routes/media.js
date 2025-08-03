import { Router } from 'express';
import Media from '../models/media.model.js';

const router = Router();

// Get all media
router.get('/', async (req, res) => {
  try {
    const media = await Media.find();
    res.json(media);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Add new media
router.post('/add', async (req, res) => {
  try {
    const newMedia = new Media(req.body);
    await newMedia.save();
    res.json('Media added!');
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;