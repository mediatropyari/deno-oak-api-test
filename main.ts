import {
  Application,
  Context,
  Router,
} from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";
import router from "./routes.ts";
import { authMiddleware } from "./authMiddleware.ts";
import { timingMiddleware } from "./timingMiddleware.ts";
const app = new Application();

app.use(timingMiddleware);
app.use(authMiddleware);
app.use(oakCors()); // Enable CORS for All Routes
app.use(router.routes()); // Load our router
app.use(router.allowedMethods()); // with OPTIONS each route will give list of allowed method

await app.listen({ port: 8000 }); // serve our
