import mongoose from 'mongoose';

const documentSchema = new mongoose.Schema({
  executionId: {
    type: String,
    required: true,
    unique: true
  },
  fileName: {
    type: String,
    required: true
  },
  fileType: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'rejected'],
    default: 'pending'
  },
  startTime: {
    type: String,
    required: true
  },
  endTime: {
    type: String,
    default: ''
  },
  reviewStatus: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  },
  environment: {
    type: String,
    enum: ['dev', 'prod'],
    default: 'dev'
  },
  fields: [
    {
      key: {
        type: String,
        required: true
      },
      value: {
        type: String,
        required: true
      },
      confidence: {
        type: Number,
        required: true,
        min: 0,
        max: 100
      },
      category: {
        type: String,
        required: true
      }
    }
  ]
}, {
  timestamps: true
});

export default mongoose.model('Document', documentSchema); 