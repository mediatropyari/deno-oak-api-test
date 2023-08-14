import { Middleware } from "https://deno.land/x/oak@v11.1.0/mod.ts";
export const timingMiddleware: Middleware = async (context, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${context.request.method} ${context.request.url} - ${ms}ms`);
  context.response.headers.set("X-Response-Time", `${ms}ms`);
};
