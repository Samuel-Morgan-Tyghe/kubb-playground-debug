import { defineConfig } from "@kubb/core";
import { pluginOas } from "@kubb/plugin-oas";
import { pluginClient } from "@kubb/swagger-client";
import { pluginFaker } from "@kubb/swagger-faker";
import { pluginMsw } from "@kubb/swagger-msw";
import { pluginTanstackQuery } from "@kubb/swagger-tanstack-query";
import { pluginTs } from "@kubb/swagger-ts";

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  hooks: {
    done: ["yarn lint:gen:fix"],
  },
  input: {
    path: "./scripts/genYaml/api-documentation.yaml",
  },
  output: {
    clean: true,
    path: "./src/gen",
  },
  plugins: [
    pluginClient({
      client: {
        importPath: "@configs/kubb/customClientAxios",
      },
      dataReturnType: "data",
      group: { output: "./axios/{{tag}}Service", type: "tag" },
      output: {
        path: "./axios",
      },
      transformers: {
        name: (name) => `${name}Service`,
      },
    }),
    pluginOas({ output: false }),
    pluginTs({
      enumType: "enum",
      group: {
        output: "./types/{{tag}}",
        type: "tag",
      },
    }),
    pluginMsw({
      group: {
        output: "./msw/{{tag}}",
        type: "tag",
      },
      output: {
        path: "./msw",
      },
    }),
    pluginFaker({
      group: {
        output: "./mocks/{{tag}}",
        type: "tag",
      },
      output: {
        path: "./mocks",
      },
      seed: [100],
    }),
    pluginTanstackQuery({
      client: { importPath: "@configs/kubb/customClientQuery" },
      dataReturnType: "full",
      group: {
        output: "./hooks/{{tag}}",
        type: "tag",
      },
      mutate: {
        methods: ["post", "put", "delete"],
        variablesType: "mutate",
      },
    }),
  ],
});
