import Link from 'next/link'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import "../../components/layout.js";

export default function FirstPost() {
  return (
    <Layout>
 
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>

	  <Container className="p-3">
    <Jumbotron>
      <h1 className="header">Welcome To React-Bootstrap</h1>
    </Jumbotron>
	<Button variant="primary">Primary</Button>{' '}
  </Container>
  <Button variant="primary">Primary</Button>{' '}
  <Button variant="secondary">Secondary</Button>{' '}
  <Button variant="success">Success</Button>{' '}
  <Button variant="warning">Warning</Button>{' '}
  <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
  <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
  <Button variant="link">Link</Button>
    </Layout>
  )
}