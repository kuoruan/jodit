/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Licensed under GNU General Public License version 2 or later or a commercial license or MIT;
 * For GPL see LICENSE-GPL.txt in the project root for license information.
 * For MIT see LICENSE-MIT.txt in the project root for license information.
 * For commercial licenses see https://xdsoft.net/jodit/commercial/
 * Copyright (c) 2013-2019 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
import { IEventsNative } from '../../types';
import { IViewBased, IViewOptions } from '../../types/view';
import { Component } from '../Component';
import { Panel } from './panel';
export declare class View extends Panel implements IViewBased {
    id: string;
    version: string;
    private __modulesInstances;
    get defaultTimeout(): number;
    buffer: import("../../types").IStorage<import("../../types").StorageValueType>;
    progress_bar: HTMLDivElement;
    options: IViewOptions;
    events: IEventsNative;
    components: any;
    i18n(text: string, ...params: Array<string | number>): string;
    toggleFullSize(isFullSize?: boolean): void;
    getInstance<T = Component>(moduleName: string, options?: object): T;
    getVersion: () => string;
    constructor(jodit?: IViewBased, options?: IViewOptions);
    destruct(): void;
}
