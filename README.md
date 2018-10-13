# from create-react-app
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## note
I deleted the rest of the README generated from `create-react-app`

## discussion
So this took me over the timecap lol. I spent a little over 3 hours setting up the components, redux, and webpack, all without any styling. The app was in a perfectly functional state with literally black and white styling.

So after that, I went to go look at how to integrate Material UI, and I had 0 idea how to use that. It took me probably 3 hours before I even felt somewhat functional with it, and I still only used the Button and Radio components. If I was more familiar with the library, I would have setup the Menu React Component I built with some spinboxes and dropdowns using Material in order to customize the questions returned from the URL with the request parameters. But, I rarely do a lot of styling within my actual JS logic, and I'm used to doing the bulk of that work in SCSS. You'll actually notice that I couldn't figure out how to edit the styling on the Radio Material components with the time I gave myself (which was already too much tbh).

## install instructions
After cloning the repo, from the root directory:
1. type `npm i` from command prompt or terminal and press enter (this will install node_modules)

## running instructions
To run the repo locally, run `npm run dev-start`.

To build the project (which will then output bundled assets to a dist/ folder), run `npm run build`. The HTML app will then be available at dist/index.html.

