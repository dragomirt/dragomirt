module.exports = {
    exportTrailingSlash: true,
    exportPathMap: function() {
        return {
            '/': { page: '/' },
            '/about': { page: '/about' },
            '/contact': { page: '/contact'},
            '/archive': { page: '/archive' }
        };
    }
};