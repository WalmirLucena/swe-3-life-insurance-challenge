class UnauthorizedError extends Error {
  constructor(text: string) {
    super(`unauthorized: ${text}`);
    this.name = `UnauthorizedError: ${text}`;
  }
}

export { UnauthorizedError };
