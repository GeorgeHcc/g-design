import React from 'react';
import Button from '../';
import '../styles/demo.scss';
export default () => (
  <section className="demo_container">
    <Button type="primary" size="lg">
      Primary
    </Button>
    <Button type="primary">Default</Button>
    <Button type="primary" size="sm">
      Small
    </Button>
    <Button type="link" size="lg">
      Link
    </Button>
  </section>
);
