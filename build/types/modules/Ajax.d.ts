/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Licensed under GNU General Public License version 2 or later or a commercial license or MIT;
 * For GPL see LICENSE-GPL.txt in the project root for license information.
 * For MIT see LICENSE-MIT.txt in the project root for license information.
 * For commercial licenses see https://xdsoft.net/jodit/commercial/
 * Copyright (c) 2013-2019 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
import { IRequest, IViewBased } from '../types';
import { AjaxOptions, IAjax } from '../types';
declare module '../Config' {
    interface Config {
        defaultAjaxOptions: AjaxOptions;
    }
}
export declare class Ajax implements IAjax {
    static log: IRequest[];
    private readonly xhr;
    private success_response_codes;
    private __buildParams;
    status: number;
    response: string;
    options: AjaxOptions;
    jodit: IViewBased;
    abort(): Ajax;
    send(): Promise<any>;
    prepareRequest(): IRequest;
    constructor(editor: IViewBased, options: AjaxOptions);
}
