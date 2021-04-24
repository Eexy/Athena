import { Checkbox, Row, Col, Divider, Button } from "antd";
import { useState } from "react";
import { useUpdateTodoStatusMutation} from "../generated/graphql";

interface TodoProps {
  desc: string;
  completed: boolean;
  id: string;
}

export const Todo: React.FC<TodoProps> = ({ id, desc, completed }) => {
  const [isCompleted, setStatus] = useState(completed);
  const [,updateTodoStatus] = useUpdateTodoStatusMutation();

  const handleOnChange = async () => {
    try{
      await updateTodoStatus({id, completed: !isCompleted});
    }catch(e){
      console.log(e);
    }
    setStatus(!isCompleted);
  };

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
            <Button danger>Delete</Button>
          </Col>
        </Row>
      </Row>
      <Divider />
    </div>
  );
};
