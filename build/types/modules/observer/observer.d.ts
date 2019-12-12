/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Licensed under GNU General Public License version 2 or later or a commercial license or MIT;
 * For GPL see LICENSE-GPL.txt in the project root for license information.
 * For MIT see LICENSE-MIT.txt in the project root for license information.
 * For commercial licenses see https://xdsoft.net/jodit/commercial/
 * Copyright (c) 2013-2019 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
import { IJodit } from '../../types';
import { Component } from '../Component';
import { Snapshot } from '../Snapshot';
import { Stack } from '../Stack';
declare module '../../Config' {
    interface Config {
        observer: {
            timeout: number;
        };
    }
}
export declare class Observer extends Component<IJodit> {
    private __startValue;
    private __newValue;
    private onChangeStack;
    stack: Stack;
    snapshot: Snapshot;
    redo(): void;
    undo(): void;
    clear(): void;
    changeStack(): void;
    constructor(editor: IJodit);
    destruct(): any;
}
