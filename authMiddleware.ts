import { Middleware } from "https://deno.land/x/oak@v11.1.0/mod.ts";

export const authMiddleware: Middleware = async (context, next) => {
  const authorization = context.request.headers.get("Authorization");

  if (authorization && authorization === "Mediatropy123!") {
    await next();
  } else {
    context.response.status = 401; // Unauthorized
    context.response.body = "Unauthorized";
  }
};
