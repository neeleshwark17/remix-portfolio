// vite.config.js
import { vitePlugin as remix } from "file:///C:/Users/SAM/Desktop/CODE/portfolio-master/node_modules/@remix-run/dev/dist/index.js";
import { defineConfig } from "file:///C:/Users/SAM/Desktop/CODE/portfolio-master/node_modules/vite/dist/node/index.js";
import jsconfigPaths from "file:///C:/Users/SAM/Desktop/CODE/portfolio-master/node_modules/vite-jsconfig-paths/dist/index.mjs";
import mdx from "file:///C:/Users/SAM/Desktop/CODE/portfolio-master/node_modules/@mdx-js/rollup/index.js";
import remarkFrontmatter from "file:///C:/Users/SAM/Desktop/CODE/portfolio-master/node_modules/remark-frontmatter/index.js";
import remarkMdxFrontmatter from "file:///C:/Users/SAM/Desktop/CODE/portfolio-master/node_modules/remark-mdx-frontmatter/index.js";
import rehypeImgSize from "file:///C:/Users/SAM/Desktop/CODE/portfolio-master/node_modules/rehype-img-size/index.js";
import rehypeSlug from "file:///C:/Users/SAM/Desktop/CODE/portfolio-master/node_modules/rehype-slug/index.js";
import rehypePrism from "file:///C:/Users/SAM/Desktop/CODE/portfolio-master/node_modules/@mapbox/rehype-prism/index.js";
var vite_config_default = defineConfig({
  assetsInclude: ["**/*.glb", "**/*.hdr", "**/*.glsl"],
  build: {
    assetsInlineLimit: 1024
  },
  server: {
    port: 7777
  },
  plugins: [
    mdx({
      rehypePlugins: [[rehypeImgSize, { dir: "public" }], rehypeSlug, rehypePrism],
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      providerImportSource: "@mdx-js/react"
    }),
    remix({
      routes(defineRoutes) {
        return defineRoutes((route) => {
          route("/", "routes/home/route.js", { index: true });
        });
      }
    }),
    jsconfigPaths()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxTQU1cXFxcRGVza3RvcFxcXFxDT0RFXFxcXHBvcnRmb2xpby1tYXN0ZXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFNBTVxcXFxEZXNrdG9wXFxcXENPREVcXFxccG9ydGZvbGlvLW1hc3RlclxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvU0FNL0Rlc2t0b3AvQ09ERS9wb3J0Zm9saW8tbWFzdGVyL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgdml0ZVBsdWdpbiBhcyByZW1peCB9IGZyb20gJ0ByZW1peC1ydW4vZGV2JztcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IGpzY29uZmlnUGF0aHMgZnJvbSAndml0ZS1qc2NvbmZpZy1wYXRocyc7XG5pbXBvcnQgbWR4IGZyb20gJ0BtZHgtanMvcm9sbHVwJztcbmltcG9ydCByZW1hcmtGcm9udG1hdHRlciBmcm9tICdyZW1hcmstZnJvbnRtYXR0ZXInO1xuaW1wb3J0IHJlbWFya01keEZyb250bWF0dGVyIGZyb20gJ3JlbWFyay1tZHgtZnJvbnRtYXR0ZXInO1xuaW1wb3J0IHJlaHlwZUltZ1NpemUgZnJvbSAncmVoeXBlLWltZy1zaXplJztcbmltcG9ydCByZWh5cGVTbHVnIGZyb20gJ3JlaHlwZS1zbHVnJztcbmltcG9ydCByZWh5cGVQcmlzbSBmcm9tICdAbWFwYm94L3JlaHlwZS1wcmlzbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGFzc2V0c0luY2x1ZGU6IFsnKiovKi5nbGInLCAnKiovKi5oZHInLCAnKiovKi5nbHNsJ10sXG4gIGJ1aWxkOiB7XG4gICAgYXNzZXRzSW5saW5lTGltaXQ6IDEwMjQsXG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDc3NzcsXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICBtZHgoe1xuICAgICAgcmVoeXBlUGx1Z2luczogW1tyZWh5cGVJbWdTaXplLCB7IGRpcjogJ3B1YmxpYycgfV0sIHJlaHlwZVNsdWcsIHJlaHlwZVByaXNtXSxcbiAgICAgIHJlbWFya1BsdWdpbnM6IFtyZW1hcmtGcm9udG1hdHRlciwgcmVtYXJrTWR4RnJvbnRtYXR0ZXJdLFxuICAgICAgcHJvdmlkZXJJbXBvcnRTb3VyY2U6ICdAbWR4LWpzL3JlYWN0JyxcbiAgICB9KSxcbiAgICByZW1peCh7XG4gICAgICByb3V0ZXMoZGVmaW5lUm91dGVzKSB7XG4gICAgICAgIHJldHVybiBkZWZpbmVSb3V0ZXMocm91dGUgPT4ge1xuICAgICAgICAgIHJvdXRlKCcvJywgJ3JvdXRlcy9ob21lL3JvdXRlLmpzJywgeyBpbmRleDogdHJ1ZSB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH0pLFxuICAgIGpzY29uZmlnUGF0aHMoKSxcbiAgXSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE0VCxTQUFTLGNBQWMsYUFBYTtBQUNoVyxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLG1CQUFtQjtBQUMxQixPQUFPLFNBQVM7QUFDaEIsT0FBTyx1QkFBdUI7QUFDOUIsT0FBTywwQkFBMEI7QUFDakMsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxpQkFBaUI7QUFFeEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsZUFBZSxDQUFDLFlBQVksWUFBWSxXQUFXO0FBQUEsRUFDbkQsT0FBTztBQUFBLElBQ0wsbUJBQW1CO0FBQUEsRUFDckI7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsTUFDRixlQUFlLENBQUMsQ0FBQyxlQUFlLEVBQUUsS0FBSyxTQUFTLENBQUMsR0FBRyxZQUFZLFdBQVc7QUFBQSxNQUMzRSxlQUFlLENBQUMsbUJBQW1CLG9CQUFvQjtBQUFBLE1BQ3ZELHNCQUFzQjtBQUFBLElBQ3hCLENBQUM7QUFBQSxJQUNELE1BQU07QUFBQSxNQUNKLE9BQU8sY0FBYztBQUNuQixlQUFPLGFBQWEsV0FBUztBQUMzQixnQkFBTSxLQUFLLHdCQUF3QixFQUFFLE9BQU8sS0FBSyxDQUFDO0FBQUEsUUFDcEQsQ0FBQztBQUFBLE1BQ0g7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELGNBQWM7QUFBQSxFQUNoQjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
