import dotenv from 'dotenv';
import { join } from 'path';
dotenv.config({
    path: join(process.cwd(), '.env')
});
export const env = (variable, defaultValue) => {
    return process.env[variable] || (typeof defaultValue == 'undefined' ? null : defaultValue);
};
