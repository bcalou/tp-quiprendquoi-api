const Party = require('../models/party');
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  return new Party(req.body)
    .save()
    .then((party) => res.send(party))
    .catch((err) => res.send(err));
});

router.get('/:id', (req, res) => {
  return Party.findById(req.params.id)
    .then((party) => res.send(party))
    .catch(() => res.status(404).send({ message: 'No party found' }));
});

router.patch('/:id', (req, res) => {
  if (!Object.keys(req.body).length) {
    return res.status(400).send({ message: 'No updates provided' });
  }

  return Party.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.send({ message: 'Party updated' }))
    .catch(() => res.status(404).send({ message: 'No party found' }));
});

router.delete('/:id', (req, res) => {
  return Party.findByIdAndDelete(req.params.id)
    .then(() => res.send({ message: 'Party deleted' }))
    .catch(() => res.status(404).send({ message: 'No party found' }));
});

module.exports = router;
