interface UserModel {
  id: number;
  password: string;
  username: string;
  role: string;
}

interface ProtectedUserModel {
  id: number;
  username: string;
  role: string;
}

export { UserModel, ProtectedUserModel };
