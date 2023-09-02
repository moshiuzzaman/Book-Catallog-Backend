export function exclude(data: any, keys: any) {
  return Object.fromEntries(
    Object.entries(data).filter(([key]) => !keys.includes(key))
  );
}
