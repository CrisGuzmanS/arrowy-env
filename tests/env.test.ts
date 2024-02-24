import { env } from '../src/env';

describe('env function', () => {
  beforeAll(() => {
    process.env.TEST_VARIABLE = 'test_value';
    process.env.NUMBER_VARIABLE = "";
  });

  afterAll(() => {
    delete process.env.TEST_VARIABLE;
  });

  it('should return the value of the specified environment variable', () => {
    const result = env('TEST_VARIABLE');
    expect(result).toEqual('test_value');
  });

  it('should return null for undefined environment variable', () => {
    const result = env('UNDEFINED_VARIABLE');
    expect(result).toBeNull();
  });

  it('should return default value for undefined environment variable', () => {
    const result = env('UNDEFINED_VARIABLE', 'default');
    expect(result).toEqual('default');
  });
});
