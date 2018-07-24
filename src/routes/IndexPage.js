import React from 'react';
import { connect } from 'dva';
import { Button, Icon } from 'antd';

function IndexPage() {
  return (
    <div style={{ width: 400, margin: '100px auto' }}>
      <h1>hello react!</h1>
  </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
