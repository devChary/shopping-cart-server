const createRoutes = require('./createsRoutes');

const appRouter = (app, fs) => {

    app.get('/', (req, res) => {
        res.send(`Let's get started`);
    });

    createRoutes(app, fs);
};

module.exports = appRouter;