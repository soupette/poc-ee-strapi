import React from 'react';
import { Inputs } from '@buffetjs/custom';
import { Container, Row, Col } from 'reactstrap';

const Edit = ({ data, disabled, id, isLoading, title, onChange, onSubmit }) => {
  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <div>
      <h1>
        {title} Role {id}{' '}
      </h1>
      <form onSubmit={onSubmit}>
        <Container fluid>
          <Row>
            <Col md="6" lg="6">
              <Inputs
                type="text"
                name="name"
                value={data.name}
                disabled={disabled}
                onChange={onChange}
              />
            </Col>
            <Col md="6" lg="6">
              <Inputs
                type="textarea"
                name="description"
                onChange={onChange}
                value={data.description}
                disabled={disabled}
              />
            </Col>
          </Row>
        </Container>
      </form>
    </div>
  );
};

Edit.defaultProps = {
  disabled: true,
  onChange: () => {},
  onSubmit: (e) => e.preventDefault,
};

export default Edit;
