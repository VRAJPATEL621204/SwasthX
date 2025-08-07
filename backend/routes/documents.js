import express from 'express';
import {
  getAllDocuments,
  getDocumentById
} from '../controllers/documentController.js';

const router = express.Router();

//Get all documents
router.get('/', getAllDocuments);

//Get single document
router.get('/:id', getDocumentById);

export default router; 