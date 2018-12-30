const winston = require('winston');
var _ = require('lodash');
var expressWinston = require('express-winston');

const tzoffset = (new Date()).getTimezoneOffset() * 60000;

var logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      timestamp: function () {
        var localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1);
        return localISOTime.replace('T', ' ');
      },
      colorize: true,
      formatter: function (options) {
        return '[' + options.timestamp() + '] ' + '[' + options.level.toUpperCase() + '] ' +
          (undefined !== options.message ? options.message : '') +
          (options.meta && Object.keys(options.meta).length ? ' ' + JSON.stringify(options.meta) : '');
      }
    })
  ]
});

exports.expressWinstonLogger = expressWinston.logger({
  winstonInstance: logger,
  meta: true,
  responseFilter: function (res, propName) {
    try {
      if (propName === 'body' && res[propName] && _.isString(res[propName]))
        return undefined;
    } catch (err) {
      //Do nothing.
    }
    return res[propName];
  },
  statusLevels: true,
  requestWhitelist: ['body', 'headers'],
  responseWhitelist: ['body', 'headers'],
  bodyBlacklist: ['pin', 'password', 'email', 'cvv', 'cardNumber'],
  expressFormat: true,
  colorize: true,
  ignoreRoute: function (req, res) {
    return false;
  }
});