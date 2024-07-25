# devTest
We want to understand better how good you are integrating several technologies to provide a solid solution, this is a sample project that will help ilustrate just that.

**Exchange rate per symbol**

We would like to generate a site that provides exchange information and general information of the sample platform selected to the end users.

1. Fork this project and invite me (starl1n), you are going to work on the branch you just created and submit your changes there.
2. Create a connection to these endpoints using the required technology:

**Socket endpoint:** 
wss://ws.bitmex.com/realtime?subscribe=instrument,orderBookL2_25:XBTUSD

For reference: https://www.bitmex.com/app/wsAPI

**WEB API:**
https://www.bitmex.com/api/explorer/#!/Announcement/Announcement_get

3. Present the data in a human readable fashion (ReactJS/Blazor/Etc)
4. Store the records received from the connection into a database SQL Server/MariaDB/MongoDB/Postgres/
5. In a separated section of the solution provide a way to search or filter for the results stored in the Database of choice sorted by date in decending order, maybe you can add any sort of filter here too.


**This test will evaluate:**
1. Web Socket/API consumption capabilities
2. Knowledge of API integration between databases/API
3. Also will show capabilities of handling the frontend technologies
4. Familiarity with the language


If you are unfamiliar with any part of the request, is fine, you can skip it **(but make a comment )**











**Documentation**
here below you will be able to find out every single step to execute the application and including tecnologies used.
technologies used:
**FrontEnd**
- React
- TypeScript
- SCSS
- Redux
- Hooks
- React-Router-Dom
- DotEnv
- SweetAlert
- Axios

**Backend**
- Node.js
- Express.js
- nodemon
- Axios
- Postgress
- Docker/DockerCompose

1- step : clon the application in your computer
  in this branch you will find out two folders, bitmex is the front-end app and bitmex_Database is the back-end.
2- step : once you clon the project, let's setup the backend

**BackEnd SetUp**
3- first you must have Docker Desktop/ Docker and DockerCompose, NPM, Node.js install in your machine once you got 
  - open DockerDesktop and turn it on
  - Opne a line command or the line command of your machine
  - download the image of postgres by executing : **docker pull postgres** (Make sure you download the correct image)
  - Then go to the folder called **Bitmex_Database**, in you IDE open the folder, open the **Terminal** and execute this command : npm install
      This step will download and install all the dependency used in the backend.
      make sure this soluction use nodemon, and already configured to run with nodemon, whether you do not want use nodemon, just change the start script
      "start": "nodemon src/index.js"  with nodemon
      "start": "node src/index.js"   without nodemon
  - configure the .env file, this project use .env for enviroment variables enviroment, in the folder there is a file called .env.example, which contain a real examplo
    of all the variables you must add, it is no good put the same variable which the project us to work, but i put the same to make ease for you.
    **just copy all the varables from the file .env.example, and past them on the .env file**
    **Rememebr you have to create the .env file, which is not in Backend Folder**
  - go to the **Dockerfile** to see the configuratioin for node container, and **docker-compose.yml** for the database container, here you will find database name, user name and            password for data base.
  - if you completed all the previous steps you are ready to run the Backend app useing docker.
  - go to the terminal and run these commands : **1:docker-compose build, docker-compose up and your backend will be up.**


**FornEnd SetUp**
4- got to foler called bitmex and execute this command : npm install, this go to install all the dependency that the fornend app require to run.
  - after that let's configure the .env file, to set up the enviroment variables.
  - go to the .env.example and copy , 
    
