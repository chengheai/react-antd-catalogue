import React from 'react';
import { connect } from 'dva';
import { Button, Icon } from 'antd';

function IndexPage() {
  return (
    <div style={{ width: 400, margin: '100px auto' }}>
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="danger">Danger</Button>
      <Button type="primary" shape="circle" icon="search" />
      <Button type="primary" icon="search">Search</Button>
      <Button shape="circle" icon="search" />
      <Button icon="search">Search</Button>
      <br />
      <Button shape="circle" icon="search" />
      <Button icon="search">Search</Button>
      <Button type="dashed" shape="circle" icon="search" />
      <Button type="dashed" icon="search">Search</Button>
      <Icon type="desktop" style={{fontSize:28, color:'#c00'}} />
  </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
