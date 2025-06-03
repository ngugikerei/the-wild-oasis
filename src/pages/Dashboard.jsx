import { Calendar } from "antd";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Dashboard() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <p>TEST</p>
      </Row>

      <Row type="horizontal">
        <Calendar></Calendar>
      </Row>
    </>
  );
}

export default Dashboard;
