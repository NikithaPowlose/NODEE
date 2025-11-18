var formidable = require('formidable');
var http = require('http');
var fs = require('fs');
var path = require('path');
var nodemailer = require('nodemailer');

// Looking to send emails in production? Check out our Email API/SMTP product!
var transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "f00886763baccc",
    pass: "d3e43c2b4d7771"
  }
});

var server = http.createServer((req, res) => {
  if (req.url === '/fileupload' && req.method.toLowerCase() === 'post') {
    var form = new formidable.IncomingForm({ multiples: false });

    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload[0].filepath;
      var newpath = path.join(process.cwd(), 'uploads', files.filetoupload[0].originalFilename);

      fs.rename(oldpath, newpath, function () {
        var mailOptions = {
          from: 'no-reply@example.com',
          to: 'friend@example.com',
          subject: 'New File Uploaded',
          text: `A file named ${files.filetoupload[0].originalFilename} has been uploaded.`
        };

        transporter.sendMail(mailOptions, function (error, info) {
          if (!error && info && info.messageId) {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('File uploaded and email sent successfully!');
          } else {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('File uploaded but email sending failed.');
          }
        });
      });
    });

  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<form action="/fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    res.end();
  }
});

server.listen(8080, () => console.log("Server running at http://localhost:8080"));
