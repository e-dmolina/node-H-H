const { Router } = require('express');
const router = Router();
const { enviarEmail } = require('../controllers/emails.controller');

router.route('/')
    .get((req, res) => res.json({message: "todo bien"}))
    // .post(enviarEmail);
    .post(enviarEmail)

module.exports = router;
