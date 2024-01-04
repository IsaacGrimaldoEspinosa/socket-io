import express from 'express';
import { createServer } from 'node:http';
import envs from '@configs/env' 
import { SocketFramework } from '@frameworks/SocketFramework';
import cors from 'cors'
import path from 'node:path';


const app = express();
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));

const server = createServer(app);
new SocketFramework(server);


app.get('/', (_req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
  });

server.listen(envs.port, () => {
  console.log('server running at http://localhost:',envs.port);
});