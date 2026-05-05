// --------- Partial ---------

// Exclude <U, V> -> remove from U those member assignable to V
// Extract <U, V> -> keep from U those member assignable to V
// Nonnullable <T> -> remove null and undefined from T

type EventType1 = "click" | "submit" | "hover" | "keydown" | "keyup";
type EventType2 = Exclude<EventType1, "keydown">;

function handleEvent1(e: EventType2) {
  console.log(e);
}
//handleEvent1("keydown") // 'keydown' is excluded that why it is not allowed

type ActionsN1 = "create" | "update" | "delete" | "read";
type ActionsN2 = Extract<ActionsN1, "create" | "update" | "delete">;

function handleEvent2(e: ActionsN2) {
  console.log(e);
}
//handleEvent2("read") // 'read' is excluded that why it is not allowed

type MaybeNumber = number | null | undefined;
type CleanNumber = NonNullable<MaybeNumber>;

function square(num: CleanNumber) {
  return num * 2;
}
// square(10); // only number is allowed
// square(null); // null is not allowed
// square(undefined); // undefined is not allowed
