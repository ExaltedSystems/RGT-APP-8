import { SafeHtmlPipe } from './safe-html.pipe.pipe';

describe('SafeHtmlPipe', () => {
  it('create an instance', () => {
    const pipe = new SafeHtmlPipe(null);
    expect(pipe).toBeTruthy();
  });
});