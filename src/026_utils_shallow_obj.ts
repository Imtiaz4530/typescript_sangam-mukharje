// --------- Partial ---------
// partial <T> -> make all the top level fields optional

type AddressN8 = {
  line1: string;
  city: string;
};
type User10 = {
  id: string;
  name: string;
  email?: string;
  address: AddressN8;
};

type UserPatch10 = Partial<User10>;

const patch10: UserPatch10 = { name: "Imtiaz" };
const patch11: UserPatch10 = {
  name: "Imtiaz",
  email: "imtiaz@gmail",
  address: { line1: "Dhaka", city: "Dhaka" },
};

// --------- Required ---------
// Required<T> -> make all the top level fields required
// even email? is required now
type UserAllRequiredN10 = Required<User10>;
const userAllPatch12: UserAllRequiredN10 = {
  id: "1",
  name: "Imtiaz",
  email: "imtiaz@gmail",
  address: { line1: "Dhaka", city: "Dhaka" },
};

// --------- Readonly ---------
type ReadOnlyUserN10 = Readonly<User10>;
const readOnlyUserN10: ReadOnlyUserN10 = {
  id: "1",
  name: "Imtiaz",
  email: "imtiaz@gmail",
  address: { line1: "Dhaka", city: "Dhaka" },
};

// --------- Pick ---------
// pick <T, K> -> keep only some keys
type UserPickN10 = Pick<User10, "id" | "name">;
const userPickN10: UserPickN10 = {
  id: "1",
  name: "Imtiaz",
};

// --------- Omit ---------
// omit <T, K> -> remove some keys

type UserWithoutEmailN10 = Omit<User10, "email">;
const userWithoutEmailN10: UserWithoutEmailN10 = {
  id: "1",
  name: "Imtiaz",
  address: { line1: "Dhaka", city: "Dhaka" },
};

// --------- Record ---------
// Record <K, V> -> create an object with keys of type K and values of type V
type RoleK = "admin" | "user" | "editor";
type RoleCheck = Record<RoleK, User10>;

const dirN10: RoleCheck = {
  admin: {
    id: "u10",
    name: "Imtiaz",
    email: "imtiaz@gmail",
    address: { line1: "Dhaka", city: "Dhaka" },
  },
  user: {
    id: "u10",
    name: "Imtiaz",
    email: "imtiaz@gmail",
    address: { line1: "Dhaka", city: "Dhaka" },
  },
  editor: {
    id: "u10",
    name: "Imtiaz",
    email: "imtiaz@gmail",
    address: { line1: "Dhaka", city: "Dhaka" },
  },
};
