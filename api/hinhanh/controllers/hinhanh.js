'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');
var needle = require('needle');

module.exports = {
    async hinhanhupload (ctx) {

        console.log(ctx)


        // const data = {
        //     "files": {
        //         file: file.path,
        //     }
        // }

        // await needle("post", "http://localhost:3001/upload", data, {
        //     multipart: true
        // })

        // const result = await strapi.query("hinhanh").model.create({
        //     "nhanvienid": "12asasas",
        //     "tinhtrang": false,
        //     "ghichu": "abc",
        //     "noidung": "abc"
        // })
        // let id = ""
        // let files = { ...ctx.files }
        // const uploadedFiles = await strapi.plugins.upload.services.upload.upload({
        //     files,
        // });

        ctx.send("hello");
    },
};
