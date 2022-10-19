import "jest";
import { a } from "./index";

it("Tests with import equality", () => {
  expect({
    name: "cristiano",
  }).toEqual(a);
});

// test("should be false", () => {
//   expect(false).toBeFalsy();
// });

// describe("a group of tests", () => {
//   test("first test", () => {
//     expect("string value").toEqual("string value");
//   });

//   it("second test", () => {
//     expect("abc").not.toEqual("def");
//   });

//   xit("should be equal to ten", () => {
//     expect(10).toEqual(10);
//   });
// });

// test("Compare two obj", () => {
//   let objA = { a: 10 };
//   let objB = objA;

//   expect(objA).toBe(objB);
// });

it("should contain a value", () => {
  expect("abcdef").toContain("def");
});
