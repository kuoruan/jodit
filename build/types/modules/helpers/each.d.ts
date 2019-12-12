/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Licensed under GNU General Public License version 2 or later or a commercial license or MIT;
 * For GPL see LICENSE-GPL.txt in the project root for license information.
 * For MIT see LICENSE-MIT.txt in the project root for license information.
 * For commercial licenses see https://xdsoft.net/jodit/commercial/
 * Copyright (c) 2013-2019 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
import { IDictionary } from '../../types';
declare type eachCallback<T, N> = ((this: T, key: N, value: T) => boolean | void);
export declare function each<T>(obj: T[], callback: eachCallback<T, number>): boolean;
export declare function each<T>(obj: IDictionary<T>, callback: eachCallback<T, string>): boolean;
export {};
