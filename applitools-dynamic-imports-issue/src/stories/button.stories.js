import { html } from "lit-html";
// README:
// this direct import works and the console.log content in this file is successfully logged
// import "../staticDir/dist/staticFile.js";

export default {
  title: "Lightning Subsystem/Components/Accordion",
  component: "slds-accordion",
  parameters: {
    modules: ["dist/staticFile"],
  },
};

const EmojiButton = () => html`<div>yoooo</div>`;
export const Emoji = EmojiButton.bind({});
