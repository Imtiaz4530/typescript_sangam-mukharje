type GreetProps = {
  name?: string;
  shout?: boolean;
};

// shape yout

export const GreetA = ({ name = "Guest", shout = false }: GreetProps) => {
  const text = shout ? name.toUpperCase() : name;
  return <p>hi {text}</p>;
};

export const GreetB = (props: GreetProps) => {
  const name = props.name ?? "Guest";
  const shout = props.shout ?? false;

  const text = shout ? name.toUpperCase() : name;
  return <p>hi {text}</p>;
};
