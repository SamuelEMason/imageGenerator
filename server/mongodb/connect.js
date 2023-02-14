import mongoose from 'mongoose';

const connectDB = async (url) => {
	mongoose.set('strictQuery', true);

	try {
			const conn = await mongoose.connect(process.env.MONGODB_URL);

			console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
		} catch (error) {
			console.log(error);
			process.exit(1);
		}
};

export default connectDB;