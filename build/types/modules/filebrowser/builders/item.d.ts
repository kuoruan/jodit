import { IFileBrowserItemElement, IFileBrowserItemWrapper } from '../../../types';
export declare class FileBrowserItem implements IFileBrowserItemWrapper {
    readonly data: IFileBrowserItemElement;
    private constructor();
    static create(data: IFileBrowserItemElement): FileBrowserItem & IFileBrowserItemElement;
    get path(): string;
    get imageURL(): string;
    get fileURL(): string;
    get time(): string;
    get uniqueHashKey(): string;
}
