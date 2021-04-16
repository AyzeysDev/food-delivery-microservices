import { Row, Col, ListGroup, Card } from 'react-bootstrap';

const OrderIndex = ({ orders }) => {
  return (
    <Row>
      {orders.map((order) => {
        return (
          <Col key={order.id} sm={10} md={5} lg={4} xl={4}>
          <Card className='my-3 p-3 rounded' bg={'Primary'} text={'dark'} border="dark" style={{ width: '20rem' }}>
          <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>{order.food.name} - {order.status}</ListGroup.Item>
            <ListGroup.Item>Description: {description}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
        </Card>
          </Col>
        );
      })}
    </Row>
  );
};

OrderIndex.getInitialProps = async (context, client) => {
  const { data } = await client.get('/api/orders');

  return { orders: data };
};

export default OrderIndex;
