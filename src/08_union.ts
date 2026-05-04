// ------------ value -> this or that ------------
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id);
  } else {
    id.toFixed(2);
  }
}

// ------------ object union ------------
type Admin = {
  role: "Admin";
  permission: string[];
};

type Customer = {
  role: "Customer";
  loyalityPoints: number;
};

function describeUser(u: Admin | Customer) {
  if (u.role === "Admin") {
    console.log(u.permission);
  } else {
    console.log(`This customer has ${u.loyalityPoints} points`);
  }
}

function describeUserWithInOperator(u: Admin | Customer) {
  if ("permission" in u) {
    console.log(u.permission);
  } else {
    console.log(`This customer has ${u.loyalityPoints} points`);
  }
}

// ------------ Array of unions and union of arrays ------------
const arrayOfUnion: (string | number)[] = [1, "2", 3, 5, "Munna"];

const unionOfArrays: string[] | number[] = Math.random() > 0.5 ? [1, 2, 3] : [];
