const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;

    // Create the error response object
    const errorResponse = {
      status: 'error',
      statusCode: statusCode,
      message: err.message || 'Internal Server Error',
    };
    
    // Send the error response
    res.status(statusCode).json(errorResponse);
  };
  
  module.exports = errorHandler;
  