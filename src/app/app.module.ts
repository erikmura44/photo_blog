import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryEntryService } from './backend';

import { AppComponent } from './app.component';
import { EntryListComponent, EntryComponent, EntryService, EntryCommentFormComponent } from './entries';

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    EntryListComponent,
    EntryCommentFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryEntryService)
  ],
  providers: [EntryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
