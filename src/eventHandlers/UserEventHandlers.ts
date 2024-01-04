// eventHandlers/UserEventHandlers.ts
import { Server} from 'socket.io';

export class UserEventHandlers {
    constructor(private io: Server) {
        console.log(io);
        io.on('connection', () => {
            console.log('a user connected');
          });
               
    }

}
