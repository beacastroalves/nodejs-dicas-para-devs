import mongoose from 'mongoose';

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.vcertxj.mongodb.net/database?retryWrites=true&w=majority&appName=Cluster0`);
    console.log('Conexão ao banco de dados realizada com sucesso!');
  } catch (error) {
    console.log('Ocorreu um erro ao se conectar com o banco de dados:', error);
  }
};

