/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Licensed under GNU General Public License version 2 or later or a commercial license or MIT;
 * For GPL see LICENSE-GPL.txt in the project root for license information.
 * For MIT see LICENSE-MIT.txt in the project root for license information.
 * For commercial licenses see https://xdsoft.net/jodit/commercial/
 * Copyright (c) 2013-2019 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
import { IStorage, StorageValueType } from '../../types';
export declare class MemoryStorageProvider<T = StorageValueType> implements IStorage<T> {
    private data;
    set(key: string, value: T): void;
    get<R = T>(key: string): R | void;
    exists(key: string): boolean;
    clear(): void;
}
