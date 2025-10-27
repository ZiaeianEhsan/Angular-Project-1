import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  output,
  viewChild,
  ViewChild,
} from "@angular/core";
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
export class NewTicketsComponent implements AfterViewInit, OnInit {
  // private form = viewChild.required<ElementRef<HTMLFormElement>>("form");
  @ViewChild("form") form?: ElementRef<HTMLFormElement>;
  add = output<{ title: string; text: string }>();
  ngOnInit(): void {
    console.log("INIT HEY I'M HERE");
    console.log(this.form);
  }
  ngAfterViewInit() {
    console.log("HEY I'M HERE");
    console.log(this.form);
  }
  onSubmit(title: string, text: string) {
    this.add.emit({ title, text });
    console.log(title);
    console.log(text);
    this.form?.nativeElement.reset();
  }
}
