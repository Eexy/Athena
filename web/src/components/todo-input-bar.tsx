import { Col, Row, Button } from "antd";
import { useState } from "react";
import { TodoInputForm } from "./todo-input-form";

interface TodoInputBarProps {
  addTodoCallback(desc: string): void;
}

export const TodoInputBar: React.FC<TodoInputBarProps> = ({addTodoCallback}) => {
  const [isHidden, setHidden] = useState(true);

  const handleClick = () => {
    setHidden(false);
  };

  return (
    <div className="todo-input-bar">
      <Row justify="center">
        <Col style={{ width: "100%" }}>
          <Row justify="center" style={{width: '100%'}}>
            {isHidden ? (
              <Button onClick={handleClick} type="link">
                + Add Todo
              </Button>
            ) : (
              <TodoInputForm setHiden={setHidden} addTodoCallback={addTodoCallback} />
            )}
          </Row>
        </Col>
      </Row>
    </div>
  );
};
