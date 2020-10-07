export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://mongo:27017/clean-api',
  port: process.env.PORT || 8080,
  jwtSecret: process.env.JWT_SECRET || 'tk52$Ksdk=2'
}
