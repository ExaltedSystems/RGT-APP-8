import { TranslatePipe } from './translate.pipe.pipe';

describe('TranslatePipe', () => {
  it('create an instance', () => {
    const pipe = new TranslatePipe(null);
    expect(pipe).toBeTruthy();
  });
});