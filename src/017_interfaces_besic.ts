// ------------ Interfaces ------------
// interface -> named shape for objects

interface User333 {
  id: string;
  name: string;
  email?: string;
  readonly createdAt: Date;
}

const user333: User333 = { id: "1", name: "munna", createdAt: new Date() };

interface Admin333 extends User333 {
  permission: string[];
}

const admin333: Admin333 = {
  id: "1",
  name: "munna",
  createdAt: new Date(),
  permission: ["Admin"],
};

interface WithMeta1 {
  meta: {
    active: boolean;
  };
}

interface AdminWithMeta extends Admin333, WithMeta1 {}

const adminWithMeta: AdminWithMeta = {
  id: "1",
  name: "munna",
  createdAt: new Date(),
  permission: ["Admin"],
  meta: {
    active: true,
  },
};
