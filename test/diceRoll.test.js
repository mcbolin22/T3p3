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


describe('As a dungeon master...', () => {

    describe('...I want to roll a variety of dice sizes...', () => {

        let diceVarieties = [
            {
                diceSize: 4,
                diceName: 'D4'
            },
            {
                diceSize: 6,
                diceName: 'D6'
            },
            {
                diceSize: 8,
                diceName: 'D8'
            },
            {
                diceSize: 10,
                diceName: 'D10'
            },
            {
                diceSize: 12,
                diceName: 'D12'
            },
            {
                diceSize: 20,
                diceName: 'D20'
            },
            {
                diceSize: 100,
                diceName: 'D100'
            }
        ];

        test.each(diceVarieties)("$diceName", (diceObject) => {
            let diceResult = rollDice(diceObject.diceSize);

            expect(diceResult).toBeGreaterThan(0);
            expect(diceResult).toBeLessThanOrEqual(diceObject.diceSize);
        });

        // Above is the same as below only simplified

        // test('D6', () => {
        //     let result = rollDice(6);

        //     expect(result).toBeGreaterThan(0);
        //     expect(result).toBeLessThanOrEqual(6); 
        // });

        // test('D8', () => {
        //     let result = rollDice(8);

        //     expect(result).toBeGreaterThan(0);
        //     expect(result).toBeLessThanOrEqual(8);
        // });

        // test('D10', () => {
        //     let result = rollDice(10);

        //     expect(result).toBeGreaterThan(0);
        //     expect(result).toBeLessThanOrEqual(10);
        // });

        // test('D12', () => {
        //     let result = rollDice(12);

        //     expect(result).toBeGreaterThan(0);
        //     expect(result).toBeLessThanOrEqual(12);
        // });

        // test('D20', () => {
        //     let result = rollDice(20);

        //     expect(result).toBeGreaterThan(0);
        //     expect(result).toBeLessThanOrEqual(20);
        // });
    });     
});
// test('Top level test is here', () => {

// });