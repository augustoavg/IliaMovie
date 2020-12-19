import mongoose from 'mongoose';

class Database {
  public mongoConnection: Promise<mongoose.Mongoose>;

  constructor() {
    this.init();
  }

  private init(): void {
    this.mongoConnection = mongoose
      .connect(
        'mongodb+srv://augusto:augusto@augusto.9aslu.mongodb.net/IliaMovies',
        {
          useNewUrlParser: true,
          useFindAndModify: false,
          useUnifiedTopology: true,
          useCreateIndex: true,
          autoCreate: true,
        },
      )
      .then(() => {
        console.log('🔆 Connection to database established.');
      });
  }
}

export default new Database();
