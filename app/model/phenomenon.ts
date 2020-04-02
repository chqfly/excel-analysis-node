import { Application } from 'egg';

export default (app: Application) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const ObjectId = Schema.Types.ObjectId;

  const PhenomenonSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    reasons: [{
      type: ObjectId,
      ref: 'Reason',
    }],
  });

  return mongoose.model('Phenomenon', PhenomenonSchema);
};
