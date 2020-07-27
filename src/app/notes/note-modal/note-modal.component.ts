import { Component, OnInit, Input } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

import { NoteData } from "../core/note-data";

@Component({
  selector: "note-modal",
  templateUrl: "./note-modal.component.html",
})
export class NoteModalComponent implements OnInit {
  @Input() note: NoteData;
  @Input() noteDelete: NoteData;
  @Input() buttonLabel: string = "Add";
  noteForm: FormGroup;

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
    this.editNote();
  }

  private createForm() {
    this.noteForm = this.fb.group({
      title: ["", Validators.required],
      content: ["", [Validators.required, Validators.maxLength(300)]],
    });
  }

  editNote() {
    if (this.note) {
      this.noteForm.patchValue(this.note);
    }
  }

  onSubmit() {
    this.activeModal.close(this.noteForm.value);
  }
}
