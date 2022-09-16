export const modify = (obj, fieldPath, value) => {
  const copy = { ...obj };
  const parts = fieldPath.split(".");
  console.log("----------", parts);
  // let target = copy;
  // for(let part of parts)
  const targetField = parts.pop();
  const target = parts.reduce((acc, part) => {
    console.log(acc);
    return acc[part];
  }, copy);

  target[targetField] = value;
  console.log("target", target, targetField, value, copy);
  return copy;
};
