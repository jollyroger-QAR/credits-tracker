const express = require('express');
const router = express.Router();
const creditController = require('../controllers/credit-controller');

// Set up initial route
router.get('/', creditController.display_credits);

// Post route
router.post('/credits', creditController.add_credits);

// Delete credit route
router.delete('/credits/:id', creditController.delete_credit);
router.post('/delete/:id', creditController.delete_credit);

module.exports = router;