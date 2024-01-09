/* Loops

-- while Loop --

var cupsOfFlour = 0;

while (cupsOfFlour < 5) {

  console.log('Scooping a cup of flour into the bowl');

  cupsOfFlour += 1;

  console.log('There are ' + cupsOfFlour + ' cups of flour in the bowl'); 

}

-- do while loop -- will always execute 'do' once/first

let i = 10;

do {

  i++;

  console.log(i);

} while (i < 3);


-- for loop --

for (var cupsOfFlour = 0; cupsOfFlour < 5; cupsOfFlour++) {

  console.log('Scooping a cup of flour into the bowl');

  console.log('There are ' + cupsOfFlour + ' cups of flour in the bowl'); 

}


'i += 1' is the same as 'i++'; it adds 1 to the variable


-- user input -- login challenge: add attempt limit

var loggedIn = false;

while (!loggedIn) {

    var username = prompt('Username:');

    var password = prompt('Password:');

    if (username == 'samy123' && password == '12345') {

        alert('Welcome back, ' + username);

        loggedIn = true;

    } else {

        alert('Inaccurate credentials!');

    }

}

*/

/*
Coding challenge:
We could also add a login attempt count that would enable the user to only enter the incorrect credentials a
certain number of times before displaying a message like "You are locked out" and ending the loop.
Challenge:  See if you can figure out how to implement this feature, using the above code as a starting point.
*/

var loggedIn = false;
var attempts = 0;

while (!loggedIn && attempts < 4) {
    var username = prompt('Username:');
    var password = prompt('Password:');

    if (username == 'samy123' && password == '12345') {
        alert('Welcome back, ' + username);
        loggedIn = true;

    } else {

      if (attempts >= 3) {
        alert('You have been locked out; too many failed login attempts!');
        attempts++;

      } else {
        attempts++;
        alert('Inaccurate credentials! Attempts: ' + attempts);
      }

    }

}

/* OpenClass Loops question 19 - for reference

for (var i = 0; i < 100 && points < 290; i++){
    if(points == 125 && pointsReset === false){
        points = 25;
        pointsReset = true;
    } else if (i % 2 === 0){
        points = points + 5;
    } else {
        points = points + 3;
    }
    
    console.log("Turns: " + i + " Score: " + points)
}

*/