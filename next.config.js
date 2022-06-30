module.exports = {
  headers: async () => [
    {
      source: '/.well-known/apple-app-site-association',
      headers: [
        { key: 'Content-Type', value: 'application/json' },
        { key: 'Access-Control-Allow-Origin', value: '*' },
      ],
    },
  ],
  reactStrictMode: true,
  env: {
    appIcon: '/public/favicon.ico',
    appName: 'FE Starter',
    appDescription: 'Build to boost development start up vs starting from scratch.',
  },
  /**
   * Options for experimental features, but will be great to explore it ahead.
   * @concurrentFeatures used to support react lazy import (counterpart for dynamic import)
   * @serverComponents used to support react server components
   * https://nextjs.org/docs/advanced-features/react-18
   */
  concurrentFeatures: true,
  serverComponents: true,
}
