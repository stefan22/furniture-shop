module.exports = function overrideCRA(config, env) {
  console.log(`
  ∞  ¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶ ∞
     …………………………………………………………………

  ∞    .... override OK ...... ∞

     …………………………………………………………………
  ∞  ¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶ ∞
 `);

   //node_modules/react-scripts/config/webpack.config.dev

   let loaders = config.module.rules[2].oneOf;
   // second-to-last
   loaders.splice(loaders.length - 1, 0, {

      test: /\.scss$/,
      use: ["style-loader","css-loader","sass-loader"]

   });

   return config;

}; // overrideCRA





