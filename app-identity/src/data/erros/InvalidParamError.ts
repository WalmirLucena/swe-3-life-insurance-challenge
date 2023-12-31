class InvalidParamError extends Error {
  constructor(paramName: string) {
    super(`Invalid param: ${paramName}`);
    this.name = `Invalid param: ${paramName}`;
  }
}

export { InvalidParamError };
