
import nodemailer from 'nodemailer';


module.exports.email = (params) => {
    return new Promise((resolve, reject) => {
        try {
            const smtpTransport = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                // service: 'Gmail',
                auth: {
                    user: "ion.viitor@gmail.com",
                    pass: "ion@123456"
                }
            });
            params.from = 'ion.viitor@gmail.com';

            smtpTransport.sendMail(params, (err, info) => {
                if (err) reject(err, []);
                if (info) resolve(info);
            })
        } catch (err) {
            reject(err);
        }
    });
}   