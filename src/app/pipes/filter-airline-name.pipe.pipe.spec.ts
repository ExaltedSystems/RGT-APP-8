import { FilterAirlineNamePipe } from './filter-airline-name.pipe.pipe';

describe('FilterAirlineNamePipe', () => {
  it('create an instance', () => {
    const pipe = new FilterAirlineNamePipe();
    expect(pipe).toBeTruthy();
  });
});