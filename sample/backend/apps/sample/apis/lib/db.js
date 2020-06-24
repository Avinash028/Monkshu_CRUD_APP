//Set up mongoose connection
const mongoose = require(`${CONSTANTS.APPROOTDIR}/sample/3p/node_modules/mongoose`);
const mongoDB = 'mongodb+srv://avi:avi@cluster0-k3bnm.mongodb.net/<dbname>?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const Schema = mongoose.Schema;

const ItemSchema = new Schema(
  {
    item: {type: String, required: true, maxlength: 100},
    price: {type: Number, required: true, maxlength: 100},
  }
);

module.exports.Items = mongoose.model('Item', ItemSchema);