/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Licensed under GNU General Public License version 2 or later or a commercial license or MIT;
 * For GPL see LICENSE-GPL.txt in the project root for license information.
 * For MIT see LICENSE-MIT.txt in the project root for license information.
 * For commercial licenses see https://xdsoft.net/jodit/commercial/
 * Copyright (c) 2013-2019 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
/// <reference types="ace" />
import { Plugin } from '../modules/Plugin';
import { IJodit } from '../types';
declare module '../Config' {
    interface Config {
        useAceEditor: boolean;
        sourceEditorNativeOptions: {
            showGutter: boolean;
            theme: string;
            mode: string;
            wrap: string | boolean | number;
            highlightActiveLine: boolean;
        };
        beautifyHTML: boolean;
        beautifyHTMLCDNUrlsJS: string[];
        sourceEditorCDNUrlsJS: string[];
    }
}
export declare class source extends Plugin {
    private className;
    private mirrorContainer;
    private __lock;
    private __oldMirrorValue;
    private autosize;
    private tempMarkerStart;
    private tempMarkerStartReg;
    private tempMarkerEnd;
    private tempMarkerEndReg;
    private selInfo;
    private lastTuple;
    private loadNext;
    private insertHTML;
    private fromWYSIWYG;
    private toWYSIWYG;
    private getNormalPosition;
    private __clear;
    private selectAll;
    private onSelectAll;
    private getSelectionStart;
    private getSelectionEnd;
    private getMirrorValue;
    private setMirrorValue;
    private setFocusToMirror;
    private saveSelection;
    private restoreSelection;
    private __proxyOnFocus;
    private __proxyOnMouseDown;
    private replaceMirrorToACE;
    mirror: HTMLTextAreaElement;
    aceEditor: AceAjax.Editor;
    setMirrorSelectionRange: (start: number, end: number) => void;
    private onReadonlyReact;
    afterInit(editor: IJodit): void;
    beforeDestruct(jodit: IJodit): void;
}
