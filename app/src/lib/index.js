import AES from 'crypto-js/aes';

const getSecretKeyLocal = () => {
  // fileload or get from amazon or something.
  // TODO: load key on startup.
  return '1234567';
};
export const getSecretKey = getSecretKeyLocal;
export const decrypt = value => AES.decrypt(value.toString(), getSecretKeyLocal());
export const encrypt = value => AES.encrypt(value, getSecretKeyLocal()); 
