# Sport Chek

Сustom CMS to power a products details site for Sports Chek (https://www.sportchek.ca/). 
It also has additional features such as filtering and search.

## Features

Here's a list of features of functionality and instructions on how to address them:

* filtering and search bar on the main page;
* authentication - go to `/login` to log into admins account. You will find login credentials in the login form or in the `login.txt` file. Admin-specific pages and functionality is protected;
* add a new product - after you successfully log into admins account you should see admin bar on the main page - follow the “Add new product” button; 
* edit or delete a product - log into admins account and click on any product on the main page. On the products page you should see two buttons: “Edit” and “Delete”.

## Getting Started

### Prerequisites

To get a copy of this project you need to have [git](https://git-scm.com/downloads), [npm](https://www.npmjs.com/get-npm) and any localhost of your choice.

### Installing

1. Clone the branch;
2. Install dependencies:
```
npm install
```
3. Compile Sass:
```
gulp sass
```
4. Import database (`database/db_sport_chek`) to your phpMyAdmin and configure database connection in `admin/script/connect.php`;
5. Copy entire project folder to `www` folder of your localhost or add it to your alias directories. 

### Development

If you want to develop from our build, there are some dev options:

1. Watch for changes in .scss files:
```
gulp watch
```

## Built With

* [Font Awesome](https://fontawesome.com/) - Graphic API (icnos);
* [Vue.js](https://vuejs.org/) - JavaScript Framework;
* [PHP](https://www.php.net/);
* [axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and node.js (AJAX).

## Authors

* [Maksym Portianoi](https://github.com/portikM) - Developer;
* [Aisana Ungarsynova](https://github.com/aungarsynova) - Designer.
