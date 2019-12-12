import { BuildDataResult, HandlerError, HandlerSuccess, IDictionary, IUploader, IUploaderAnswer, IUploaderOptions, IViewBased } from '../types/';
import { Component } from './Component';
declare module '../Config' {
    interface Config {
        enableDragAndDropFileToEditor: boolean;
        uploader: IUploaderOptions<Uploader>;
    }
}
export declare class Uploader extends Component implements IUploader {
    static dataURItoBlob(dataURI: string): Blob;
    private path;
    private source;
    private options;
    jodit: IViewBased;
    buildData(data: FormData | IDictionary<string> | string): BuildDataResult;
    private ajaxInstances;
    send(data: FormData | IDictionary<string>, success: (resp: IUploaderAnswer) => void): Promise<any>;
    sendFiles(files: FileList | File[] | null, handlerSuccess?: HandlerSuccess, handlerError?: HandlerError, process?: (form: FormData) => void): Promise<any>;
    setPath(path: string): void;
    setSource(source: string): void;
    bind(form: HTMLElement, handlerSuccess?: HandlerSuccess, handlerError?: HandlerError): void;
    uploadRemoteImage(url: string, handlerSuccess?: HandlerSuccess, handlerError?: HandlerError): void;
    constructor(editor: IViewBased, options?: IUploaderOptions<Uploader>);
    destruct(): any;
}
