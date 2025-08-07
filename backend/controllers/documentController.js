  import Document from '../models/Document.js';

  // Get all documents
  export const getAllDocuments = async (req, res) => {
    try {
      const documents = await Document.find();
      res.status(200).json({
        success: true,
        count: documents.length,
        data: documents
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  };

  // Get single document by ID
  export const getDocumentById = async (req, res) => {
    try {
      const document = await Document.findById(req.params.id);
      
      if (!document) {
        return res.status(404).json({
          success: false,
          error: 'Document not found'
        });
      }

      res.status(200).json({
        success: true,
        data: document
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  };