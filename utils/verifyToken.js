const jwt = require('jsonwebtoken')
const Error = require('../utils/error')

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(Error.createError(401, "You are not authenticated!"));
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(Error.createError(403, "Token is not valid!"));
    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.role==="admin") {
      next();
    } else {
      return next(ErrorcreateError(403, "You are not authorized!"));
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.role==="admin") {
      next();
    } else {
      return next(ErrorcreateError(403, "You are not authorized!"));
    }
  });
};