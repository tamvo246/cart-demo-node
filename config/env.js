const dotenv = require('dotenv');
process.env.PORT=3000
process.env.MONGO_DB_URL="mongodb://localhost:27017/shopping"
process.env.STRIPE_SECRET_KEY="secret"
// getting all ENV variables before starting another processes
dotenv.config();


module.exports = {
    mongoDbUrl: process.env.MONGO_DB_URL,
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    port: process.env.PORT
}
