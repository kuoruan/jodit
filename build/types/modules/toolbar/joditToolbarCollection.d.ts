/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Licensed under GNU General Public License version 2 or later or a commercial license or MIT;
 * For GPL see LICENSE-GPL.txt in the project root for license information.
 * For MIT see LICENSE-MIT.txt in the project root for license information.
 * For commercial licenses see https://xdsoft.net/jodit/commercial/
 * Copyright (c) 2013-2019 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
import { ToolbarCollection } from './collection';
import { ToolbarButton } from './button';
import { IDictionary } from '../../types/types';
import { IJodit } from '../../types/jodit';
import { IViewBased } from '../../types/view';
export declare class JoditToolbarCollection extends ToolbarCollection<IJodit> {
    checkActiveStatus: (cssObject: IDictionary<string | string[]> | IDictionary<(editor: IViewBased<import("../../types/view").IViewOptions>, value: string) => boolean>, node: HTMLElement) => boolean;
    buttonIsActive(button: ToolbarButton): boolean;
    buttonIsDisabled(button: ToolbarButton): boolean | void;
    getTarget(button: ToolbarButton): Node | void;
    static makeCollection(jodit: IViewBased): ToolbarCollection<IViewBased>;
}
