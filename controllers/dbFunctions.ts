import queryDatabase from '../database/connection';

export async function updateTeamDetails(id: number, name: string, members: string) {
    const query = 'UPDATE teams SET name = $1, members = $2 WHERE id = $3 RETURNING *';
    return queryDatabase(query, [name, members, id]);
}

export async function fetchAllParameters() {
    const query = 'SELECT * FROM parameters';
    return queryDatabase(query);
}

export async function createNewParameter(name: string, description: string) {
    const query = 'INSERT INTO parameters (name, description) VALUES ($1, $2) RETURNING *';
    return queryDatabase(query, [name, description]);
}

export async function updateParameterDetails(id: number, name: string, description: string) {
    const query = 'UPDATE parameters SET name = $1, description = $2 WHERE id = $3 RETURNING *';
    return queryDatabase(query, [name, description, id]);
}