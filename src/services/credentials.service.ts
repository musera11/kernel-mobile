export const ENV = 'dev';
export const backendUrl = 'https://dev.kernel.tools/api/';

//web socket
// export const cleanBackendUrl = `wss://${
//   backendUrl.split('api')[0].split('//')[1]
// }`;

//long polling
export const cleanBackendUrl = backendUrl.split('api')[0];
