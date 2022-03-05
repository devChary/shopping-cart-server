const bannerRoutes  = require('./banners.js');

const appRouter = (app, fs) => {

    app.get('/', (req, res) => {
        res.send(`Let's get started`);
    });

    bannerRoutes(app, fs);
};

module.exports = appRouter;