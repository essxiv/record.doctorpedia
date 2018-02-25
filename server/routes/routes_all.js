'use strict';

module.exports = function(app) {

    var showbox = require('../controllers/showbox.js');

    app.route('/videos')
        .get(showbox.get_all_info);

};