"use strict";

module.exports = function ( context, opts ) {
    return {
        presets: [
            [ require( "babel-preset-env" ), opts ],
            require( "babel-preset-bluebird" )
        ],
        plugins: [
            require( "babel-plugin-transform-flow-strip-types" ),
            require( "babel-plugin-transform-object-rest-spread" ),
            require( "babel-plugin-transform-runtime" )
        ]
    };
};
