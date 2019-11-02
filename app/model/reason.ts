import { Application } from 'egg';

export default (app: Application) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const ObjectId = Schema.Types.ObjectId;

  const ReasonSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    solutions: [{
      type: ObjectId,
      ref: 'Solution',
    }],
  });

  return mongoose.model('Reason', ReasonSchema);
};
