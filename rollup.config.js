import rollupPluginHTML from '@open-wc/rollup-plugin-html';
import commonjs from '@rollup/plugin-node-resolve';
import nodeResolve from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy';
import typescript from '@rollup/plugin-typescript';

const config = {
    input: 'index.html',
    output: {
        dir: 'dist',
        format: 'es'
    },
    plugins: [
        rollupPluginHTML({
            input: 'index.html'
        }),
        nodeResolve(),
        commonjs(),
        typescript({
            sourceMap: true
        }),
        copy({
            targets: [
                {
                    src: "assets/*",
                    dest: 'dist/assets/'
                }
            ]
        })
    ]
}

export default { ...config};