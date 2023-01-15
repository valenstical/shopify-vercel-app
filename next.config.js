module.exports = {
  env: {
    NEXT_PUBLIC_SHOPIFY_API_KEY: process.env.NEXT_PUBLIC_SHOPIFY_API_KEY,
    NEXT_PUBLIC_HOST: process.env.NEXT_PUBLIC_HOST,
    NEXT_PUBLIC_SHOPIFY_API_SECRET: process.env.NEXT_PUBLIC_SHOPIFY_API_SECRET,
  },

  async redirects() {
    return [
      {
        source: "/auth",
        destination: "/api/shopify/auth",

        // Set this to true if you're sure you'll never use the /auth page (beware, permanent redirects as they are difficult to invalidate in clients)
        permanent: false,
      },
    ];
  },
};
