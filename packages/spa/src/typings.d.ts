declare module "*.css" {
  const classNames: Record<string, string>;
  export = classNames;
}

declare module "url:*" {
  const value: string;
  export default value;
}
