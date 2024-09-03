export default () => ({
  port: Number.parseInt(process.env.PORT, 10) || 3000,
  hostname: process.env.HOSTNAME || 'localhost',
  origin: (process.env.ORIGIN || '').split(';'),
  mongodb_svr: process.env.MONGO_SVR,
});
