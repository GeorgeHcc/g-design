import React from "react";

import Button from "../button";

export default ()=>(
  <section style={{display:"grid",gridColumn:3}}>
    <Button type='primary' size="lg">Primary</Button>
    <Button type='primary'>Primary</Button>
    <Button type='primary' size="sm">Primary</Button>
  </section>
)
