function todo_write() {
  // This tool does not yet have internal state, returning an acknowledgement is usually enough for LLMs to register and keep track of the todo items. May not work well with less-intelligent models or lists that are too long.
  return "List updated successfully!"
}
