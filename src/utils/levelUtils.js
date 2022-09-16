let level = 0;

export const getLevel = () => level;
export const nextLevel = () => {
  level += 1;
  return level;
};
