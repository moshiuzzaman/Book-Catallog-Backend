export function exclude(data: any, keys: any) {
  if (!data) {
    throw new Error('data not found');
}
  return Object.fromEntries(
    Object.entries(data).filter(([key]) => !keys.includes(key))
  );
}
