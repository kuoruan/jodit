/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Licensed under GNU General Public License version 2 or later or a commercial license or MIT;
 * For GPL see LICENSE-GPL.txt in the project root for license information.
 * For MIT see LICENSE-MIT.txt in the project root for license information.
 * For commercial licenses see https://xdsoft.net/jodit/commercial/
 * Copyright (c) 2013-2019 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
import { IJodit, SnapshotType } from '../types';
import { Component } from './Component';
export declare class Snapshot extends Component<IJodit> {
    static equal(first: SnapshotType, second: SnapshotType): boolean;
    private static countNodesBeforeInParent;
    private static strokeOffset;
    private calcHierarchyLadder;
    private getElementByLadder;
    isBlocked: boolean;
    make(): SnapshotType;
    restore(snapshot: SnapshotType): void;
    destruct(): any;
}
