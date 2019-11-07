import { Application } from 'egg';

export default (app: Application) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const FaultSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    reasons: [{
      name: {
        type: String,
      },
      solution: {
        type: String,
      },
    }],
  });

  return mongoose.model('Fault', FaultSchema);
};
