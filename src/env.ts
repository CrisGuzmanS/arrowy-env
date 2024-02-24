import dotenv from 'dotenv';
import { join } from 'path';

dotenv.config({
    path: join(process.cwd(), '.env')
})

/**
 * Retrieves the value of a specific variable from the environment file 
 * by simply providing the variable name as a parameter.
 */
export const env = (variable: string, defaultValue?: any) => {
    return process.env[variable] || (typeof defaultValue == 'undefined' ? null : defaultValue);
}