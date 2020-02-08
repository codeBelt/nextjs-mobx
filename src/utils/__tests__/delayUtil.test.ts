import { delay, delayApi } from '../delayUtil';

describe('delay()', () => {
  test('should delay for the default amount of time', async () => {
    const defaultDelayValue = 250;

    jest.useFakeTimers();

    Promise.resolve().then(() => jest.advanceTimersByTime(defaultDelayValue));

    await delay();
  });

  test('should delay for a custom amount of time', async () => {
    const customDelayValue = 100;

    jest.useFakeTimers();

    Promise.resolve().then(() => jest.advanceTimersByTime(customDelayValue));

    await delay(customDelayValue);
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mockApi = async (duration: number, returnValue: any) => {
  await new Promise((resolve) => setTimeout(resolve, duration));

  return returnValue;
};

describe('delayApi', () => {
  test('should delay for the default amount of time and return correct responses', async () => {
    const expectedDelayTime = 250;

    jest.useFakeTimers();

    Promise.resolve().then(() => jest.advanceTimersByTime(expectedDelayTime));

    const list = await delayApi([mockApi(100, false)]);

    expect(list).toEqual([false]);
  });

  test('should delay for more than default amount of time and return correct responses', async () => {
    const expectedDelayTime = 500;

    jest.useFakeTimers();

    Promise.resolve().then(() => jest.advanceTimersByTime(expectedDelayTime));

    const list = await delayApi([mockApi(100, false), mockApi(200, true), mockApi(300, []), mockApi(expectedDelayTime, {})]);

    expect(list).toEqual([false, true, [], {}]);
  });
});
