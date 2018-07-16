# Student Managment Project
(Spring Boot with Angular 4+)

This project shows how to create a Spring Boot API, display its data with an Angular UI and secure it with Spring Security Jwt Authentication.

## Getting Started

To run this project,first you must navigate in your cmd to the SMS-project folder

and then type ```mvn spring-boot:run```.

Spring Boot app will start.

Then,open your second instance of cmd and navigate to SMS-project-ang folder

and then type ```npm install && npm start```.

And your angular app will run.

### Database Setup

You can set hibernate.ddl.auto to create,to enable hibernate to create tables and then just populate it with data.After that you MUST set it to validate

OR

Open sms-database.sql file and import it to your MSQ RDBMS or copy content in new sql file and run it.

### Possible error

If you get this error in your browser : 

```angular Failed to load http://localhost:8080/students: Response for preflight has invalid HTTP status code 403.```

The 403 response status indicates a general problem with the server backend not being configured to handle OPTIONS requests, including CORS preflight OPTIONS requests.

#### TO FIX THIS

Only for Google Chrome.

I use the Allow-Control-Allow-Origin: * Chrome Extension to go around this issue.

If the error still occurs,then do this : 

Create a new copy of your google chrome shortcut on your Desktop, right clicked it, and set the "Target" field to the following:

```C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-web-security --user-data-dir="c:/chromedev   ```
 
 The directory can be anything you want, I decided to make an empty folder called chrome dev in my C: directory. It has nothing to do where chrome is installed on your computer. It's just a fluff type thing.

