// scripts/sync-env.js
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";

const rootEnvPath = path.resolve( ".env" );

const envMappings = {
  cms: {
    path: path.resolve( "cms/.env" ),
    keys: [
      "DB_NAME",
      "DB_USER",
      "DB_PASS",
      "DB_HOST",
      "DB_PORT",
      "WORDPRESS_URL",
      "WORDPRESS_API_URL",
      "WORDPRESS_GRAPHQL_ENDPOINT",
      "WORDPRESS_APPLICATION_PASSWORD",
      "WORDPRESS_AUTH_TOKEN",
      "WORDPRESS_APP_PASSWORD",
      "WORDPRESS_JWT_ENDPOINT",
      "WORDPRESS_JWT_SECRET",
      "WORDPRESS_PREVIEW_SECRET"
    ]
  },
  frontend: {
    path: path.resolve( "frontend/.env" ),
    keys: [
      "NEXT_PUBLIC_SITE_NAME",
      "NEXT_PUBLIC_BASE_URL",
      "NEXT_PUBLIC_WORDPRESS_API_URL",
      "NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT",
      "NEXT_PUBLIC_WORDPRESS_URL",
      "NEXT_PUBLIC_WORDPRESS_PREVIEW_SECRET",
      "NEXT_PUBLIC_API_URL",
      "NEXT_PUBLIC_SANCTUM_CSRF_COOKIE",
      "NEXT_PUBLIC_JWT_LOGIN_ENDPOINT",
      "NEXT_PUBLIC_JWT_REGISTER_ENDPOINT",
      "NEXT_PUBLIC_GOOGLE_ANALYTICS_ID",
      "NEXT_PUBLIC_RECAPTCHA_SITE_KEY",
      "NEXT_PUBLIC_ENABLE_PREVIEW",
      "NEXT_PUBLIC_FEATURE_FLAG",
      "NEXT_PUBLIC_I18N_DEFAULT_LOCALE",
      "NEXT_PUBLIC_I18N_SUPPORTED_LOCALES",
      "NEXT_PUBLIC_I18N_LOCALE_PATH"
    ]
  },
  backend: {
    path: path.resolve( "backend/.env" ),
    keys: [
      "DB_DATABASE",
      "DB_USERNAME",
      "DB_PASSWORD",
      "DB_HOST",
      "DB_PORT",
      "BACKEND_URL",
      "APP_NAME",
      "APP_ENV",
      "APP_KEY",
      "APP_DEBUG",
      "APP_URL",
      "JWT_SECRET",
      "JWT_TTL",
      "JWT_REFRESH_TTL",
      "SESSION_DOMAIN",
      "SANCTUM_STATEFUL_DOMAINS",
      "SANCTUM_CSRF_COOKIE_NAME",
      "API_RATE_LIMIT",
      "API_TOKEN_NAME",
      "API_SECRET_KEY",
      "LOG_CHANNEL",
      "LOG_LEVEL",
      "MAIL_MAILER",
      "MAIL_HOST",
      "MAIL_PORT",
      "MAIL_USERNAME",
      "MAIL_PASSWORD",
      "MAIL_ENCRYPTION",
      "MAIL_FROM_ADDRESS",
      "MAIL_FROM_NAME",
      "REDIS_HOST",
      "REDIS_PORT",
      "REDIS_PASSWORD",
      "REDIS_DB",
      // Include WP so Laravel can fetch posts/pages
      "WORDPRESS_URL",
      "WORDPRESS_API_URL",
      "WORDPRESS_GRAPHQL_ENDPOINT",
      "WORDPRESS_PREVIEW_SECRET"
    ]
  }
};

const target = process.argv[ 2 ];

if ( !target || ( !envMappings[ target ] && target !== "all" ) ) {
  console.error( `Please specify one of: ${ Object.keys( envMappings ).join( ", " ) } or "all"` );
  process.exit( 1 );
}

let rootEnv = dotenv.config( { path: rootEnvPath } );
rootEnv = dotenvExpand.expand( rootEnv ).parsed;

function writeEnv( targetName ) {
  const { path: targetPath, keys } = envMappings[ targetName ];
  const dir = path.dirname( targetPath );

  if ( !fs.existsSync( dir ) ) {
    fs.mkdirSync( dir, { recursive: true } );
  }

  if ( fs.existsSync( targetPath ) ) {
    fs.unlinkSync( targetPath );
  }

  const filtered = keys
    .filter( ( k ) => rootEnv[ k ] !== undefined )
    .map( ( k ) => `${ k }=${ rootEnv[ k ] }` )
    .join( "\n" );

  fs.writeFileSync( targetPath, filtered );
  console.log( `Wrote ${ keys.length } vars to ${ targetPath }` );
}

if ( target === "all" ) {
  Object.keys( envMappings ).forEach( writeEnv );
} else {
  writeEnv( target );
}
