const DEV_BASE_URL = 'http://localhost/dithole-consulting';
const PROD_BASE_URL = 'https://dithole.co.za';
export const NODE_ENV = process.env.NODE_ENV || 'development';

export const BASE_URL = NODE_ENV === 'development' ? DEV_BASE_URL : PROD_BASE_URL;