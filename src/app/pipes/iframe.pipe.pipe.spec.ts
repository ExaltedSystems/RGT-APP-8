import { IframePipe } from "./iframe.pipe.pipe";

describe('IframePipe', () => {
  it('create an instance', () => {
    const pipe = new IframePipe(null);
    expect(pipe).toBeTruthy();
  });
});