const express = require('express');
const router = express.Router();
const { createRequestClient, getRequestClients, getRequestClientById, updateRequestClient, deleteRequestClient } = require('../controllers/requestsClients');

router.post('/', createRequestClient)
router.get('/', getRequestClients)
router.get('/:id', getRequestClientById)
router.patch('/:id', updateRequestClient)
router.delete('/:id', deleteRequestClient)


module.exports = router;