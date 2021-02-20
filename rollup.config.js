// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import nodePolyfills from 'rollup-plugin-node-polyfills';

const dist = 'dist';

export default {
    input: 'src/index.js',
    output: [
        {
            file: `${dist}/bundle.cjs.js`,
            format: 'cjs'
        },
        {
            file: `${dist}/bundle.esm.js`,
            format: 'esm'
        },
        {
            name: '@servesall/molecules',
            file: `${dist}/bundle.umd.js`,
            format: 'umd',
            globals: {
                'react': 'React',
                '@emotion/native': '@emotion/native',
                'emotion-theming': 'emotion-theming',
                'react-native': 'react-native',
                'react-native-reanimated': 'react-native-reanimated',
                'react-native-gesture-handler': 'react-native-gesture-handler',
                'react-native-status-bar-height' : 'react-native-status-bar-height',
            },
        },
    ],
    plugins: [
        json(),
        resolve({
            extensions: ['.js', '.jsx', '.json']
        }),
        commonjs({
            namedExports: {
                'react-is': Object.keys(require('react-is')),
            },
            include: /node_modules/
        }),
        nodePolyfills(),
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**',
        })
    ],
    external: [
        'react',
        '@emotion/native',
        'emotion-theming',
        'react-native',
        'react-native-reanimated',
        'react-native-gesture-handler',
        'react-native-status-bar-height',
    ]
};
