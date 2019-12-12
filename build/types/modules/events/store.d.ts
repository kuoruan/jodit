/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Licensed under GNU General Public License version 2 or later or a commercial license or MIT;
 * For GPL see LICENSE-GPL.txt in the project root for license information.
 * For MIT see LICENSE-MIT.txt in the project root for license information.
 * For commercial licenses see https://xdsoft.net/jodit/commercial/
 * Copyright (c) 2013-2019 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
import { CallbackFunction, EventHandlerBlock } from '../../types';
export declare const defaultNameSpace = "JoditEventDefaultNamespace";
export declare class EventHandlersStore {
    private __store;
    get(event: string, namespace: string): EventHandlerBlock[] | void;
    indexOf(event: string, namespace: string, originalCallback: CallbackFunction): false | number;
    namespaces(withoutDefault?: boolean): string[];
    events(namespace: string): string[];
    set(event: string, namespace: string, data: EventHandlerBlock, onTop?: boolean): void;
    clear(): void;
}
