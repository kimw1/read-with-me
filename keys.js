console.log('this is loaded');

exports.aws = {
    id: process.env.AWS_ACCESS_KEY_ID,
    region: process.env.AWS_REGION,
    secret: process.env.AWS_SECRET_ACCESS_KEY
};