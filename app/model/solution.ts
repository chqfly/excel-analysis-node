import { Application } from 'egg';

export default (app: Application) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const SolutionSchema = new Schema({
    name: [{
      type: String,
      required: true,
    }],
  });

  return mongoose.model('Solution', SolutionSchema);
};
