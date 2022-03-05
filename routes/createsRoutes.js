const routes = require('./consts');

const createRoutes = (app, fs) => {

    Object.values(routes.get).map(({ filePath, urlPath }) => {

        app.get(urlPath, (req, res) => {
            fs.readFile(filePath, 'utf-8', (err, data) => {
                
                if (err) throw err;

                res.send(JSON.parse(data));
            })
        })
    })
}

module.exports = createRoutes;