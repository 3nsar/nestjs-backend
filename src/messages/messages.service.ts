import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
  private messages = [
    { id: 1, text: "Hallo Welt" },
    { id: 2, text: "NestJS ist einfach!" }
  ];

  findAll() {
    return this.messages;
  }
}