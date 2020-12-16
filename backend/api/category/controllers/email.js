'use strict';

const { env } = require("process");

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    userNotification: async ctx => {
        const body = ctx.request.body;
        const { fName, inquiry, lName, email, phone } = body

        await strapi.plugins['email'].services.email.send({
            to: body.email,
            subject: 'Use strapi email provider successfully',
            text: `Welcome on mywebsite.fr!
            Your account is now linked with: <%= user.email %>.`,
            html: `<head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
          <style>
          document {
                  text-align: center;
              }
      
              .imgHeader {
                  object-fit: contain;
                  height: 400px;
              }
          </style>
      </head>
      
      <body>
          <img class="imgHeader"
              src="https://thumbs.dreamstime.com/z/happy-elderly-people-sitting-around-table-picnicking-group-seniors-eating-fruit-cake-drinking-orange-juice-one-woman-154444299.jpg" />
          <div>
              <h1>
                  Thank you for your interest
              </h1>
              <p>
                  ${fName} we appreciate you. One of our team members will contact you shortly.
              </p>
              <p>
                  Your inquiry: ${inquiry}
              </p>
          </div>
      </body>
      
      </html>`,
        });


        await strapi.plugins['email'].services.email.send({
            to: "jccnnetwork@gmail.com",
            subject: 'Use strapi email provider successfully',
            text: `Welcome on mywebsite.fr!
            Your account is now linked with: <%= user.email %>.`,
            html: `<head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
          <style>
              document {
                  text-align: center;
              }
      
              .imgHeader {
                  object-fit: contain;
                  height: 400px;
              }
          </style>
      </head>
      
      <body>
          <img class="imgHeader"
              src="https://thumbs.dreamstime.com/z/happy-elderly-people-sitting-around-table-picnicking-group-seniors-eating-fruit-cake-drinking-orange-juice-one-woman-154444299.jpg" />
          <div>
              <h1>
                  Hey, someone needs assistance,
              </h1>
              <p>
                  Full name: ${fName} ${lName}
              </p>
              <p>
                  Phone Number: ${phone}
              </p>
              <p>
                  Email Address ${email}
              </p>
              <p>
                  Inquiry: ${inquiry}
              </p>
          </div>
      </body>
      
      </html>`,
        })

        ctx.send(body)
    }


}
