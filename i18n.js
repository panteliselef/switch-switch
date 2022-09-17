module.exports = {
    locales: ['sr', 'en'],
    defaultLocale: 'sr',
    pages: {
        '*': ['common', 'menu', 'footer'],
        '/': ['homepage'],
        '/story': ['story'],
        '/history': ['history'],
        'rgx:/contact': ['contact'],
        'rgx:/team': ['team-member'],
    },
    localeDetection: false,
};
