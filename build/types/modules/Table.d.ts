/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Licensed under GNU General Public License version 2 or later or a commercial license or MIT;
 * For GPL see LICENSE-GPL.txt in the project root for license information.
 * For MIT see LICENSE-MIT.txt in the project root for license information.
 * For commercial licenses see https://xdsoft.net/jodit/commercial/
 * Copyright (c) 2013-2019 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
export declare class Table {
    static addSelected(td: HTMLTableCellElement): void;
    static restoreSelection(td: HTMLTableCellElement): void;
    static getAllSelectedCells(table: HTMLElement | HTMLTableElement): HTMLTableCellElement[];
    static getRowsCount(table: HTMLTableElement): number;
    static getColumnsCount(table: HTMLTableElement): number;
    static formalMatrix(table: HTMLTableElement, callback?: (cell: HTMLTableCellElement, row: number, col: number, colSpan: number, rowSpan: number) => false | void): HTMLTableCellElement[][];
    static formalCoordinate(table: HTMLTableElement, cell: HTMLTableCellElement, max?: boolean): number[];
    static appendRow(table: HTMLTableElement, line?: false | HTMLTableRowElement, after?: boolean): void;
    static removeRow(table: HTMLTableElement, rowIndex: number): void;
    static appendColumn(table: HTMLTableElement, j: number, after?: boolean): void;
    static removeColumn(table: HTMLTableElement, j: number): void;
    static getSelectedBound(table: HTMLTableElement, selectedCells: HTMLTableCellElement[]): number[][];
    static normalizeTable(table: HTMLTableElement): void;
    static mergeSelected(table: HTMLTableElement): void;
    static splitHorizontal(table: HTMLTableElement): void;
    static splitVertical(table: HTMLTableElement): void;
    static setColumnWidthByDelta(table: HTMLTableElement, j: number, delta: number, noUnmark: boolean, __marked: HTMLTableCellElement[]): void;
    private static __mark;
    private static __unmark;
}
