# READ WITH ME

This is a text to speech application that allows users to type in text or upload a picture with text to send to AWS Polly and Rekognition for text synthesis and speech. 

We built this application for individuals with learning differences in reading and those who are blind. We later realized this could be used by those who are deaf or hard of hearing as well if we add our text in a way that can be seen and highlighted while the text is being spoken. 

The goal of our project is to make an application both on computer and mobile device that can be used as an everyday text reader for simple application like reading any content a person is exposed to in a given day.

Future goals are to add OCR so individuals can read longer text strings like books or uploaded articles. We also want to bring the text to life for not only people who are deaf but for those who need more help learning to read.

### Technologies

This application uses create-react-app you can see the [README](client/README.md) for this [here](client/README.md) and the [github](https://github.com/facebook/create-react-app).

We also use the following, please take a look at the docs.

* [React](https://reactjs.org/) and [React Router](https://reacttraining.com/react-router/)
* [Express](http://expressjs.com/) and [Mongoose](https://mongoosejs.com/) with [Mongodb](https://docs.mongodb.com/?_ga=2.156407035.1555178045.1541104800-53721161.1541104800)
* [AWS](https://aws.amazon.com/) with both [Polly](https://aws.amazon.com/polly/?nc2=type_a) and [Rekognition](https://aws.amazon.com/rekognition/)

### Requirements

[Node.js](https://nodejs.org/en/) 6+