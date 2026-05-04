type UserN7 = {
  id: string;
  name: string;
  email?: string; // T["email"] -> string | undefined
};

function getUserPropN7<T, K extends keyof T>(objN7: T, keyN7: K): T[K] {
  return objN7[keyN7];
}

const uN7: UserN7 = { id: "1", name: "munna" };

const idValN7 = getUserPropN7(uN7, "name");

function setUserPropN7<T, K extends keyof T>(
  objN7: T,
  keyN7: K,
  newValue: T[K],
): void {
  objN7[keyN7] = newValue;
}

console.log(uN7, "name", "munna");
