import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import './Cardsbottom.css'


function Cardsbottom() {
  return (
    <Container>
      <Row>
        <Col>
          <Card className='card-content'>
            <img variant="top" alt='imagen' src="cards/DC_WEB_HOME_LANZAMIENTO_W22_KALISV.jpg" />
            <Card.Body>
              <Card.Text className='card-title'>
                SKATE FOOTWEAR
              </Card.Text>
              <Card.Text className='card-see-more'>
                <a href="/categories/hombres">VER MÁS &gt;</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='card-content'>
            <img variant="top" alt='imagen' src="cards/DC_WEB_HOME_LANZAMIENTO_W22_REMERAS.jpg" />
            <Card.Body>
              <Card.Text className='card-title'>
                DC SLIDES
              </Card.Text>
              <Card.Text className='card-see-more'>
                <a href="/categories/hombres">COMPRAR AHORA &gt;</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='card-content'>
            <img variant="top" alt='imagen' src="cards/DC_WEB_HOME_LANZAMIENTO_W22_KIDS.jpg" />
            <Card.Body>
              <Card.Text className='card-title'>
                DC WOMEN
              </Card.Text>
              <Card.Text className='card-see-more'>
                <a href="/categories/niños">VER MÁS &gt;</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Cardsbottom;