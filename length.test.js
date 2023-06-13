const lengthString = require("./length");
describe("lengthString", () => {
  test("return the length of the string", () => {
    expect(lengthString("hello")).toBe(5);
    expect(lengthString("he")).toBe(2);
    expect(lengthString("abcdefghi")).toBe(9);
  });
});
