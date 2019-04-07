# Sport Chek

Сustom CMS topower a products/products details site for Sports Chek (https://www.sportchek.ca/). 
It also has additional features such as filtering and search.

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
