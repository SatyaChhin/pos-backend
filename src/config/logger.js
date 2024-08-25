const winston = require('winston');

// Define log format
const logFormat = winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ level, message, timestamp }) => {
        return `${timestamp} [${level}]: ${message}`;
    })
);

// Create a logger instance
const logger = winston.createLogger({
    level: 'info',
    format: logFormat,
    transports: [
        new winston.transports.Console(), // Log to the console
        new winston.transports.File({ filename: 'error.log', level: 'error' }), // Log errors to a file
    ],
});

module.exports = logger;
