import {
  afterNextRender,
  afterRender,
  Component,
  contentChild,
  ElementRef,
  inject,
  input,
  Input,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  selector: "app-control",
  standalone: true,
  imports: [],
  templateUrl: "./control.component.html",
  styleUrl: "./control.component.css",
  encapsulation: ViewEncapsulation.None,
  host: {
    class: "control",
    "(click)": "onClick()",
  },
})
export class ControlComponent {
  label = input.required<string>();
  private el = inject(ElementRef);
  private control =
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>("input");
  constructor() {
    afterRender(() => {
      console.log("AFTER RENDER");
    });
    afterNextRender(() => {
      console.log("AFTER NEXT RENDER");
    });
  }
  onClick() {
    console.log("clicked!");
    console.log(this.el);
    console.log(this.control());
  }
}
