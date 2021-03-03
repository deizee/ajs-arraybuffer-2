export default class ArrayBufferConverter {
  constructor() {
    this.storage = null;
  }

  load(buffer) {
    this.storage = buffer;
  }

  toString() {
    const bufferView = new Uint16Array(this.storage);
    return [...bufferView].reduce((acc, prev) => {
      // eslint-disable-next-line no-param-reassign
      acc += String.fromCharCode(prev);
      return acc;
    }, '');
  }
}
