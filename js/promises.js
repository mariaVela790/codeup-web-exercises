////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const wait = (number) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//
//             resolve('resolved');
//             // console.log('resolved');
//         }, number);
//     });
// };
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 second'));


//////////////////////////////////////// GITHUB API ////////////////////////////////////////////////////////////////////
// const checkLastCommit = (userName) => {
//     // let url = 'https://api.github.com/repos/' + userName + 'codeup-web-exercises/commits';
//     fetch(`https://api.github.com/users/${userName}/events`, {headers: {'Authorization' : ''}})
//         .then((response) => response.json())
//         .then((events) => {
//             // console.log(events);
//             for(let event of events){
//                 // (event) => {
//                 if(event.type === 'PushEvent'){//looks for last push event project
//                     fetch(`${event.repo.url}/commits`)//in that push event, we look at all the commits on that project
//                         .then(response => response.json())
//                         .then(commits => {
//                             console.log(commits[0].commit.author.date);
//                         });
//                 }
//                 break;
//             }
//         });
// };
//
// checkLastCommit('mariaVela790');

//////////////////////////////////// Bonuses ///////////////////////////////////////////////////////////////////////////
// =================== BONUS exercise 1
// In your data directory, create a profiles.json file with the following...
// {
//     "sandy123": "brown",
//     "bob234": "green",
//     "sally345": "blue"
// }
// Add an input field and submit button (you will need to prevent the default behaviour) that when clicked,
// runs the following function...

//Create a function that takes in a username and fetch's the color preference based on the username and
// sets the background color to that color.




// =================== BONUS exercise 2
// Using the Star Wars API, log the homeworld of a searched character

// =================== BONUS exercise 3
// Using the GitHub API and reduce(), find the average hour of the last 3 pushes. Ignore minutes.

// =================== BONUS exercise 4
// Create star-chars.json file in your data folder and paste in the following...
// [
//     {
//         "name": "Rey",
//         "coolness": 9
//     },
//     {
//         "name": "Luke Skywalker",
//         "coolness": 9
//     },
//     {
//         "name": "Darth Vadar",
//         "coolness": 10
//     }
// ]
// Create a function that fetches this array and returns an array of homeworlds for the characters.
//     It will look something like the following...
// ['Jakku', 'Tatooine', 'Tatooine']
















