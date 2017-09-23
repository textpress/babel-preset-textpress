"use strict";

module.exports = function ( context, opts ) {
    return {
        presets: [
            [ require( "babel-preset-env" ), opts ],
            require( "babel-preset-bluebird" ),
            require( "babel-preset-flow" )
        ],
        plugins: [
            require( "babel-plugin-transform-object-rest-spread" ),
            require( "babel-plugin-transform-runtime" )
        ]
    };
};
