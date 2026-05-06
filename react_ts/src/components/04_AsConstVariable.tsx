const VARIANTS = ["primary", "secondary", "ghost"] as const;

type Variant = (typeof VARIANTS)[number];

type BadgeProps = {
  label: string;
  variant?: Variant;
};

export const Badge = ({ label, variant = "primary" }: BadgeProps) => {
  const styles: Record<Variant, React.CSSProperties> = {
    primary: { color: "red" },
    secondary: { color: "green" },
    ghost: { color: "blue" },
  };

  return <span style={styles[variant]}>{label}</span>;
};

// HW -> go app.tsx and play with this props
