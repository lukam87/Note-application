import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { MainLayoutComponent } from "./main-layout/main-layout.component";
import { NotesItemsComponent } from "./notes/notes-items/notes-items.component";
import { NoteModalComponent } from "./notes/note-modal/note-modal.component";
import { DeleteModalComponent } from './notes/delete-modal/delete-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    NotesItemsComponent,
    NoteModalComponent,
    DeleteModalComponent,
  ],
  imports: [BrowserModule, NgbModule, ReactiveFormsModule],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent],
})
export class AppModule {}
