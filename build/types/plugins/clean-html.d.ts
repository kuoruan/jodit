/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Licensed under GNU General Public License version 2 or later or a commercial license or MIT;
 * For GPL see LICENSE-GPL.txt in the project root for license information.
 * For MIT see LICENSE-MIT.txt in the project root for license information.
 * For commercial licenses see https://xdsoft.net/jodit/commercial/
 * Copyright (c) 2013-2019 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
import { IJodit } from '../types';
declare module '../Config' {
    interface Config {
        cleanHTML: {
            timeout: number;
            replaceNBSP: boolean;
            cleanOnPaste: boolean;
            fillEmptyParagraph: boolean;
            removeEmptyElements: boolean;
            replaceOldTags: {
                [key: string]: string;
            } | false;
            allowTags: false | string | {
                [key: string]: string;
            };
            denyTags: false | string | {
                [key: string]: string;
            };
        };
    }
}
export declare function cleanHtml(editor: IJodit): void;
