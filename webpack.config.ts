import {buildWebpack} from "./config/build/buildWebpack";
import {buildMode, buildPaths, buildPlatform} from "./config/build/types/types"
import path from "path";

interface EnvVariables {
    port?: number;
    mode?: buildMode;
    analyzer?: Boolean;
    platform?: buildPlatform;
}

export default (env: EnvVariables) => {

    const paths: buildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        public: path.resolve(__dirname, 'public'),
        src: path.resolve(__dirname, 'src'),
    }

    return buildWebpack({
        port: env.port ?? 3000,
        mode: env.mode ?? 'development',
        platform: env.platform ?? 'desktop',
        paths,
        analyzer: env.analyzer,
    });
}