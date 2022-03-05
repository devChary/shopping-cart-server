const bannerRoutes = (app, fs) => {
    const path = './data/banners/index.get.json';

    app.get('/banners', (req, res) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) throw err;
            
            res.send(JSON.parse(data));
        })
    })
}

module.exports = bannerRoutes;
