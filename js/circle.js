// (function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,
        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            var area = Math.PI * Math.pow(this.radius, 2);
            return area;
            // TODO: return the proper value
        },
        logInfo: function (doRounding) {
            // TODO: complete this method.
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            var area = this.getArea();
            if(doRounding){
                area = Math.round(area);

            }
            console.log("Area of a circle with radius: " + this.radius + ", is: " + area);
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);


/**
 * ================================= OBJECTS BONUSES

 BONUS 1 (create a dog object):
 The dog object should have properties for:
 breed (string),-
 weightInPounds (number),-
 age (number),
 color (string),
 sterilized (boolean),
 shotRecords (array of objects with properties for date and typeOfShot)
 The dog object should have methods to:
 bark() - will console.log "Woof!"
 getOlder() - will increase age by 1
 fix() - will set sterile to true if dog sterilized property is false
 vaccinate() - takes in an argument for the name of the shot and adds a new shot with the current date to the shotRecords array
 */
//date retrieved using the following code snippet
//https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript
function formatDate(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    return today = mm + '/' + dd + '/' + yyyy;

}

var dog = {
    breed: 'terrier',
    weightInPounds: 10,
    age: 5,
    color: 'white',
    sterilized: false,
    shotRecords: [
        {
            date: '10/10/2012',
            typeOfShot: 'rabies'
        },
        {
            date: '10/10/2013',
            typeOfShot: 'heartworm'
        },
        {
            date: '10/10/2014',
            typeOfShot: 'rabies'
        }
    ],
    bark: function (){
        console.log('WOOF');
    },
    getOlder: function () {
        this.age += 1;
    },
    fix: function () {
        this.sterilized = true;
    },
    vaccinate: function (typeOfShot) {
        this.shotRecords.push({date: formatDate(), typeOfShot: typeOfShot});
    }
};



/**
 BONUS 2 (expanding on the books object exercise):
 Add a property "keywords" that contains an array of possible genres the book may be categorized by
 Add a boolean property "isAvailable" and set it to true
 Add a dateAvailable property that has a string of the date/time when the book will be available
 Add a method lend() that...
 - changes the available property to false if it is not already false
 - sets the dateAvailable to a date exactly two weeks from when the lend() method is called
 (to do this, research the JS Date object and use methods from it in your code)
 Add a method receive() that...
 - changes the available property to true
 - changes the dateAvailable property to the string "now"
 */




/**
 BONUS 3 (expanding on the books object exercise):
 Create an application to take in user input to build the books array of objects.
 Allow the user to continue adding books or to finish adding books.
 Once the books have been added, output the books array in the console.
 Allow a user to delete a book or a group of books by title or author last name
 Allow a user to edit a book by index number in the books array
 */

/**
 ================================= MATH OBJECT BONUS
 Create an application that will calculate the volume of a building based on user input.
 Account for multiple rooms and a user choice of measurement (between imperial or metric).
 */


// })();
