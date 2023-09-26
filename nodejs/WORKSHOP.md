# Introduction
In this tutorial we are going to learn:
* How to query a graphql API and only get the data that you need
* How to pass arguments in queries
* How to query abstract types
* How to use pagination in queries


Let's start this journey !

# Discover the Radio France's OpenAPI
* Go to the Open API developer portal and create an account: https://developers.radiofrance.fr/

* Once the account is created, create a new project and copy the issued API KEY.

* Once you have your API Key use it to access the Open API graphql playground in the following URL: `https://openapi.radiofrance.fr/v1/graphql?x-token=<API_KEY>`

* You can now try and execute some queries on the playground

* to know more about the Radio France's Open API see the official documentation: https://developers.radiofrance.fr/doc/en

# Open the NodeJS project
Open the folder named `workshop` in your IDE (Vscode or Intellij)

This project is a NodeJS command line application. This project uses [ECMAScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

You can find out more on [NodeJS and NPM here](https://nodejs.dev/fr/learn/introduction-to-nodejs/)

To install the dependencies:

```sh
npm install
```

Add your API KEY in the module `src/client.js`. This module initializes a GraphQL Client using the library `graphql-request`. This client will allow us to make GraphQL request to the Open API. You can check the [documentation here](https://github.com/jasonkuhrt/graphql-request).

# Launch the project
You can run the test UI using this command.
```sh
npm test
```

You can see that all the tests are failing. Your goal is to make all the tests go GREEN !

You can keep the UI running. Here is the link `http://localhost:51204/__vitest__/`

# Exercice 1: Get the list of the MAIN radio stations of RadioFrance, excluding Web and Local Radio stations
Reminder: Use the playground to test your queries before writing your code.

In the file `src/exercice-1.js`. Write a query that will return the list of the titles of all the main Radio Stations of RadioFrance.

The returned value should be an array of strings `string[]`.

<details>
<summary>Hint 1</summary>
Import the `src/client.js` module and use it to make the query.
</details>

<details>
<summary>Hint 2</summary>

Use Async/Await when making your request in order to wait for the response [(see example)](https://github.com/jasonkuhrt/graphql-request/blob/e5c8e7f43066f238f96016f8c3b5c6c3cd0141ce/examples/request-authentication-via-http-header.ts#L26)

</details>

# Exercice 2: Get the list of ALL the radio stations of RadioFrance, including Web and Local Radio stations

Write your code in the file `src/exercice-2.js`.

The returned value should be an array of strings `string[]`.

# Exercice 3: Use a graphql argument to get information about a Show

Write a query to get data about the show `La Science, CQFD`.

Your function needs to return ONLY three attributes about this show, which are `id`, `title` et `standFirst`.


# Exercice 4: Use a graphql argument to get information about the grid
Go to the documentation of the query `grid` on the playground and take a closer look at the interface `Step` and it's implementations (`DiffusionStep`, `BlanckStep` and `TrackStep`). You can find out more on interfaces in the [official GraphQL documentation](https://graphql.org/learn/schema/#interfaces).

On the playground write a query that fetches the program grid on `France Inter` including `Tracks` between these two dates:
* start: Tuesday 4 July 2023 03:00:00 GMT+02:00
* end: Tuesday 4 July 2023 03:15:00 GMT+02:00


You should get three programs.

Now let's code, write a function that returns a list containing these programs according to the following specifications:
* create a "diffusion" object that includes the following properties: Id, title, stand first, and Show. Inside the diffusion object, include a "show" object with properties: Id, title, and stand first.
* additionally, implement a "track" object with the following properties: Id, title, performers, authors, and track number.

<details>
<summary>Hint 1</summary>

If you are having trouble obtaining the requested output, you can refer to the query's output located in the folder test/workshop.test.js

</details>

# Excercice 5: Get all programs with the paginated grid

## Playground

On the playground write a query that fetches all programs for the day of 4 July 2023 on `FRANCEMUSIQUE` including `Tracks`. This query should returned at most 100 elements.

Try to use the returned cursor to get the next page. For more informations on cursor, check the [following documentation](https://developers.radiofrance.fr/doc/en/tutorial-by-example/program-grid)

When cursor is null, it means all elements have been already fetched.

## Code

Write a function that returns a list of steps id with the following specification:
* the day of 4 July 2023 on `FRANCEMUSIQUE` including `Tracks`.

<details>
<summary>Hint 1</summary>

Use a [variable](https://graphql.org/learn/queries/#variables) to pass the cursor value as parameter. [Here a example with graphql request](https://github.com/jasonkuhrt/graphql-request/blob/main/examples/graphql-document-variables.ts)

</details>

# Bonus: Create a web application with React

Your ultimate mission, if you choose to accept it, is to create a web application with React that displays the program grid for France Inter. To achieve this, you will need to build a page with the following elements:
* On the same page:
  * A list of programs for a given day (defaulted to today)
  * Two buttons to display the programm grid for the previous day and the next day
  * For each program:
    * The title of the show
    * The name of the producer of the show
    * The title of the diffusion
    * The time at which the diffusion starts in the format HH:mm
    * A button to start the diffusion in the Radio France embed player
  * Display at the bottom of the page the Radio France embed player for the selected diffusion


We highly recommend that you draw inspiration from the design of the [program grid of France Inter](https://www.radiofrance.fr/franceinter/grille-programmes). However, you are not required to reproduce the exact same design, and you will not be able to replicate it identically (for instance, show thumbnails are not available in the Open API).

Technologies to use:
* [React](https://react.dev/)
* [Vite](https://vitejs.dev/)

You are free to use the GraphQL client of your choice. We recommend [Apollo Client](https://www.apollographql.com/docs/react/).