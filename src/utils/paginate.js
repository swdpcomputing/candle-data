import lodash from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  console.log("pag ", lodash(items).slice(startIndex).take(pageSize).value());
  return lodash(items).slice(startIndex).take(pageSize).value();
}
