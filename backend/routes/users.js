import { Router } from 'express';
import User from '../models/user.model.js';

const router = Router();

router.get('/', (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/add', (req, res) => {
  const { username, password, email } = req.body;
  const newUser = new User({ username, password, email });

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

export default router;