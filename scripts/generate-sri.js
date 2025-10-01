const fs = require( 'fs' );
const path = require( 'path' );
const crypto = require( 'crypto' );

// 🔧 Configure this to point to your public asset files
const files = [
  'public/script.js',
  'public/style.css',
];

// Optional: Write results to JSON (for templating later)
const sriMap = {};

files.forEach( file => {
  const fullPath = path.resolve( __dirname, '..', file );
  const content = fs.readFileSync( fullPath );
  const hash = crypto.createHash( 'sha384' ).update( content ).digest( 'base64' );
  const integrity = `sha384-${ hash }`;

  sriMap[ file.replace( /^public\//, '' ) ] = integrity;

  console.log( `${ file }: ${ integrity }` );
} );

// ✏️ Optional: Write output to file for use in app
fs.writeFileSync(
  path.resolve( __dirname, '../sri-manifest.json' ),
  JSON.stringify( sriMap, null, 2 )
);
