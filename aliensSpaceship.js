//class responsable for property of the spaceship 
class Spaceship {
    constructor(hull, firepower, accuracy) {
      this.hull = hull;
      this.firepower = firepower;
      this.accuracy = accuracy;
    }

//log mensagem 
    attack(target) {
      console.log("Player attacks the alien ship!");
      if (Math.random() < this.accuracy) {
//check if random generate number between 0 to 1         
        target.hull -= this.firepower;
        console.log("Player hits the alien ship!");
//checks if the hull target alien ship is below 0, 
//indicated that has been destroyed.   
        if (target.hull <= 0) {
          console.log("Alien ship destroyed!");
// Alien ship destroyed          
          return true; 
        }
      } else {
        console.log("Player missed the alien ship!");
      }
// Alien ship survives  
      return false; 
    }
  }
   
  function playGame() {
//increase spaceship, initial value. 
    const playerShip = new Spaceship(20, 5, 0.7);
//call the function and assign tge return value. 
    const alienShips = generateAlienShips(6);
  
    console.log("Earth is under attack by alien ships!");

    //interate each alienship in the alienShips
    for (let i = 0; i < alienShips.length; i++) {
    //logs a message on the console, current alien ship being attack
      console.log(`--- Alien Ship ${i + 1} ---`);
  

      while (true) {
//if the return value is true the it means alien ship was detroyed
//call the attack method of playShip, passing the current alien ship 
//as a target. it checks if was a sucessful attack. 

        if (playerShip.attack(alienShips[i])) {

//check current alien ship ceing attack is the last one           
          if (i === alienShips.length - 1) {
            console.log("Congratulations! You destroyed the alien ships!");
//exit the playGame function end the game.           
            return;
          }
  
          console.log("Do you want to attack next ship or retreat?");
//prompt  it work when has the prompt!!       
        //const choice = prompt("Enter 'attack' or 'retreat': ");
  //It compares the choice entered to determine if the player chose retreat. 
          if (choice.toLowerCase() === "retreat") {
            console.log("You chose to retreat. Game Over!");
            return;
          } else {
            break;
          }
        }
//calls the attack method   
        if (alienShips[i].attack(playerShip)) {
          console.log("Player's ship is destroyed. Game Over!");
//exit the playGame function terminating the game.          
          return;
        }
      }
    }
  }
 
//number of alien ship generated.   
  function generateAlienShips(numShips) {
//empty array to store generated alien ship     
    const alienShips = [];

//interates 'numShips'     
    for (let i = 0; i < numShips; i++) {
//random number 3 and 6(inclusive)/function and assigns it to hull var     
      const hull = getRandomNumber(3, 6);
      const firepower = getRandomNumber(2, 4);
     //random numbers between 0.6,08
      const accuracy = getRandomNumber(0.6, 0.8);
  //new spaceship object using class constructor 
//and add to alienShips array using push method 
      alienShips.push(new Spaceship(hull, firepower, accuracy));
    }
// alieShips array return from generateAlienShips functions
    return alienShips;
  }
// takes parameters min and max   
  function getRandomNumber(min, max) {
//the range of possible values, round to the closest interger 
//+ min to add the value, to shift the range of the 
//number to start from min     
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Start the game
  playGame();

