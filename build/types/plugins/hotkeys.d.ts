/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Licensed under GNU General Public License version 2 or later or a commercial license or MIT;
 * For GPL see LICENSE-GPL.txt in the project root for license information.
 * For MIT see LICENSE-MIT.txt in the project root for license information.
 * For commercial licenses see https://xdsoft.net/jodit/commercial/
 * Copyright (c) 2013-2019 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
import { Plugin } from '../modules/Plugin';
import { IDictionary, IJodit } from '../types';
declare module '../Config' {
    interface Config {
        commandToHotkeys: IDictionary<string | string[]>;
    }
}
export declare class hotkeys extends Plugin {
    private onKeyPress;
    specialKeys: {
        [key: number]: string;
    };
    afterInit(editor: IJodit): void;
    beforeDestruct(jodit: IJodit): void;
}
