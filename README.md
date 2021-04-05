## Making a plan

## HTML HARDCODING:

1. Will need to have 3 radio buttons for the Pokemon
    - each button will want to have the same name so that the user will only be able to select one

2. Will need to have a button to "catch" each of the Pokemon

## WHAT ARE THE STATES TO TRACK?

1.  Will want to capture the number of times a Pokemon populates on the screen
2.  The number of times any particular Pokemon was captured

## WHAT ARE THE EVENTS TO HANDLE THESE OPERATIONS?

1.  OnClick
    - user selects a pokemon and on clicking the Pokeball button it will send the selected Pokemon to the "Pokedex"
        ?How to figure out which Pokemon was selected
        ?How to "capture" the selected Pokemon

        *   this will take place on the app.js page as it will use the functions to manipulate the objects

2.  OnLoad
    -   will need to populate the home.index with three Pokemon

## FUNCTIONS THAT NEED TO BE BUILT:

1.  A function to generate the pokemon NAME: generateThree
    -   will need to start with an array of raw data (pokemon.js)
    -   will use Math.random to get 3 random array indices
        *   need to make sure they are UNIQUE
        *   WHILE they are not unique, will need to get 3 new random numbers
    -   use the 3 index to get 3 Pokemon
    -   will need to increment the "encountered" property for all generated Pokemon
        *   will want to ask is this in the Pokedex yet
            <   if not { pokemon: 'booger', captured: 0, encountered" 1 }   >
            <   if yes increment the "encountered" property >
    -   add the Pokemon to the DOM

2.  Local storage utils function to move the Pokemon across separate pages
    -   one for getPokedex
    -   one for encounterPokemon
    -   one for capturePokemon

3.  a function for capturing the Pokemon NAME: capturePokemon(itemPokemon)
    -   this will take the Pokedex from our local storage
    -   will increment the captured property for (itemPokemon)

## VALIDATION

1. Build tests for each of the functions created

## NEXT STEPS

<!-- 1.  Hard code Home index page -->
<!-- 2.  Hard code Results index page -->
<!-- 3.  Create utils.js -->
3.  Write local storage functions to utils
    -   first write the test
    -   call the function into the test and make sure it passes
    -   put the function into the utils.js
    
4.  Write function generateThree
    -   test
5.  Write function capturePokemon
    -   test
6.  create ap.js for Home page
7.  create ap.js for Home page



