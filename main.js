// Fivem launcher
// Dev by BigShotDEV or BigShot#1999 on discord

var readlineSync = require('readline-sync');
var colors = require('colors');
var open = require('open');

var user1 = '' //write the username
var pass1 = '' //write the password 
var game1 = false;

while(game1 == false) {
    var results = game()
    var username = results[0];
    var password = results[1];
    if((username === user1) && (password === pass1)) {
        console.log('You logged in!'.green);
        console.log('Launching Fivem!'.yellow);
        (async () => {
        await open('fivem://launch', {wait: true});
        })();
        console.log('Please Wait untill the app will open!'.yellow)
        game1 = true;
    } else {
        console.log('The username or password are not exist!'.red)
    }
}


function game() {
    var username = readlineSync.question('What is your username?')
    var password = readlineSync.question('What is your password?', {
    hideEchoBack: true
});
    return [username, password];
}
