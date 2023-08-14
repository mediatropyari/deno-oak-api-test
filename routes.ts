// routes.ts
import { Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import data from "./data.json" assert { type: "json" };

const router = new Router();
router
  .get("/", (context) => {
    context.response.body = "Welcome to dinosaur API!";
  })
  .get("/api", (context) => {
    context.response.body = data;
  })
  .get("/api/:dinosaur", (context) => {
    if (context?.params?.dinosaur) {
      const found = data.find((item) =>
        item.name.toLowerCase() === context.params.dinosaur.toLowerCase()
      );
      if (found) {
        context.response.body = found;
      } else {
        context.response.body = "No dinosaurs found.";
      }
    }
  });

  router.post("/ap/kv/dinosaur/", async (context) => {
    const body = await context.request.body();
    const values = body.value;
  
    // You can work with the posted values here, for example, save them to a database.
  
    context.response.status = 200;
    context.response.body = { success: true, data: values };
  });

export default router;
