const sgmail = require('@sendgrid/mail');
const emailsCtrl = {};

sgmail.setApiKey(process.env.SENDGRIDKEY);



emailsCtrl.enviarEmail = async (req, res) =>{

    const { nombre, email, mensaje } = req.body;

    const msg = {
        to:"diegomolina1983@gmail.com",
        from:"diegomolina1983@gmail.com",
        subject:"Formulario de contacto",
        text:"Envio de msj con sendgrid..",
        html:`
        <h1>EMail</h1>
        <ul>
            <li>Nombre: ${nombre}</li>
            <li>Email: ${email}</li>
        <ul/>
        <p>Menaje: ${mensaje}</p>
    `
    }

    sgmail.send(msg);

    res.json({mensaje:"Mensaje enviado con éxito!"})

}

module.exports = emailsCtrl;
