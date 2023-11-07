interface IFakerProvider {
  email(): string;
  password(): string;
  id(): number;
  createdAt(): Date;
  updatedAt(): Date;
}

export { IFakerProvider };
