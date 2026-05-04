const raw = '{"id": "1", "name": "munna"}';
const riskyUser = JSON.parse(raw) as { id: string; name: string };

console.log(riskyUser.name);

type User22 = { id: number; name: string };

function isUser(v: unknown): v is User22 {
  return (
    typeof v === "object" &&
    v !== null &&
    "id" in v &&
    "name" in v &&
    typeof (v as any).id === "number" &&
    typeof (v as any).name === "string"
  );
}

const maybeUser = JSON.parse(raw) as unknown;
if (isUser(maybeUser)) {
  console.log(maybeUser.name);
}
