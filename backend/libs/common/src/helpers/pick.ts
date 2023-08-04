export const pick = <T extends object>(props: (keyof T)[], obj: T): T => {
  const newObj = {};

  for (const prop of props) {
    if (!newObj[prop as string]) {
      newObj[prop as string] = obj[prop];
    }
  }
  
  return newObj as T;
}