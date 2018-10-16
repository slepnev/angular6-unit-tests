import { compute } from './compute';

describe('compute', () => {
  it('should return 0 if input is negative', () => {
    const resault = compute(-1);
    expect(resault).toBe(0);
  });

  it('should increment the input if it is positiove', () => {
    const resault = compute(1);
    expect(resault).toBe(2);
  });
});
