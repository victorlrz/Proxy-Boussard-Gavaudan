# Proxy Server 

The objective of this project is to create an intermediate server between the B&G front end and the different sites to be scraped or requested.
This application is temporarily deployed on Heroku to test the server's capabilities.

## Getting Started

First launch, right after cloning this repo : `npm install`

Local development : `node app.js` - `npm start` - `heroku local web` 

Deployment of the web server : `git add .` -> `git commit -am "[msg]"` -> `git push heroku master`

### Application architecture

* Public 
  * css -> css files
  * images -> favicon of the server
  * javascript -> scrapers & API
* Routes
  * 01_route -> execute scrapers or API correponding
  * 02_route -> execute scrapers or API corresponding
  * ...
* Views
  * layout 
* App.js -> Main file with configs and roads !

### Our server app

[Small tour!](https://serv-bgam.herokuapp.com/)


![alt text](https://github.com/vlarreze/Serveur/blob/master/public/images/serveur.PNG?raw=true)
