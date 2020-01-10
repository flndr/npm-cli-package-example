#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

const app  = require( './index.js' );
const args = process.argv.slice( 2 );

app( args[ 0 ] );
