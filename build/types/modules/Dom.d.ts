/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Licensed under GNU General Public License version 2 or later or a commercial license;
 * Copyright 2013-2019 Valeriy Chupurnov https://xdsoft.net
 */
import { IJodit, NodeCondition } from '../types';
export declare class Dom {
    static detach(node: Node): void;
    static wrapInline: (current: Node, tag: "object" | "small" | Node | "a" | "abbr" | "address" | "applet" | "area" | "article" | "aside" | "audio" | "b" | "base" | "basefont" | "bdi" | "bdo" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "dir" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "font" | "footer" | "form" | "frame" | "frameset" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "label" | "legend" | "li" | "link" | "main" | "map" | "mark" | "marquee" | "menu" | "meta" | "meter" | "nav" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "progress" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "script" | "section" | "select" | "slot" | "source" | "span" | "strong" | "style" | "sub" | "summary" | "sup" | "table" | "tbody" | "td" | "template" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "track" | "u" | "ul" | "var" | "video" | "wbr", editor: IJodit) => HTMLElement;
    static wrap: (current: Node, tag: string | Node, editor: IJodit) => HTMLElement | null;
    static unwrap(node: Node): void;
    static each(elm: Node | HTMLElement, callback: (this: Node, node: Node) => void | false): boolean;
    static replace(elm: HTMLElement, newTagName: string | HTMLElement, withAttributes: boolean | undefined, notMoveContent: boolean | undefined, doc: Document): HTMLElement;
    static isEmptyTextNode(node: Node): boolean;
    static isEmpty(node: Node, condNoEmptyElement?: RegExp): boolean;
    static isNode(object: unknown, win?: Window): object is Node;
    static isCell(elm: unknown, win: Window): elm is HTMLTableCellElement;
    static isImage(elm: unknown, win: Window): elm is HTMLImageElement;
    static isBlock(node: unknown, win: Window): boolean;
    static isInlineBlock(node: unknown): boolean;
    static canSplitBlock(node: any, win: Window): boolean;
    static prev(node: Node, condition: NodeCondition, root: HTMLElement, withChild?: boolean): false | Node | HTMLElement | HTMLTableCellElement;
    static next(node: Node, condition: NodeCondition, root: Node | HTMLElement, withChild?: boolean): false | Node | HTMLElement | HTMLTableCellElement;
    static prevWithClass(node: HTMLElement, className: string): HTMLElement | false;
    static nextWithClass(node: HTMLElement, className: string): HTMLElement | false;
    static find(node: Node, condition: NodeCondition, root: HTMLElement | Node, recurse?: boolean, sibling?: string, child?: string | false): false | Node;
    static findInline: (node: Node | null, toLeft: boolean, root: Node) => Node | null;
    static findWithCurrent(node: Node, condition: NodeCondition, root: HTMLElement | Node, sibling?: 'nextSibling' | 'previousSibling', child?: 'firstChild' | 'lastChild'): false | Node;
    static up(node: Node, condition: NodeCondition, root: Node): false | Node | HTMLElement | HTMLTableCellElement | HTMLTableElement;
    static closest(node: Node, tags: string | NodeCondition | RegExp, root: HTMLElement): Node | HTMLTableElement | HTMLElement | false | HTMLTableCellElement;
    static after(elm: HTMLElement, newElement: HTMLElement | DocumentFragment): void;
    static moveContent(from: Node, to: Node, inStart?: boolean): void;
    static all(node: Node, condition: NodeCondition, prev?: boolean): Node | void;
    static contains: (root: Node, child: Node) => boolean;
    static isOrContains: (root: Node, child: Node, onlyContains?: boolean) => boolean;
    static safeRemove(node: Node | false | null): void;
}
