import { Checkbox, Row, Col, Divider, Button } from "antd";
import { useState } from "react";
import { useDeleteTodoMutation, useUpdateTodoStatusMutation} from "../generated/graphql";

interface TodoProps {
  desc: string;
  completed: boolean;
  id: string;
  updateTodoList(): void;
}

export const Todo: React.FC<TodoProps> = ({ id, desc, completed, updateTodoList }) => {
  const [isCompleted, setStatus] = useState(completed);
  const [,updateTodoStatus] = useUpdateTodoStatusMutation();
  const [,deleteTodo] = useDeleteTodoMutation();

  const handleOnChange = async () => {
    try{
      await updateTodoStatus({id, completed: !isCompleted});
    }catch(e){
      console.log(e);
    }
    setStatus(!isCompleted);
  };

  const handleOnClick = async () => {
    try{
      await deleteTodo({id});
      updateTodoList();
    }catch(e){
      console.log(e);
    }
  }

  return (
    <div className="todo">
      <Row justify="space-between">
        <Row>
          <Col>
            <Checkbox
              defaultChecked={completed}
              onChange={handleOnChange}
            ></Checkbox>
          </Col>
          <Col>
            <div style={{ paddingLeft: "0.5rem" }} className="todo-desc">
              {desc}
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={handleOnClick} danger>Delete</Button>
          </Col>
        </Row>
      </Row>
      <Divider />
    </div>
  );
};
