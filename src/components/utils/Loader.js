import React from "react";
import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd';

const Loader = () => {

  return (
      <div className="text-center">
        <Flex align="center" gap="middle">
          <Spin
            indicator={
              <LoadingOutlined
                style={{
                  fontSize: 60,
                }}
                spin
              />
            }
          />
        </Flex>
      </div>
  )
}

export default Loader
