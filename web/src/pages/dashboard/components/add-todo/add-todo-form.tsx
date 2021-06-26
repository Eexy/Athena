import React, { useState } from 'react';
import { Input, Button, Space } from 'antd';

interface AddTodoFormProps {
  hideBox(hide: boolean): void;
  newTodo(desc: string): void;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ hideBox, newTodo }) => {
  const [todoValue, setTodoValue] = useState('');

  const cancel = () => {
    setTodoValue('');
    hideBox(true);
  };

  const add = () => {
    newTodo(todoValue);
    setTodoValue('');
    hideBox(true);
  };

  const handleInputChange = (e: any) => {
    setTodoValue(e.target.value);
  };

  return (
    <div style={{ padding: 0 }}>
      <Input
        placeholder="What you gonna do ?"
        value={todoValue}
        onChange={handleInputChange}
      />
      <Space size="middle" style={{ paddingTop: 8 }}>
        <Button onClick={add} type="primary">
          Add
        </Button>
        <Button onClick={cancel} danger>
          cancel
        </Button>
      </Space>
    </div>
  );
};

export default AddTodoForm;
