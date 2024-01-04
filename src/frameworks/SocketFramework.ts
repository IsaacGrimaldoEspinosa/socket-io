import { UserEventHandlers } from '@/eventHandlers/UserEventHandlers';
import { Server as HttpServer } from 'node:http'
import { Server } from 'socket.io';

export class SocketFramework {
  private io: Server;
  private readonly userEventHandlers: UserEventHandlers

  constructor(server: HttpServer) {
    this.io = new Server(server);
    
    this.userEventHandlers = new UserEventHandlers(this.io)
  }
}
