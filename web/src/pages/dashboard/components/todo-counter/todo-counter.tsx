import React from 'react';

interface TodoCounterProps {
  incompleted: number;
}

const TodoCounter: React.FC<TodoCounterProps> = ({ incompleted }) => (
  <div className="todo-counter" style={{ padding: '1rem 0' }}>
    {incompleted > 0 ? `You have ${incompleted} todo(s) to finish` : ''}
  </div>
);

export default TodoCounter;
