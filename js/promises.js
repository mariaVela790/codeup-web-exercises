////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const wait = (delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//
//             resolve(`You'll see this after ${delay / 1000} second(s)`);
//             // console.log('resolved');
//         }, delay);
//     });
// };
//
// wait(1000).then((message) => console.log(message));
// wait(3000).then(message => console.log(message));


//////////////////////////////////////// GITHUB API ////////////////////////////////////////////////////////////////////
// const token = '';
// const githubApiBaseUrl = 'https://api.github.com';
// const options = {
//     headers: {
//         'Authoirzation' : 'token' + token
//     }
// };
//
// const getMostRecentCommit = (userName) => {
//      const userEventsEndpoint = `/users/${userName}/events/public`;
//      return fetch(githubApiBaseUrl + userEventsEndpoint, options)
//          .then(response => response.json())
//          .then(events => {
//              const firstPushEvent = events.find(event => event.type === 'PushEvent');
//              // console.log(firstPushEvent.repo.url);
//              return fetch(firstPushEvent.repo.url + '/commits', options);
//          })
//          .then(response => response.json())
//          .then(commits => {
//              // const mostRecentUserCommit = commits.filter(commit => commit.author.login === userName)[0]; //alternative to .find()
//              const mostRecentUserCommit = commits.find(commit => commit.author.login === userName);
//              console.log(mostRecentUserCommit); //testing results
//          });
//
// };
//
// getMostRecentCommit('jreich5');
//


// const checkLastCommit = (userName) => {
//     // let url = 'https://api.github.com/repos/' + userName + 'codeup-web-exercises/commits';
//     return fetch(`${githubApiBaseUrl}${userName}/events`, {headers: {'Authorization' : token}})
//         .then((response) => response.json())
//         .then((events) => {
//             // console.log(events);
//             for(let event of events){
//                 // (event) => {
//                 if(event.type === 'PushEvent'){//looks for last push event project
//                     fetch(`${event.repo.url}/commits`)//in that push event, we look at all the commits on that project
//                         .then(response => response.json())
//                         .then(commits => {
//                             commits.find(commit => commit.author.login === userName);
//                             console.log(commits[0].commit.author.date);
//                         });
//                 }
//                 break;
//             }
//         });
// };
//
//
// checkLastCommit('mariaVela790');




//////////////////////////////////// Bonuses ///////////////////////////////////////////////////////////////////////////
// =================== BONUS exercise 1 SOLVED
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

$('#sampleFormBtn').click((e) => {
    e.preventDefault();
    userNameBackground($('#sampleForm').val());
});

const userNameBackground = (userName) => {
    // if(userName === 'maria'){
    //     $('body').css('background-color', 'red');
    // } else {
    //     $('body').css('background-color', 'blue');
    // }
    return fetch('data/profiles.json')
        .then(response => response.json())
        .then(users =>  === userName);
};

userNameBackground('mary');


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
















