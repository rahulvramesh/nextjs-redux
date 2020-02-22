const withSass = require('@zeit/next-sass')

// module.exports = {
//     publicRuntimeConfig: {
//       localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string'
//         ? process.env.LOCALE_SUBPATHS
//         : 'none',
//     },
// }

module.exports = withSass({
    publicRuntimeConfig: {
        localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string'
          ? process.env.LOCALE_SUBPATHS
          : 'none',
      }
})

// module.exports = withSass({
//     /* config options here */
// })