import { PriceFilterPipe } from './price-filter.pipe.pipe';

describe('PriceFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new PriceFilterPipe();
    expect(pipe).toBeTruthy();
  });
});