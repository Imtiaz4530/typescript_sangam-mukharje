import { useRef, useState, type FormEvent } from "react";

function getString(fd: FormData, key: string): string | null {
  const result = fd.get(key);

  return typeof result === "string" ? result : null;
}

function getNumber(fd: FormData, key: string): number | null {
  const extractStringValue = getString(fd, key);

  if (extractStringValue === null) return null;

  const cenvertToNumber = Number(extractStringValue);

  return Number.isFinite(cenvertToNumber) ? cenvertToNumber : null;
}

export const UncontrolledForm = () => {
  const [val, setVal] = useState<string | undefined>(undefined);

  const formRef = useRef<HTMLFormElement | null>(null);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fd = new FormData(e.currentTarget);
    const extractName = getString(fd, "name") ?? "No Name";
    const extractAge = getNumber(fd, "age");
  };

  return (
    <form onSubmit={handleFormSubmit} ref={formRef}>
      <input type="text" name="name" defaultValue="Guest" />
      <input type="number" name="age" defaultValue="18" min={0} />
      <button type="submit">Submit</button>

      <input value={val} />
    </form>
  );
};
