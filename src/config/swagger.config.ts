import { registerAs } from '@nestjs/config';

export default registerAs('swagger-config', () => ({
    title: process.env.SWAGGER_TITLE || 'hello-react-church-api',
    description:
        process.env.SWAGGER_DESCRIPTION || 'test api of the hello-react-church-api',
}));
