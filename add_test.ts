import { add } from "./add.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test("add function", () => {
  const result = add(3, 4);
  assertEquals(result, 7); // This will pass if `add(3, 4)` returns 7
});

Deno.test("add with negative numbers", () => {
  const result = add(-3, -4);
  assertEquals(result, -7); // This will pass if `add(-3, -4)` returns -7
});
