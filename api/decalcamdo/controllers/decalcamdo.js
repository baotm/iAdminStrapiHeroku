'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');
module.exports = {
    async deleteMany (ctx) {
        let listId = (ctx.request.body.listId)
        const result = await strapi.query("decalcamdo").model.deleteMany({
            _id: listId
        })
        ctx.send(result);
    },
};
