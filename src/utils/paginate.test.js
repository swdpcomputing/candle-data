const { paginate } = require("./paginate.js");

test("Correct Pagination returns", () => {
  //prettier-ignore
  expect(paginate([1, 2, 3, 4, 5, 6, 7, 8, 9], 1, 6)).toEqual([1, 2, 3, 4, 5, 6]);
  expect(paginate([1, 2, 3, 4, 5, 6, 7, 8, 9], 2, 3)).toEqual([4, 5, 6]);
});
