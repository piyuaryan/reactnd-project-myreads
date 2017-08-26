Assessment project for React NanoDegree.

## Project Structure
```
+--public/    
 |-- index.html
 |-- favicon.ico - React Icon.
+-- src/
 +-- components/.
  |-- Book.js Book component that shows Book Title, Authors, Thumbnail and Actionable options.
  |-- BookList.js Componenet that Lists all the Shelves and bookes within shelves.
  |-- BookSearch.js Componenet that allows searching Books and adding into user's Shelves.
  |-- BookShelf.js Componenet that categorises and holds the books.
 +-- icons/.
  |-- add.svg
  |-- arrow-back.svg
  |-- arrow-drop-down.svg
 +-- utils/.
  |-- BooksAPI.js - A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
 |-- App.js - This is the root of your app. Contains static HTML.
 |-- App.css - Styles for your app.
 |-- App.test.js - Used for testing. Unit tests are not writtern yet. 
 |-- index.js - Used for DOM rendering only.
 |-- index.css - Global styles.
|-- .gitignore 
|-- CONTRIBUTING.MD - Information about contributing to this repo. 
|-- README.MD - This README file.
|-- SEARCH_TERMS.md - The whitelisted short collection of available search terms to use with this app.
|-- package.json - npm package manager file.
```

## Backend Server

Provided by Udacity

### `getAll()`
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update(book, shelf)`
* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search(query, maxResults)`
* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results. 

## create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

## Prerequisites
   
* npm
    
##   To Run the App:
   
* Clone or download the code
* Open a terminal in project directory
* Run following command to install dependencies
```sh
npm install
``` 
* Once all the dependencies are installed use command following command to run the local server 
```sh
npm start
```
* App can be accessed at localhost:3000

