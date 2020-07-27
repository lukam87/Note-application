import { Component, OnInit } from "@angular/core";

import { NotesService } from "../core/notes.service";
import { NoteData } from "../core/note-data";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { NoteModalComponent } from "../note-modal/note-modal.component";
import { DeleteModalComponent } from "../delete-modal/delete-modal.component";

@Component({
  selector: "app-notes-items",
  templateUrl: "./notes-items.component.html",
  styleUrls: ["./notes-items.component.css"],
})
export class NotesItemsComponent implements OnInit {
  notes: NoteData[];

  constructor(
    private notesService: NotesService,
    private modalService: NgbModal,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit() {
    this.getNote();
  }

  getNote() {
    this.notes = this.notesService.getAll();
  }

  addNote() {
    const modalRef = this.modalService.open(NoteModalComponent);

    modalRef.result
      .then((result) => {
        this.notesService.addNoteData(result);
        this.getNote();
      })
      .catch((error) => {});
  }

  editNote(note: NoteData) {
    const modalRef = this.modalService.open(NoteModalComponent);
    modalRef.componentInstance.note = note;
    modalRef.componentInstance.buttonLabel = "Edit";
    this.notesService.currentNote = note;

    modalRef.result
      .then((result) => {
        this.notesService.editNote(result);
        this.getNote();
      })
      .catch((error) => {});
  }

  deleteNote(note: NoteData) {
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.title = note.title;

    modalRef.result
      .then((result) => {
        if (result) {
          this.notesService.deleteNote(note);
          this.getNote();
        }
      })
      .catch((error) => {});
  }
}
