const DataStore = require('nedb');

const products = new DataStore({ filename: './data/products.db', autoload: true });

const productsArray = [];

const milk = {
    productName: 'Mleko',
    kcal: '10'
};

var chicken = {
    productName: 'chicken',
    kcal: '530'
};

var duck = {
    productName: 'duck',
    kcal: '505'
};

var pig = {
    productName: 'pig',
    kcal: '200'
};

// productsArray.push(milk, chicken, duck, pig);

// products.insert(productsArray, function (err, docs) {
//     docs.forEach(function (d) {
//         console.log('Saved user:', d.productName);
//     });
// });