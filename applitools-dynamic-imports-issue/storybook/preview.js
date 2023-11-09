/**
 * Load modules required to render a story
 */

// README:
// This does not work on applitool's instance of storybook, it says: TypeError: Failed to fetch dynamically imported module:
// http://localhost:9009/staticFile.js
// staticFile.js is not found anywhere under localhost:9009, even though I put the directory in staticDirs arg in .storybook/main.js
// However, it does work when running storybook locally.

// export const loaders = [
//   async ({ parameters: { modules } }) => {
//     if (!modules) return;
//     return {
//       modules: await Promise.all(
//         modules.map((m) => {
//           const path = m;
//           // Tell webpack to ignore transforming this dynamic import
//           // and use the native browser API instead.
//           return import(/* webpackIgnore: true */ `/${path}.js`);
//         })
//       ),
//     };
//   },
// ];
