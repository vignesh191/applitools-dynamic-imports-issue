# Applitools Dynamic Import Issue

Please see the 'README' comments in `.storybook/preview.js` and `src/stories/button.stories.js`

The imports in `preview.js` do not work in Applitool's instance of storybook. They work fine when running storybook locally.

To see if the import is working, please open the console, to see if the contents of `dist/staticFile.js` is being logged.
