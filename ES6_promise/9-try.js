/**
 * Executes a function and handles potential errors.
 * @param {Function} mathFunction - The function to execute.
 * @returns {Array} An array containing the result or error and a final message.
 */
export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    queue.push(String(error));
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
