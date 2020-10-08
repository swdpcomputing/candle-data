const { paginate } = require("./paginate.js");

test("Type checks", () => {
  expect;
});

test("Correct Pagination returns", () => {
  expect(paginate([1, 2, 3, 4, 5, 6, 7, 8, 9], 1, 4)).toEqual([1, 2, 3, 4]);
  expect(paginate([1, 2, 3, 4, 5, 6, 7, 8, 9], 2, 3)).toEqual([4, 5, 6]);
});

//prettier-ignore
//tests the same as above, but not readable
test.each([[[1, 2, 3, 4, 5, 6, 7, 8, 9], 1, 4, [1, 2, 3, 4]], [[1, 2, 3, 4, 5, 6, 7, 8, 9], 2, 3, [4, 5, 6]]])(
    '%i pagainated with %i and %i equals %i', (a, b, c, d) => {
        expect(paginate(a, b, c)).toEqual(d)
    },
  );
