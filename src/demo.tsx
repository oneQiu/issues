import { Button, Drawer } from 'antd';
import {} from '@ant-design/pro-list';
import { useState } from 'react';

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button onClick={() => setVisible(true)}>Open</Button>
      <Drawer visible={visible} onClose={() => setVisible(false)}>
        asd
      </Drawer>
    </div>
  );
};
