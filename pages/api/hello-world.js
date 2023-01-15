import { authenticateShopifyAPI } from "@bluebeela/nextjs-shopify-auth";

export default async function helloWorld(req, res) {
  return await res.json({ hello: "world" });
};
