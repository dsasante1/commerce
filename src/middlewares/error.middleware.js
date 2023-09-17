
//Error response middleware for 404 not found.
module.exports.notFound = function notFound(req, res) {
    res.status(404).json({
        code: 404,
        message: 'Ooops, route not found'
    });
}


//Error response middleware for handling all 
//app errors except generic errors.
module.exports.appErrorHandler = function appErrorHandler(err, req, res, next) {
    if (err.code && typeof err.code === 'number') {
        console.log(`
      status - ${err.code}
      message - ${err.message} 
      url - ${req.originalUrl} 
      method - ${req.method} 
      IP - ${req.ip}
    `);

        res.status(err.code).json({
            code: err.code,
            message: err.message
        });
    } else {
        next(err);
    }
}


//Generic error response middleware 
//for internal server errors.
module.exports.genericErrorHandler = function genericErrorHandler(err, req, res, next) {
    console.log(`
    status - 500 
    message - ${err.stack} 
    url - ${req.originalUrl} 
    method - ${req.method} 
    IP - ${req.ip}
  `);

    res.status(500).json({
        code: 500,
        data: '',
        message: err.message
    });
}