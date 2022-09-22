const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require('../controllers/Todos');

const router = require('express').Router();

router.get('/todos', getTodos);
router.post('/todos', createTodo);
router.put('/todos/:todoID', updateTodo);
router.delete('/todos/:todoID', deleteTodo);

module.exports = router;
