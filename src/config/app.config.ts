import { registerAs } from '@nestjs/config';

export default registerAs('app-config', () => ({
  port: Number(process.env.APP_PORT) || 3000,
  host: process.env.APP_HOST || 'localhost',
  initialPasswod: {
    sendCredentialsTo: process.env.INITIAL_PASSWOD_SEND_CREDENTIALS_TO || '',
    passwordLength: Number(process.env.INITIAL_PASSWOD_LENGTH) || 15,
  },
}));
