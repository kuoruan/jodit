import { IFileBrowserAnswer, IFileBrowserOptions, IViewBased, IFileBrowserDataProvider, ImageBox } from '../../types';
export declare const DEFAULT_SOURCE_NAME = "default";
export default class dataProvider implements IFileBrowserDataProvider {
    readonly options: IFileBrowserOptions;
    readonly parent: IViewBased;
    private __currentPermissions;
    canI(action: string): boolean;
    currentPath: string;
    currentSource: string;
    currentBaseUrl: string;
    constructor(options: IFileBrowserOptions, parent: IViewBased);
    private get;
    permissions(path?: string, source?: string): Promise<void>;
    items(path?: string, source?: string): Promise<IFileBrowserAnswer>;
    tree(path?: string, source?: string): Promise<IFileBrowserAnswer>;
    getPathByUrl: (url: string, success: (path: string, name: string, source: string) => void, onFailed: (error: Error) => void) => Promise<any>;
    createFolder(name: string, path: string, source: string): Promise<IFileBrowserAnswer>;
    move(filepath: string, path: string, source: string, isFile: boolean): Promise<IFileBrowserAnswer>;
    fileRemove(path: string, file: string, source: string): Promise<IFileBrowserAnswer>;
    folderRemove(path: string, file: string, source: string): Promise<IFileBrowserAnswer>;
    folderRename(path: string, name: string, newname: string, source: string): Promise<IFileBrowserAnswer>;
    fileRename(path: string, name: string, newname: string, source: string): Promise<IFileBrowserAnswer>;
    crop(path: string, source: string, name: string, newname: string | void, box: ImageBox | void): Promise<IFileBrowserAnswer>;
    resize(path: string, source: string, name: string, newname: string | void, box: ImageBox | void): Promise<IFileBrowserAnswer>;
}
