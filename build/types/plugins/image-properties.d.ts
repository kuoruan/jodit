/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Licensed under GNU General Public License version 2 or later or a commercial license or MIT;
 * For GPL see LICENSE-GPL.txt in the project root for license information.
 * For MIT see LICENSE-MIT.txt in the project root for license information.
 * For commercial licenses see https://xdsoft.net/jodit/commercial/
 * Copyright (c) 2013-2019 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
import { IJodit } from '../types/';
declare module '../Config' {
    interface Config {
        image: {
            openOnDblClick: boolean;
            editSrc: boolean;
            useImageEditor: boolean;
            editTitle: boolean;
            editAlt: boolean;
            editLink: boolean;
            editSize: boolean;
            editMargins: boolean;
            editBorderRadius: boolean;
            editClass: boolean;
            editStyle: boolean;
            editId: boolean;
            editAlign: boolean;
            showPreview: boolean;
            selectImageAfterClose: boolean;
        };
    }
}
export declare function imageProperties(editor: IJodit): void;
