/*
 * Base is the default environment for production.
 * Add everything here and override value in other files if needed.
 * https://blog.usejournal.com/my-awesome-custom-react-environment-variables-setup-8ebb0797d8ac
 */
export default function baseEnv(baseApi: string) {
  return {
    route: {
      baseRoute: '',
    },
    api: {
      cast: `${baseApi}/shows/:showId/cast`,
      episodes: `${baseApi}/shows/:showId/episodes`,
      shows: `${baseApi}/shows/:showId`,
      showsSearch: `${baseApi}/search/shows?q=:searchTerm`,
      errorExample: 'https://httpstat.us/520',
    },
    isServer: typeof window === 'undefined',
    isProduction: true,
    isDevelopment: false,
    isTesting: false,
  };
}

export type Environment = ReturnType<typeof baseEnv>;
