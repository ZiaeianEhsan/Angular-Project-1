import { Component, ElementRef, viewChild, ViewChild } from "@angular/core";
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-new-tickets",
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: "./new-tickets.component.html",
  styleUrl: "./new-tickets.component.css",
})
export class NewTicketsComponent {
  private form = viewChild.required<ElementRef<HTMLFormElement>>("form");
  onSubmit(title: string, text: string) {
    console.log(title);
    console.log(text);
    this.form().nativeElement.reset();
  }
}
