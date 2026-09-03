// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // Alias `node:util` to a local shim so the project can build in environments
  // where `styleText` is not present on the built-in `node:util` (e.g., Node < 20).
  // Lovable may run older Node; this prevents build-time crashes in rolldown.
  vite: {
    resolve: {
      alias: [
        { find: "node:util", replacement: "/src/shims/node-util.js" },
      ],
    },
  },
});
