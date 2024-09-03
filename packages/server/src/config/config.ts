export default () => ({
	port: Number.parseInt(process.env.PORT, 10) || 3000,
	MONGODB_SRV: process.env.MONGO_SVR,
});
