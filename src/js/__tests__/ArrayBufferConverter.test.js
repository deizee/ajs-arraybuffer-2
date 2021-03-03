import getBuffer from '../getBuffer';
import ArrayBufferConverter from '../ArrayBufferConverter';

test('Метод toString должен возвращать правильную строку', () => {
  const buf = getBuffer();
  const bufConv = new ArrayBufferConverter();
  bufConv.load(buf);
  // console.log(bufConv.toString());
  const str = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

  expect(bufConv.toString()).toBe(str);
});
