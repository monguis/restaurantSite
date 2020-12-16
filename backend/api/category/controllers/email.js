'use strict';

const { env } = require("process");

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    userNotification: async ctx => {
        const body = ctx.request.body;
        const adminEmail = env("ADMIN_EMAIL");
        
        await strapi.plugins['email'].services.email.send({
            to: body.email,
            subject: 'Use strapi email provider successfully',
            text: 'Hello world!',
            html: 'Hello world!',
        });

        await strapi.plugins['email'].services.email.send({
            to: adminEmail,
            subject: 'Use strapi email provider successfully',
            text: body.inquiry,
            html: 'Hello world!',
        })

        ctx.send(body)
    }


}
