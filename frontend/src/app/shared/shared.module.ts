import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';
import { AngularCropperjsModule } from 'angular-cropperjs';

@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent,
        ImageCropperComponent        
    ],
    exports: [
        FooterComponent,
        HeaderComponent,
        ImageCropperComponent,
        AngularCropperjsModule
    ],
    imports: [
        CommonModule,
        AngularCropperjsModule
    ],
    providers: []
})
export class SharedModule {}
