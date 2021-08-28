import { UmlClass } from './umlClass';
export interface ClassOptions {
    hideAttributes?: boolean;
    hideOperators?: boolean;
    hideStructs?: boolean;
    hideEnums?: boolean;
    hideLibraries?: boolean;
    hideInterfaces?: boolean;
    hideInternals?: boolean;
}
export declare const convertClasses2Dot: (umlClass: UmlClass, options?: ClassOptions) => string;
