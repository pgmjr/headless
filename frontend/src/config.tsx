export const prot = process.env.NEXT_PUBLIC_API_PROTOCOL || 'http';
export const host = process.env.NEXT_PUBLIC_API_HOST || 'localhost';
export const port = process.env.NEXT_PUBLIC_API_PORT || `3000`;
export const api = process.env.NEXT_PUBLIC_LARAVEL_HOST || 'api';
export const apiPort = process.env.NEXT_PUBLIC_LARAVEL_PORT || `5000`;
export const wpAdmin = process.env.NEXT_PUBLIC_WORDPRESS_HOST || 'admin';
export const wpAdminPort = process.env.NEXT_PUBLIC_WORDPRESS_PORT || `8000`;

export const publicOrigin = `${prot}://${host}${port === '80' ? '' : ':' + port}`;
export const apiOrigin = `${prot}://${api}.${host}${port === '80' ? '' : ':' + apiPort}`;
export const wpOrigin = `${prot}://${wpAdmin}.${host}${port === '80' ? '' : ':' + wpAdminPort}`;

export default publicOrigin;