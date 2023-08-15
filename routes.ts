// routes.ts
import {
  Context,
  helpers,
  Router,
} from "https://deno.land/x/oak@v11.1.0/mod.ts";
import data from "./data.json" assert { type: "json" };
// import {
//   deleteUserById,
//   getAddressByUserId,
//   getAllUsers,
//   getUserByEmail,
//   getUserById,
//   updateUserAndAddress,
//   upsertUser,
// } from "./db.ts";
const { getQuery } = helpers;

const router = new Router();
router
  .get("/", (context: Context) => {
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
  })
  // KV
  // .get("/users", async (ctx: Context) => {
  //   ctx.response.body = await getAllUsers();
  // })
  // .get("/users/:id", async (ctx: Context) => {
  //   const { id } = getQuery(ctx, { mergeParams: true });
  //   ctx.response.body = await getUserById(id);
  // })
  // .get("/users/email/:email", async (ctx: Context) => {
  //   const { email } = getQuery(ctx, { mergeParams: true });
  //   ctx.response.body = await getUserByEmail(email);
  // })
  // .get("/users/:id/address", async (ctx: Context) => {
  //   const { id } = getQuery(ctx, { mergeParams: true });
  //   ctx.response.body = await getAddressByUserId(id);
  // })
  // .post("/users", async (ctx: Context) => {
  //   const body = ctx.request.body();
  //   const user = await body.value;
  //   const val = await upsertUser(user);
  //   ctx.response.body = "success";
  // })
  // .post("/users/:id/address", async (ctx: Context) => {
  //   const { id } = getQuery(ctx, { mergeParams: true });
  //   const body = ctx.request.body();
  //   const address = await body.value;
  //   const user = await getUserById(id);
  //   await updateUserAndAddress(user, address);
  // })
  // .delete("/users/:id", async (ctx: Context) => {
  //   const { id } = getQuery(ctx, { mergeParams: true });
  //   await deleteUserById(id);
  // });

export default router;
