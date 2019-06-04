import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material';
import {MatSliderModule} from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';

import { AppComponent } from './app.component';
import { MapComponent } from './component/map/map.component';
import { StaticSidebarComponent } from './component/static-sidebar/static-sidebar.component';
import { JordbruksblockService } from './jordbruksblock.service';
import { ControlsComponent } from './component/controls/controls.component';
import { LoadingScreenComponent } from './component/loading-screen/loading-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    StaticSidebarComponent,
    ControlsComponent,
    LoadingScreenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatButtonModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSnackBarModule,
    MatSelectModule,
  ],
  providers: [JordbruksblockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
