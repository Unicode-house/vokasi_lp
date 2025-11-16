/* eslint-disable @typescript-eslint/no-explicit-any */
// src/declarations.d.ts
declare module "*.jsx" {
  const component: React.ComponentType<any>;
  export default component;
}