import * as dotenv from 'dotenv'
dotenv.config()

console.log(process.env.SOME_SECRET_VARIABLE)

// ex with dev, prod