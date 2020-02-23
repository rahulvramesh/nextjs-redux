

const withCss = require('@zeit/next-css')
const withScss = require('@zeit/next-sass')

module.exports = withScss(withCss({
  webpack: (config, { isServer }) => {
    if (isServer) {
      const antStyles = /antd\/.*?\/style\/css.*?/
      const origExternals = [...config.externals]
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback()
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback)
          } else {
            callback()
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ]

      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      })
    }
    return config
  },
  publicRuntimeConfig: {
        localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string'
        ? process.env.LOCALE_SUBPATHS
        : 'none',
  }
}))



// const withPlugins = require('next-compose-plugins');
// const withSass = require('@zeit/next-sass')
// const withCss = require('@zeit/next-css');


// if (typeof require !== 'undefined') {
//     require.extensions['.css'] = file => {};
// }



// var nextConfig =  withSass({
//     publicRuntimeConfig: {
//       localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string'
//         ? process.env.LOCALE_SUBPATHS
//         : 'none',
//     },
// })

// nextConfig = (phase, { defaultConfig }) => {

//     return {
//         publicRuntimeConfig: {
//             localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string'
//               ? process.env.LOCALE_SUBPATHS
//               : 'none',
//           }
//     }

// }


// module.exports = withPlugins(
//     [
//       [withCss],
//       [
//         withSass,
//         {
//           cssModules: true,
//           cssLoaderOptions: {
//             localIdentName: '[path]___[local]___[hash:base64:5]',
//           },
//         },
//       ],
//     ],
//     nextConfig
//   );

// const nextConfig = {


// };

// module.exports = withSass({
//     publicRuntimeConfig: {
//       localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string'
//         ? process.env.LOCALE_SUBPATHS
//         : 'none',
//     },
// })

// module.exports = withSass({
    // publicRuntimeConfig: {
    //     localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string'
    //       ? process.env.LOCALE_SUBPATHS
    //       : 'none',
    //   }
// })

// module.exports = withSass({
//     /* config options here */
// })

// const nextConfig = {
//     webpack: (config, { isServer }) => {
//       if (isServer) {
//         const antStyles = /antd\/.*?\/style\/css.*?/;
//         const origExternals = [...config.externals];
//         config.externals = [ // eslint-disable-line
//           (context, request, callback) => { // eslint-disable-line
//             if (request.match(antStyles)) return callback();
//             if (typeof origExternals[0] === 'function') {
//               origExternals[0](context, request, callback);
//             } else {
//               callback();
//             }
//           },
//           ...(typeof origExternals[0] === 'function' ? [] : origExternals),
//         ];
  
//         config.module.rules.unshift({
//           test: antStyles,
//           use: 'null-loader',
//         });
//       }
//       return config;
//     },

//     publicRuntimeConfig: () => {
//         return {
//             localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string'
//                             ? process.env.LOCALE_SUBPATHS
//                             : 'none',
//         }
//     }
    
//   };


//   const publicRuntimeConfig = {
//         localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string'
//           ? process.env.LOCALE_SUBPATHS
//           : 'none',
//     }
  
  
//   module.exports = withPlugins(
//     [
//       [withCss],
//       [
//         withSass,
//         {
//           cssModules: true,
//           cssLoaderOptions: {
//             localIdentName: '[path]___[local]___[hash:base64:5]',
//           },
//         },
//       ],
//     ],
//     nextConfig
//   );

