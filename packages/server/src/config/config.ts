export default () => ({
  hostname: process.env.HOSTNAME || 'localhost',
  mongodb_svr: process.env.MONGO_SVR,
  origin: (process.env.ORIGIN || '').split(';'),
  port: Number.parseInt(process.env.PORT, 10) || 3000,
});
