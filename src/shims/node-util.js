// Minimal shim for `node:util` used by some build deps (rolldown).
// Exports only the small surface the dependency expects.
export function formatWithOptions(/* options, ...args */) {
  // Basic implementation: join args with space, stringify non-strings
  const args = Array.from(arguments).slice(1);
  return args
    .map((a) => (typeof a === "string" ? a : JSON.stringify(a)))
    .join(" ");
}

export function styleText(text /*, styleOptions */) {
  // No-op: return plain text. This prevents runtime errors when Node lacks this API.
  return String(text);
}
