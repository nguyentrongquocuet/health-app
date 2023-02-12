
# Readme

# Scenario assumptions

## Scenario 1: Anonymous user

Can only access the landing page

## Scenario 2: Authenticated user

Allow viewing all pages including Top page, My Record, Landing page

# Technical dependencies:
- Typescript
- ReactJS
- TailwindCSS
- React-router
- Styled-components
- Highcharts.js

# Solution
## Styling
I skip to the end with `TailwindCSS` 😄

I found some inconsistence in the design that includes typography, spacing unit hence it’s not very convenient  to define CSS class for all of them, it’s when `styled-components` comes in to play. Follow that path, every component has its own typography styles, and in some cases its own irregular sizes/spacing. `twin.macro` is also a good choice to mix up Tailwind and CSS but the node version Im using is not supported.
The app shall not be responsive

## Mock data
Mock data will be generate in runtime using `faker`, and I will use Promise to implement mock api

# Typography:
There are 2 fonts: 
- Hiragino Kaku Gothic Pro for most of the text(Japanese texts)
- Inter: for date, number, for English texts

# Dev env:
Node.js: 16.13.1
npm: 8.1.2
react: 18