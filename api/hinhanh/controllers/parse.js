// parse.js
var Busboy = require('busboy')

/**
 * Parses a single file from a Node request.
 *
 * @param  {http.IncommingRequest} req
 * @return {Promise<{ file: Stream, filename: string>}
 */
module.exports = function parse (req) {
    return new Promise((resolve, reject) => {
        const busboy = new Busboy({
            headers: req.headers,
            limits: {
                files: 1 // allow only a single upload at a time.
            }
        })

        busboy.once('file', _onFile)
        busboy.once('error', _onError)
        req.pipe(busboy)

        function _cleanup () {
            busboy.removeListener('file', _onFile)
            busboy.removeListener('error', _onError)
        }

        function _onFile (fieldname, file, filename) {
            _cleanup()
            resolve({ file, filename })
        }

        function _onError (err) {
            _cleanup()
            reject(err)
        }
    })
}