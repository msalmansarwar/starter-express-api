import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: 'landapp.card@gmail.com',
        pass: 'yamcdhdwthepfaoo'
    }
});

export default transporter;
