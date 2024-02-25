import { Sequelize } from "sequelize-typescript";
import { Penguin } from "../models/penguinDB";
import { readFileSync } from 'fs';

function getPasswordFromFile(filePath: string): string {
    try {
        const data = readFileSync(filePath, 'utf-8');
        return data.trim();

    } catch (error) {
        if (error instanceof Error) {
            console.error(`Error reading password file: ${error.message}`);
        } else {
            console.error('Unexpected error type:', typeof error);
        }
            throw error;
    }
}

const connection = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: getPasswordFromFile('../../../pw.txt'),
    database: "penguin",
    logging: false,
    models: [Penguin]
});

export default connection;
