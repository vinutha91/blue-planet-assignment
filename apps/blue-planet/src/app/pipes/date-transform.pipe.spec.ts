import { DateTransformPipe } from './date-transform.pipe';

describe('DateTransformPipe', () => {
  it('create an instance', () => {
    const pipe = new DateTransformPipe();
    expect(pipe).toBeTruthy();
  });

  it('should have a method transform which accepts a date and returns ISO string', () => {
    const pipe = new DateTransformPipe();
    const date = new Date('2019-12-17T19:54:56.000Z');
    const transformedDate = pipe.transform(date.toString());
    expect(transformedDate).toEqual('2019-12-17T19:54:56.000Z')
  })
});
