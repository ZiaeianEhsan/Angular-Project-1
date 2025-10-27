import { Component, input, signal } from "@angular/core";
import { Ticket } from "../tickets.model";

@Component({
  selector: "app-ticket",
  standalone: true,
  imports: [],
  templateUrl: "./ticket.component.html",
  styleUrl: "./ticket.component.css",
})
export class TicketComponent {
  data = input.required<Ticket>();
  visibileDetails = signal(false);
  onToggleDetails() {
    this.visibileDetails.set(!this.visibileDetails());
  }
}
