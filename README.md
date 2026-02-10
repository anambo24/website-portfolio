ABOUT: Package.Json

What it does for the website
Your MERN “website” is really two apps:

-client (React) = what the user sees in the browser

-server (Express + Mongo) = your API + database logic


server/package.json makes the server side work by:

-Listing dependencies (Express, Mongoose, etc.) so npm i installs them

-Defining scripts so you can run the backend with easy commands like npm run dev

-Controlling module behavior (with "type": "module")

E
______________________________________________________________

Front end using Vite 
http://localhost:5173/ -react on
http://localhost:5000/ -server on


________________________________________________________________


run backend:
cd $env:USERPROFILE\GitHub\website-portfolio\server
npm run dev


run front end:
cd $env:USERPROFILE\GitHub\website-portfolio\client
npm run dev
