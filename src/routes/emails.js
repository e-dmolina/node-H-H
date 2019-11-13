const { Router } = require('express');
const router = Router();
const { enviarEmail } = require('../controllers/emails.controller');

router.route('/')
    .post(enviarEmail);

module.exports = router;
