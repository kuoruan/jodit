/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Licensed under GNU General Public License version 2 or later or a commercial license or MIT;
 * For GPL see LICENSE-GPL.txt in the project root for license information.
 * For MIT see LICENSE-MIT.txt in the project root for license information.
 * For commercial licenses see https://xdsoft.net/jodit/commercial/
 * Copyright (c) 2013-2019 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
import { Attributes, Children, ICreate } from '../types/create';
export declare class Create implements ICreate {
    private doc;
    inside: Create;
    constructor(ownerDocument: Document, editorDocument?: Document | null);
    setDocument(doc: Document): void;
    element<K extends keyof HTMLElementTagNameMap>(tagName: K, childrenOrAttributes?: Children): HTMLElementTagNameMap[K];
    element<K extends keyof HTMLElementTagNameMap>(tagName: K, childrenOrAttributes?: Attributes, children?: Children): HTMLElementTagNameMap[K];
    div(className?: string, childrenOrAttributes?: Children): HTMLDivElement;
    div(className?: string, childrenOrAttributes?: Attributes, children?: Children): HTMLDivElement;
    span(className?: string, childrenOrAttributes?: Children): HTMLSpanElement;
    span(className?: string, childrenOrAttributes?: Attributes, children?: Children): HTMLSpanElement;
    a(className?: string, childrenOrAttributes?: Attributes, children?: Children): HTMLSpanElement;
    text(value: string): Text;
    fragment(): DocumentFragment;
    fromHTML(html: string | number): HTMLElement;
}
