package tn.bewirelesssolutions.backend.mail;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.File;

@Service
public class EmailSenderImpl implements EmailSender{
    @Autowired
    private JavaMailSender emailSender;
    @Override
    public void send(String to, String link) throws MessagingException {

        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("gaiedmortadha9@baeldung.com");
        message.setTo(to);
        message.setSubject("Here's the link to reset your password");
        message.setText("This is your link: <p><a href=\""+link+"\">Change my password</a></p>");
        emailSender.send(message);
        System.out.println("email sent...");


    }
}
