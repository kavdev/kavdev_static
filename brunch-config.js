exports.files = {
    javascripts: {
        joinTo: "app.js"
    },
    stylesheets: {
        joinTo: {
            "app.css": /scss\/base\.scss/,
        }
    },
};

exports.sourceMaps = "inline"

exports.plugins = {
    autoReload: {
        enabled: {
          css: true,
          js: true,
          assets: true
        },
    },
    postcss: {
        processors: [
            require("autoprefixer")()
        ],
        options: {
            parser: require("postcss-scss")
        }
    },
    babel: {
        presets: [
            ["@babel/preset-env", {"useBuiltIns": "entry", "corejs": 3}],
        ],
        plugins: [
            "@babel/plugin-proposal-class-properties",
        ],
    },
    terser: {
        mangle: false,
    },
};

exports.modules = {
    autoRequire: {
        "js/app.js": ["app/js/initialize"]
    }
}
