"use strict";

module.exports = function ( context, opts ) {
    return {
        presets: [
            [ require( "babel-preset-env" ), opts ],
            require( "babel-preset-bluebird" ),
            require( "babel-preset-flow" )
        ],
        plugins: [
            [ require( "babel-plugin-conditional-compilation" ).default, { "DEBUG": process.env.BABEL_ENV === "development" } ],
            require( "babel-plugin-transform-class-properties" ),
            require( "babel-plugin-transform-object-rest-spread" ),
            require( "babel-plugin-transform-runtime" )
        ]
    };
};
