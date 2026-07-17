const mongoose = require('mongoose');

beforeAll(async () => {
  process.env.JWT_SECRET = 'test_secret_key';
  process.env.JWT_EXPIRES_IN = '1h';
  await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/taskmanager_test');
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

afterEach(async () => {
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    await collections[key].deleteMany({});
  }
});
