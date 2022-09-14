module.exports = {
    locales: ['sr', 'en'],
    defaultLocale: 'sr',
    pages: {
        '*': ['common', 'menu', 'footer'],
        '/': ['homepage'],
        'rgx:/contact': ['contact'],
        'rgx:/team': ['team-member'],
    },
};
