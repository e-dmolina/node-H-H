const nodemailer = require('nodemailer');
const emailsCtrl = {};

emailsCtrl.enviarEmail = async (req, res) =>{

    const { nombre, email, mensaje } = req.body;

    contentHTML = `
        <h1>EMail</h1>
        <ul>
            <li>Nombre: ${nombre}</li>
            <li>Email: ${email}</li>
        <ul/>
        <p>${mensaje}</p>
    `;

    const trasnporter = nodemailer.createTransport({

        host:'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user:'diegomolina1983@gmail.com',
            pass:'diegomolina1983'
        },
        // tls: {
        //     rejectUnauthorized: false
        // }
    });

    try {
        const info = await trasnporter.sendMail({
            from: "diegomolina1983@gmail.com",
            to: 'diegomolina1983@gmail.com',
            subject: 'Formulario de contacto',
            html: contentHTML
        });
    
        console.log('Mensaje enviado',info);
    
        res.json({message:"Email recibido"});
    } catch (error) {
        console.log('Mensaje de error',error);
    
        res.json({error:error});   
    }
} 

module.exports = emailsCtrl;