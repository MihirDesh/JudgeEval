import { Request, Response } from 'express';
import { fetchAllParameters, createNewParameter, updateParameterDetails } from './dbFunctions'; // Import the database function

export const getAllParameters = async (req: Request, res: Response) => {
    try {
        const parameters = await fetchAllParameters();
        res.json(parameters);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching parameters');
    }
};

export const addParameter = async (req: Request, res: Response) => {
    const { name, description } = req.body;

    try {
        const newParameter = await createNewParameter(name, description);
        res.status(201).json(newParameter);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error creating a new parameter');
    }
};

export const updateParameter = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, description } = req.body;

    try {
        const updatedParameter = await updateParameterDetails(Number(id), name, description);

        if (updatedParameter) {
            res.json(updatedParameter);
        } else {
            res.status(404).send('Parameter not found');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error updating parameter details');
    }
};