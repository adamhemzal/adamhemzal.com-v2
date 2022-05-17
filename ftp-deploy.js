const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();
require('dotenv').config();

const config = {
    user: process.env.FTP_USER,
    password: process.env.FTP_PASSWORD,
    host: process.env.FTP_HOST,
    port: process.env.FTP_PORT,
    localRoot: __dirname + "/public",
    remoteRoot: "/www/gatsby",
    include: ["*", "**/*"], 
    // delete ALL existing files at destination before uploading, if true
    deleteRemote: false,
    forcePasv: false, // passive ftp mode | default true
    sftp: false,
};

/* LOGS */
ftpDeploy.on("uploading", function (data) {
    console.log(data.totalFilesCount); // total file count being transferred
    console.log(data.transferredFileCount); // number of files transferred
    console.log(data.filename); // partial path with filename being uploaded
});

ftpDeploy.on("uploaded", function (data) {
    console.log(data); // same data as uploading event
});

ftpDeploy.on("upload-error", function (data) {
    console.log(data.err); // data will also include filename, relativePath, and other goodies
});

/* FINAL DEPLOY */
ftpDeploy
    .deploy(config)
    .then( (res) => console.log("finished:", res) )
    .catch( (err) => console.log(err) );
