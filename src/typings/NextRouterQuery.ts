import { NextRouter } from 'next/router';

export type NextRouterQuery<T> = NextRouter & { query: T };
