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
import { Ng2MapModule } from 'ng2-map';
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
        Ng2MapModule,
        ModalModule,
    ],
    providers: [GoogleMapsServiceProvider, TooltipConfig],
})
export class CommonLocalModule {
}
