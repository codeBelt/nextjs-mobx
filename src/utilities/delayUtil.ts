export const delay = (duration = 250) => new Promise((resolve) => setTimeout(resolve, duration));

export const delayApi = async <T>(list: (T | PromiseLike<T>)[], duration: number = 250): Promise<T[]> => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const results: any[] = await Promise.all([...list, delay(duration)]);

  return results.slice(0, -1);
};
