/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    POKEMON_ASSET_BASE_URL:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail",
  },
  images: {
    domains: ["assets.pokemon.com"],
  },
};

module.exports = nextConfig;
