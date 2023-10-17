export const envConfig = () => ({
  port: process.env.PORT,
  mongoUri: process.env.MONGODB_URI,
});
