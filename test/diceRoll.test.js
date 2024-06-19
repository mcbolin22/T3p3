const { rollDice } = require('../src/diceRolling');

beforeEach(() => {
    // This will run before each test
    // so this block can run multiple times

    console.log("A test has been started!")

});

afterEach(() => {
    // This will run after each test
    // so this block can run multiple times

    console.log("A test has been completed!")

});

beforeAll(() => {
    // This will run before all tests
    // so this block will only run once

    console.log("Testing will begin!")

    // get JWT from API
    // store the JWT for all tests to use


    // connection successful, make sure API is active and ready
    // connection successful, make sure database is available and running

    // setting up mocks of APIs or databases to make sure tests
    // are not using real-world resources

});

afterAll(() => {
    // This will run after all tests
    // so this block will only run once

    console.log("All test have now ended!")

});

describe('As a casual gamer...', () => {

    // As a casual gamer I want to roll a dice so that I can play a game

    test('...I want to roll a 6-sided dice...', () => {

        let result = rollDice();

        expect(result).toBeGreaterThan(0);
        expect(result).toBeLessThanOrEqual(6);

    });


});

test('Top level test is here', () => {

});