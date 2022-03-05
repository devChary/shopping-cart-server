const routes = {
    get: {
        banners: {
           filePath: './data/get/banners.json',
           urlPath: '/banners'
        },
        products: {
            filePath: './data/get/products.json',
            urlPath: '/products'
         },
        categories: {
            filePath: './data/get/categories.json',
            urlPath: '/categories'
         },
    }
};

module.exports = routes;