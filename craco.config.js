module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      const cssMinimizer = webpackConfig.optimization.minimizer.find(
        (minimizer) => minimizer.constructor.name === 'CssMinimizerPlugin'
      );
      
      if (cssMinimizer) {
        cssMinimizer.options.minimizerOptions = {
          ...cssMinimizer.options.minimizerOptions,
          preset: [
            'default',
            {
              calc: false, // Disable calc optimization
            },
          ],
        };
      }
      
      return webpackConfig;
    },
  },
};
