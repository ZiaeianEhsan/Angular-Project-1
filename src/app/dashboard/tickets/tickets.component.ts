import { Component } from "@angular/core";
import { NewTicketsComponent } from "./new-tickets/new-tickets.component";
import { Ticket } from "./tickets.model";
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: "app-tickets",
  standalone: true,
  imports: [NewTicketsComponent, TicketComponent],
  templateUrl: "./tickets.component.html",
  styleUrl: "./tickets.component.css",
})
export class TicketsComponent {
  tickets: Ticket[] = [];
  onAdd(ticketData: { title: string; text: string }) {
    const newTicket: Ticket = {
      id: Math.random().toString(),
      title: ticketData.title,
      request: ticketData.text,
      status: "open",
    };
    this.tickets.push(newTicket);
  }
}
