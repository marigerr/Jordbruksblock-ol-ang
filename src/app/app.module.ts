import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material';
import {MatSliderModule} from '@angular/material/slider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { StaticSidebarComponent } from './static-sidebar/static-sidebar.component';
import { JordbruksblockService } from './jordbruksblock.service';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    StaticSidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatButtonModule,
    MatSliderModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [JordbruksblockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
