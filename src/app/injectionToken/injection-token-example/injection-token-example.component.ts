import { Component, Inject, Optional } from '@angular/core';
import { FILE_UPLOADER_GLOBAL_CONFIG, FileUploaderGlobalConfig } from "../file-uploader-global-config.token";

@Component({
  selector: 'app-injection-token-example',
  templateUrl: './injection-token-example.component.html',
  styleUrls: ['./injection-token-example.component.scss']
})
export class InjectionTokenExampleComponent {
  protected readonly config = {
    auto: true,
    multiple: false,
    url: 'some-url'
  };

  constructor(@Optional() @Inject(FILE_UPLOADER_GLOBAL_CONFIG) globalConfig: FileUploaderGlobalConfig) {
    this.config = globalConfig ? Object.assign(this.config, globalConfig) : this.config;
  }
}
