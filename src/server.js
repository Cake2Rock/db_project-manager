import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost', 
    user: 'root',      
    password: '',      
    database: 'mybd',  
  });
app.get('/', (req, res) => {
	res.json('Connected to backend');
});

app.get('/project', (req, res) => {
	const q = 'SELECT * FROM Project';
	db.query(q, (err, data) => {
		if (err) return res.json(err.message);
		return res.json(data);
	});
});

app.get('/project/:id', (req, res) => {
	const id = req.params.id;
	const q = 'SELECT * FROM Project WHERE id = ?';

	db.query(q, [id], (err, data) => {
		if (err) return res.json(err);
		return res.json(data);
	});
});

app.post('/project', (req, res) => {
	const q = 'INSERT INTO Project (`id`, `name`, `description`, `manager`, `isArchived`) VALUES (?)';
	const values = [null, req.body.name, req.body.description, req.body.manager, req.body.isArchived];
	db.query(q, [values], (err, data) => {
		if (err) return res.json(err);
		return res.json('Project registred successfuly');
	});
});

app.delete('/project/:id', (req, res) => {
	const id = req.params.id;
	const q = 'DELETE FROM project WHERE id = ?';

	db.query(q, [id], (err, data) => {
		if (err) return res.json(err);
		return res.json('Project deleted successfuly');
	});
});

app.put('/project/:id', (req, res) => {
	const id = req.params.id;
	const q = 'UPDATE Project SET `name`= ?, `description`= ?, `manager`= ?, `isArchived`= ? WHERE id = ?';

	const values = [req.body.name, req.body.description, req.body.manager, req.body.isArchived];

	db.query(q, [...values, id], (err, data) => {
		if (err) return res.send(err);
		return res.json('Updated successfuly');
	});
});

app.listen(8080, () => {
	console.log(`Connected on the port 8080 ~ http://localhost:8080/`);
});