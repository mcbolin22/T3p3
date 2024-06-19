/**
 * Description: This file contains the functions that simulate the rolling of a dice.
 * @date 2021-10-27
 * @author Me
 * 
 * @param [diceSize=6] - Number of the size of the dice we wish to roll
 * @returns A random number between 1 and the dice size
 */

function rollDice(diceSize = 6){
    let rollResult = Math.floor(Math.random() * diceSize) + 1;

    return rollResult;

}

// Will return the highest of two dice rolls
function rollDiceWithAdvantage(diceSize = 6){
    let result = {
        finalResult: null,
        rolls: []
    }

    result.rolls = [
        rollDice(diceSize),
        rollDice(diceSize)
    ];

    // [function, function]
    // [Number, Number]

    result.finalResult = Math.max(...result.rolls);

    return result;
}

// Will return the lowest of two dice rolls
function rollDiceWithDisadvantage(diceSize = 6){
    let result = {
        finalResult: null,
        rolls: []
    }

    result.rolls = [
        rollDice(diceSize),
        rollDice(diceSize)
    ];

    // [function, function]
    // [Number, Number]

    result.finalResult = Math.min(...result.rolls);

    return result;
}

module.exports = {
    rollDice,
    rollDiceWithAdvantage,
    rollDiceWithDisadvantage
};

