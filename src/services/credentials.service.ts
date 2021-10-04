export const backendUrl = 'http://localhost:8080/api/';
export const ENV = 'dev';

//web socket
// export const cleanBackendUrl = `wss://${
//   backendUrl.split('api')[0].split('//')[1]
// }`;

//long polling
export const cleanBackendUrl = backendUrl.split('api')[0];
// export const cleanBackendUrl = 'wss://192.168.1.5:8080/';
