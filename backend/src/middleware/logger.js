const logger = (req, res, next) => {
  const startTime = Date.now();
  const timestamp = new Date().toISOString();

  res.on('finish', () => {
    const responseTime = Date.now() - startTime;

    console.log(
      `${req.method} ${req.originalUrl} | ${timestamp} | ${res.statusCode} | ${responseTime}ms`
    );
  });

  next();
};

module.exports = logger;