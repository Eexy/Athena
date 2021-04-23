import { Button, Form, Input, Row } from "antd";
import { useMediaQuery } from "react-responsive";

interface TodoInputFormProps {
  setHiden(value: boolean): void;
  addTodoCallback(desc: string): void;
}

export const TodoInputForm: React.FC<TodoInputFormProps> = ({ setHiden, addTodoCallback }) => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 550px)" });
  const handleClick = () => {
    setHiden(true);
  };

  const onFinish = (values: any) => {
    setHiden(true);
    addTodoCallback(values.desc);
  }

  const largeScreenForm = () => {
    return (
      <Form layout="inline" style={{width: '100%'}} onFinish={onFinish}>
        <Form.Item
          name="desc"
          rules={[
            { required: true, message: "Please enter todo's description" },
          ]}
        >
          <Input
            style={{ minWidth: "320px" }}
            placeholder="Do homework, clean the room..."
          />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary">
            Add todo
          </Button>
        </Form.Item>
        <Form.Item>
          <Button htmlType="reset" danger onClick={handleClick}>
            Cancel
          </Button>
        </Form.Item>
      </Form>
    );
  };

  const smallScreenForm = () => {
    return (
      <Form style={{width: '100%'}} layout="vertical" onFinish={onFinish}>
        <Row>
          <Form.Item
            name="desc"
            style={{width: '100%'}}
            rules={[
              { required: true, message: "Please enter todo's description" },
            ]}
          >
            <Input
              style={{ width: "300px" }}
              placeholder="Do homework, clean the room..."
            />
          </Form.Item>
        </Row>
        <Row justify="center">
          <Form.Item>
            <Button htmlType="submit" type="primary">
              Add todo
            </Button>
          </Form.Item>
          <Form.Item>
            <Button htmlType="reset" danger style={{marginLeft: '0.8rem'}} onClick={handleClick}>
              Cancel
            </Button>
          </Form.Item>
        </Row>
      </Form>
    );
  };

  return (<div>
    {isSmallScreen ? smallScreenForm() : largeScreenForm()}
  </div>);
};
