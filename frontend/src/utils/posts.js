export function sortNewestFirst(posts) {
  return [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
}
