/// <reference types="next" />
/// <reference types="next/types/global" />

declare module "*.module.scss" {
    const classes: { readonly [key: string]: string };
    export default classes;
}
