
const aws = require('aws-sdk');
const ses = new aws.SES();
exports.handler = (event, context, callback) => {
    const params = {
        Destination: {
        ToAddresses: ["igortbelem@gmail.com"],
        },
        ReplyToAddresses: [event.email],
        Message: {
            Body: {
                Text: {
                    Data: event.body
                }
            },
            Subject: {
                Data: 'Contact Form - igorbelem.com'
            }
        },
        Source: "igortbelem@gmail.com"
    };

    ses.sendEmail(params, function (err, data) {
        callback(null, { err: err, data: data });
        if (err) {
            console.log(err);
            context.fail(err);
        } else {
            console.log(data);
            context.succeed(event);
        }
    });
};
