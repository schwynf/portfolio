# sports-bets
 
![Repo Size](https://img.shields.io/github/repo-size/schwynf/sports-bets) <br> 
## Description <span id="d"></span> 
This is a competitive sports wagering application. The information is stored in a mongoDB database either on the localhost or a MongoDB Atlas server depending on run time environment. Application features:
1. Competitive sports wagering
1. Live chat and news feed
1. JWT login verification
    
## Table of Contents 
 <ul><li><a href="#i">Installation</a></li><li><a href="#npm">NPM Packages</a></li><li><a href="#heroku">Heroku Deployement</a></li><li><a href="#u">Usage</a></li><li><a href="#l">License</a></li><li><a href="#c">Contributing</a></li><li><a href="#t">Tests</a></li></ul> 
 
## Installation <span id="i"></span> 
1. Clone this repository.
    ```
    git clone https://github.com/schwynf/sports-bets.git
    ```
1. Navigate into the cloned directory.
    ```
    cd sports-bets
    ```
1. Install Nodejs dependencies.
    ```
    npm install
    ```
1. Create mongoDb database using the `nfl.js` file, located below.
    ```
    ./seeder/nfl.js
    ```
1. Create a .env file and add MONGO_URL to use MonogDB Atlas for application. Visit website to require a connection string: [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
	 ```
    MONGO_URL="mongodb+srv://<user>:<pword>@cluster0.ssrhv.mongodb.net/<dbName>?retryWrites=true&w=majorityURL"
    ```
1. In the root directory of the project, start the server.
    ```
    node server
    ```
1. In your browser navigate to the following page.
    ```
    http://localhost:3001

## NPM Packages <span id="npm"></span>

| Package | Documentation |
| ----------- | ----------- |
| `express` | [Express](https://www.npmjs.com/package/express) |
| `react` | [react](https://www.npmjs.com/package/react) |
| `mongoose` | [react](https://www.npmjs.com/package/mongoose) |
| `mysql2` | [Node MySql 2](https://www.npmjs.com/package/mysql2) |
| `sequelize` | [Sequelize](https://www.npmjs.com/package/sequelize) |
| `passport` | [Passport](https://www.npmjs.com/package/passport) |
| `passport-local` | [Passport Local Strategy](https://www.npmjs.com/package/passport-local) |
| `bcrypt` | [BCrypt](https://www.npmjs.com/package/bcrypt) |
| `dotenv` | [Dotenv](https://www.npmjs.com/package/dotenv) |
| `axios` | [Axios](https://www.npmjs.com/package/axios) |

## Heroku Deployment <span id="heroku"></span> 

This project is deployed on Heroku. The link to web app is:

[https://sports-bets.herokuapp.com/](https://sports-bets.herokuapp.com/)
 
## Usage <span id="u"></span> 
 FUN.
 
## License <span id="l"></span> 
MIT 
 
## Tests <span id="t"></span> 
 ```
 npm run test
 ```
 
## Author Info 
 
 Name: Schwyn Francis <br>
 <a href="https://github.com/Schwynf"><img src="https://img.shields.io/static/v1?label=Contact&message=Github&color=lightgrey" /></a>
 <a href="mailto:schwynf@gmail.com"><img src="https://img.shields.io/badge/Contact-Email%20Me!-lightgrey" /></a> <br>
 <img src="https://avatars.githubusercontent.com/u/59147321?" width="30%" />
 <br>
 
 Name: Phil Hurst <br>
 <a href="https://github.com/pyhurst"><img src="https://img.shields.io/static/v1?label=Contact&message=Github&color=lightgrey" /></a>
 <a href="mailto:philhurst9@gmail.com"><img src="https://img.shields.io/badge/Contact-Email%20Me!-lightgrey" /></a> <br>
<img src="https://avatars.githubusercontent.com/u/60010868?" width="30%" />
 <br>
 