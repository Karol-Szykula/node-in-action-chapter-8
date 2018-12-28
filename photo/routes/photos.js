
var photos = [];
photos.push({
    name: 'Logo Node.js',
    path: 'http://nodejs.org/images/logos/nodejs-green.png'
}); photos.push({
    name: 'Ryan przemawia',
    path: 'http://nodejs.org/images/ryan-speaker.jpg'
});

exports.list = function (req, res) {
    res.render('photos', {
        title: 'Zdjęcia',
        photos: photos,
    });
};