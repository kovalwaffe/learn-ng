import { InjectionToken } from '@angular/core';

export const FILE_UPLOADER_GLOBAL_CONFIG =
  new InjectionToken<FileUploaderGlobalConfig>('file-uploader-global-config');

export interface FileUploaderGlobalConfig {
  url: string;
  auto: string;
  multiple: string;
}
