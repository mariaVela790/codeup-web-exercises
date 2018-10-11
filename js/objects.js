// (function() {
    "use strict";

    /**
     * TODO: done
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = {
        "firstName" : "Maria",
        "lastName": "Vela"
    };
    console.log(person.firstName);
    console.log(person.lastName);


    /**
     * TODO: done
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function(){
        return "Hello " + this.firstName + " " + this.lastName;
    };
    console.log(person.sayHello());


    /** TODO: done
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    var discount = .12;
    shoppers.forEach(function (element) {
        var output = element.name + ' bought $' + element.amount;
        if(element.amount >= 200){
            output += ' and thus receives a discount of '
                + discount + ' and will only pay '
                + (element.amount * (1 - discount));
        }
        console.log(output);
    });


    /** TODO: done
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     */
    var books = [
        {
         title:'Fahrenheit 451',
         author:{
             firstName: 'Ray',
             lastName: 'Bradbury'
         }
        },
        {
         title: 'The Handmaid\'s Tale',
         author:{
             firstName: 'Margaret',
             lastName: 'Atwood'
         }
        },
        {
         title:'Clockwork Orange',
         author:{
             firstName: 'Anthony',
             lastName: 'Burgess'
         }
        },
        {
         title:'Personal Recollections of Joan of Arc',
         author:{
             firstName: 'Mark',
             lastName: 'Twain'
         }
        },
        {
         title:'Pride and Prejudice',
         author:{
             firstName: 'Jane',
             lastName:'Austen'
         }
        }
    ];

    /**
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    console.log(books[0].title) // "Fahrenheit 451"
    console.log(books[0].author.firstName) // "Ray"
    console.log(books[0].author.lastName) // "Bradbury"


    /**
     * TODO: done
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     */
    books.forEach(function(element, index){
        console.log('Book # ' + (index + 1));
        console.log('Title: ' + element.title);
        console.log('Author: ' + element.author.firstName + ' ' + element.author.lastName);

    });


    /**
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously.
     *   Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    //FUNCTION TO CREATE A BOOK WHEN GIVEN TITLE AND NAME
    function createBook(title, firstName, lastName) {
        var book = {
            title: title,
            author: {
                firstName: firstName,
                lastName: lastName
            }
        };
        return book;
    }

    //FUNCTION TO PROMPT USER FOR INFO IN ORDER TO CREATE THE BOOK
    function createBookArray(){
        var books = [];
        var title;
        var firstName;
        var lastName;
        var addBook;

        do{
            title = prompt('Enter the name of the book: ');
            firstName = prompt('Enter the author\'s first name:');
            lastName = prompt('Enter the author\'s last name: ');
            books.push(createBook(title, firstName, lastName));
            addBook = confirm('Would you like to add another book? ');
        } while(addBook);

        return books;
    }

    //FUNCTION TO CALL ON THE OBJECT TO DISPLAY THE INFO
    function showBookInfo(bookElement) {
        console.log('Title: ' + bookElement.title);
        console.log('Author: ' + bookElement.author.firstName + ' '
            + bookElement.author.lastName);
    }

    //TESTING THE FUNCTION: Creates the book array by assigning what the function
    //returns to the variable books and then iterating over the array
    // we then use the showBookInfo function to display the info for each book object
    var books = createBookArray();

    books.forEach(function(element, index){
        console.log('Book # ' + (index + 1));
        showBookInfo(element);
    });

    createBookArray().forEach(function(element, index){
        console.log('Book # ' + (index + 1));
        showBookInfo(element);
    });
// })();
