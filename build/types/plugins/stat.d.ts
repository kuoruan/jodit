/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Licensed under GNU General Public License version 2 or later or a commercial license or MIT;
 * For GPL see LICENSE-GPL.txt in the project root for license information.
 * For MIT see LICENSE-MIT.txt in the project root for license information.
 * For commercial licenses see https://xdsoft.net/jodit/commercial/
 * Copyright (c) 2013-2019 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
import { Plugin } from '../modules/Plugin';
declare module '../Config' {
    interface Config {
        showCharsCounter: boolean;
        showWordsCounter: boolean;
    }
}
export declare class stat extends Plugin {
    private charCounter;
    private wordCounter;
    afterInit(): void;
    private calc;
    beforeDestruct(): void;
}
