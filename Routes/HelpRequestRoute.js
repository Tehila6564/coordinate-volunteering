const express = require('express');
const router = express.Router();


const HelpRequestrController = require('../Controllers/HelpRequestController');
router.get('/', (req, res) => {
    HelpRequestrController.getAll()
});

router.get('/:id', (req, res) => {
    HelpRequestrController.getById(req.params.id);
});




module.exports = router;
