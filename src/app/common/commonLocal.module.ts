import { NgModule } from '@angular/core';
import { GoogleMapsServiceProvider } from './google.maps.service';
import { FormsModule } from '@angular/forms';
import {
    TabsModule,
    CarouselModule,
    PaginationModule,
    TypeaheadModule,
    ModalModule,
    TooltipModule,
    TooltipConfig
} from 'ng2-bootstrap';
import { SelectModule } from 'ng2-select';
import { NguiMapModule } from '@ngui/map';
import { CommonModule } from '@angular/common';
@NgModule({
    exports: [
        CommonModule,
        FormsModule,
        TabsModule,
        TypeaheadModule,
        TooltipModule,
        PaginationModule,
        CarouselModule,
        SelectModule,
        NguiMapModule,
        ModalModule,
    ],
    providers: [GoogleMapsServiceProvider, TooltipConfig],
})
export class CommonLocalModule {
}
