module.exports = () => {
    return (err, req, res, next) => {
        console.log(err.message);
        res.status(500);
    };
};