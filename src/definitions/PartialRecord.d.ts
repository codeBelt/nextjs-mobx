/* eslint-disable @typescript-eslint/no-explicit-any */
type PartialRecord<K extends keyof any, T> = {
    [P in K]?: T;
};
