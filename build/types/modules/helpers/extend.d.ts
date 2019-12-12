/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Licensed under GNU General Public License version 2 or later or a commercial license or MIT;
 * For GPL see LICENSE-GPL.txt in the project root for license information.
 * For MIT see LICENSE-MIT.txt in the project root for license information.
 * For commercial licenses see https://xdsoft.net/jodit/commercial/
 * Copyright (c) 2013-2019 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
export declare function extend<T, U>(target: T, source: U): T & U;
export declare function extend<U, V>(deep: true, source1: U, source2: V): U & V;
export declare function extend<T, U, V>(target: T, source1: U, source2: V): T & U & V;
export declare function extend<T, U, V>(deep: true, target: T, source1: U, source2: V): T & U & V;
export declare function extend<T, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;
export declare function extend<T, U, V, W>(deep: true, target: T, source1: U, source2: V, source3: W): T & U & V & W;
export declare function extend(target: object, ...sources: any[]): any;
export declare function extend(deep: true, target: object, ...sources: any[]): any;
