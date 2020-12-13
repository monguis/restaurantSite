'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async find(ctx) {
        const categories = await strapi.services.category.find(ctx.query);

        return categories.map(({title, dishes}) => ({title, dishes}));
    }
};
