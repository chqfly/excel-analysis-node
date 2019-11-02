import { Application } from 'egg';

export default (app: Application) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const PhenomenonSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
  });

  return mongoose.model('Phenomenon', PhenomenonSchema);
};
