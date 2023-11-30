// import express, { Request, Response } from 'express';
// import personaRoutes from './routes/personaRoutes';

import { Server } from "./server";

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(express.json()); // Add this line to enable JSON parsing in the request body
// app.use('/personas', personaRoutes); // Add this line to mount the Task API routes

// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello, TypeScript Express!');
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

const server=new Server();

server.listen();