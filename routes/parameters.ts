import express from 'express';
import { getAllParameters, addParameter, updateParameter } from '../controllers/parametersController'; // Import the controller function

const router = express.Router();

// Route to fetch all parameters
router.get('/', getAllParameters);

// Route to create a new parameter
router.post('/', addParameter);

// Route to update details of a specific parameter
router.patch('/:id', updateParameter);
// ... Other parameter routes ...

export default router;