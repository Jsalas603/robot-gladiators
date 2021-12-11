var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 49;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = "50";
var enemyAttack = 12;
// create fucntion
var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0) {

var promptFight = window.prompt("Would you like to FIGHT or SKP the battle? Enter 'FIGHT' or 'SKIP' to choose.");
    console.log(promptFight);

// if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {

    //Subtract the value of "playerAttack" from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked.
console.log (
    playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining. "
);

    // check enemy's health
if (enemyHealth <= 0) {
    window.alert(enemyName + " had died!");

    // award player money for winning
    playerMoney = playerMoney + 20;

    // leave while() loop since enemey is dead
    break;
}
else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
}
    // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playersHealth' variable.
playerHealth = playerHealth - enemyAttack;
    console.log(
        enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining "
    );

    // check player's health
if (playerHealth <= 0) {
    window.alert(playerName + " has died! ");
    // leave while () loop id the player is dead
    break;
}

else {
    window.alert(playerName + " still has " + playerHealth + " health left. ");
}
    //if player choses to "skip" confirm adn stop the loop
} 

    if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        break;
    }
    // if no (false), ask qustion again by running fight() again
    else {
        fight();
    }

    window.alert(playerName + " has chosen to skip the fight! ");
} else {
    window.alert("You need to choose a valid option. Try again!");

}


    // Log a resulting message to the console so we know that it worked.
console.log(
    enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining. "
    );
};
};
// execute function 
for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
    console.log(i);
}