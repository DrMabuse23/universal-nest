import { Module } from '@nestjs/common';
import { join } from 'path';
import { AngularUniversalModule, applyDomino } from '@nestjs/ng-universal';
import { AppController } from './app.controller';
import { CoreModule } from './src/core/core.module';

const BROWSER_DIR = join(process.cwd(), 'dist/browser');
applyDomino(global, join(BROWSER_DIR, 'index.html'));

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      viewsPath: BROWSER_DIR,
      bundle: require('./../dist/server/main.js'),
    }),
    CoreModule,
  ],
  controllers: [AppController],
})
export class ApplicationModule {}
