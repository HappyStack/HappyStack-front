import { NgModule } from '@angular/core';
import { TruncatePipe } from './truncate.pipe';
import { HtmlToPlainTextPipe } from './html-to-plain-text.pipe';

export const PIPES = [
  TruncatePipe, 
  HtmlToPlainTextPipe
];

@NgModule({
  declarations: PIPES,
  exports: PIPES,
})
export class PipesModule {}
