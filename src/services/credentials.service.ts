export const ENV = 'dev';
export const backendUrl = 'https://api-dev.domain.com/api/';

//web socket
// export const cleanBackendUrl = `wss://${
//   backendUrl.split('api')[0].split('//')[1]
// }`;

//long polling
export const cleanBackendUrl = backendUrl.split('api')[0];
