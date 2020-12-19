import mongoose, { Mongoose } from 'mongoose';

class MongoMock {
  private database!: Mongoose;

  async connect(): Promise<void> {
    this.database = await mongoose.connect(
      'mongodb+srv://augusto:augusto@augusto.9aslu.mongodb.net/IliaMoviesTests',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
        autoCreate: true,
      },
    );
  }

  disconnect(): Promise<void> {
    return this.database.connection.close();
  }
}

export default new MongoMock();
