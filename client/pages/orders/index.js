import { Row, Col, ListGroup, Card } from 'react-bootstrap';

const OrderIndex = ({ orders }) => {
  return (
    <Row>
      {orders.map((order) => {
        return (
          <Col key={order.id} sm={4} md={2} lg={4} xl={3}>
          <Card className='my-3 p-3 rounded' bg={'Primary'} text={'dark'} border="info" style={{ width: '12rem' }}>
          <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>{order.food.name} - {order.status}</ListGroup.Item>
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
