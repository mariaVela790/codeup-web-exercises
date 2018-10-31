"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

/**
 * Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
 */
let threeOrMoreLanguages = users.filter(user => (user.languages.length >= 3));
console.log(threeOrMoreLanguages);

/**
 * Use .map to create an array of strings where each element is a user's email address
 */

let emailAddress = users.map((user) => (user.email));
console.log(emailAddress);
//
/**
 * Use reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
 */

let totalYearsOfExperience = users.reduce((totalYears, user) => totalYears + user.yearsOfExperience, 0);
let averageYearsOFExperience = totalYearsOfExperience / users.length;
console.log(totalYearsOfExperience);
console.log(averageYearsOFExperience);
/**
 * Use reduce to get the longest email from the list of users.
 */

let userWithLongestEmail = users.reduce((longEmail, user) => {
    // if(user.email)
    if(user.email.length > longEmail.length){
        longEmail = user.email;
    }
    return longEmail;

}, '');

// let userWithLongestEmail = users.reduce((longEmail, user) => {
//     // if(user.email)
//     if(longEmail.length < user.email.length){
//         // longEmail = user.email;
//         return user.email;
//     } else{
//         return longEmail;
//     }
//
// }, '');

console.log(userWithLongestEmail);

/**
 * Use reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
 */

let usersNames = (users.reduce((allUsers, user) => `${allUsers} ${user.name},`, 'Your instructors are:')).slice(0, -1);
// let usersNames = (users.reduce((allUsers, user) => `${allUsers} ${user.name},`, 'Your instructors are:')).split('');
// usersNames.pop();
// usersNames = usersNames.join('');
// let usersNames = users.reduce((allUsers, user) => `${allUsers} ${user.name}`, ``);

console.log(usersNames);

//////////////Bonus

let listOfLanguages = users.reduce((languages, user) => {
    for(let language of user.languages){
        // console.log(language);
        if(languages.indexOf(language) === -1){
            languages.push(language);
        }
    }
    return languages;
}, []);

console.log(listOfLanguages);