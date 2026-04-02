module.exports = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch((err) => {
            if (!res.headersSent) {
                return next(err);
            } else {
                console.error("Headers already sent:", err);
            }
        });
    };
};