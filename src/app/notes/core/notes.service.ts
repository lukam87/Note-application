import { Injectable } from "@angular/core";

import { NoteData } from "./note-data";

@Injectable({
  providedIn: "root",
})
export class NotesService {
  storageNotes: NoteData[] = [];
  noteForm: string = "noteForm";
  currentNote: NoteData;

  constructor() {}

  ngOnInit() {}

  getAll() {
    return JSON.parse(localStorage.getItem(this.noteForm));
  }

  addNoteData(note: NoteData) {
    if (this.storageNotes.length >= 0) {
      this.storageNotes.push(note);
    }
    localStorage.setItem(this.noteForm, JSON.stringify(this.storageNotes));
  }

  editNote(note: NoteData) {
    let findNote = this.storageNotes.find(
      (x) => x.title === this.currentNote.title
    );

    this.storageNotes.splice(this.storageNotes.indexOf(findNote), 1, note);
    localStorage.setItem(this.noteForm, JSON.stringify(this.storageNotes));
  }

  deleteNote(note: NoteData) {
    let findNote = this.storageNotes.find((x) => x.title === note.title);

    this.storageNotes.splice(this.storageNotes.indexOf(findNote), 1);
    localStorage.setItem(this.noteForm, JSON.stringify(this.storageNotes));
  }
}
