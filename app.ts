import express from 'express';
import bodyParser from 'body-parser';

import todosRoutes from 'express';

const app = express();

app.use(todosRoutes);

app.use(bodyParser.json());


app.listen(3000);