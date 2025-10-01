const SubresourceIntegrityPlugin = require( 'webpack-subresource-integrity' ).SubresourceIntegrityPlugin;

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack( config, { dev, isServer } ) {
    if ( dev ) {
      // Filter out the SubresourceIntegrityPlugin in development
      config.plugins = config.plugins.filter(
        ( plugin ) =>
          plugin.constructor.name !== 'SubresourceIntegrityPlugin'
      );

      // Disable crossorigin for development
      config.output.crossOriginLoading = false;
    }

    return config;
  },
};

module.exports = nextConfig;
