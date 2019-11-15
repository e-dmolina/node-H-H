const { Router } = require('express');
const router = Router();
const { enviarEmail } = require('../controllers/emails.controller');

router.route('/')
    .get((req, res) => res.json({message: "todo bien"}))
    // .post(enviarEmail);
    .post((req, res) => res.json({message: "respuesta de post!!"}))

module.exports = router;
