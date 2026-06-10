/**
 * wraps a callback so that thrown errors are reported via alert instead of crashing the handler
 */
export function handleError(f: () => void): () => void {
  return () => {
    try {
      f();
    } catch (e) {
      alert("Error" + e);
    }
  };
}
