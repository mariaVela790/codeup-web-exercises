const wait = (number) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {

          resolve('resolved');
          // console.log('resolved');
      }, number);
  });
};

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 second'));

const checkLastCommit = (userName) => {
  // let url = 'https://api.github.com/repos/' + userName + 'codeup-web-exercises/commits';
    fetch('https://api.github.com/users/' + userName + '/events', {headers: {'Authorization' : '71019bf4960aa50a452fadcdd2873f2bbaed16e0'}})
        .then((response) => response.json())
        .then((events) => {
            console.log(events);
            for(let event of events){
                // (event) => {
                    if(event.type === 'PushEvent'){
                        console.log(event.payload.commits[0]);
                        console.log(event.created_at);
                        return 0;
                    }
                // };
            }



            // for (let event of events){
            //     if(event.type === '')
            // }
        });
};

checkLastCommit('mariaVela790');

