import React from 'react';

import { UpdateOperation, IUpdateOperationProps } from '.';

export default {
  title: 'Sidetree/Operations',
  component: UpdateOperation,
};

const update = {
  type: 'update',
  did_suffix: 'EiDpoi14bmEVVUp-woMgEruPyPvVEMtOsXtyo51eQ0Tdig',
  delta:
    'eyJwYXRjaGVzIjpbeyJhY3Rpb24iOiJhZGQtcHVibGljLWtleXMiLCJwdWJsaWNfa2V5cyI6W3siaWQiOiJuZXcta2V5MSIsInR5cGUiOiJFY2RzYVNlY3AyNTZrMVZlcmlmaWNhdGlvbktleTIwMTkiLCJqd2siOnsia3R5IjoiRUMiLCJjcnYiOiJzZWNwMjU2azEiLCJ4IjoiZkRuTnVXdElaSmdMVGdweS1CXzNNR25ZLXMzX212YUswaDJJRmsxeEJRQSIsInkiOiJVMGlTTWVsSm4tQjU2bmVkeXRIOTNoUDR2V09CWWhtNklITTN0eFpsTlBZIn0sInB1cnBvc2UiOlsiYXV0aCIsImdlbmVyYWwiXX1dfV0sInVwZGF0ZV9jb21taXRtZW50IjoiRWlCYzNta3U4RXNJM1RvWnJfNDZWajNKRjJHbXBiNE1hd3o3WW1TSnRwSUVQQSJ9',
  signed_data:
    'eyJhbGciOiJFUzI1NksifQ.eyJ1cGRhdGVfa2V5Ijp7Imt0eSI6IkVDIiwiY3J2Ijoic2VjcDI1NmsxIiwieCI6IjFVZE5yVmFwZHVQdDhIVlNhSmpRZGk3WWQyVjR0YmRlajF5bkdKbmdSZXciLCJ5IjoicXpyd0dSWmdLbEwyTU5UVElJLWFmUE9sQWhiM2VhVkNzanBGWWtCNEFrVSJ9LCJkZWx0YV9oYXNoIjoiRWlDR2daN015cFNXcUdxOTRLOTh0ZkV1aGc2cmw1Z1Z4aVBaQnRWQUNHS20ydyJ9.7R4IbXxphOhaJgp-b3zvnQsrJFJCkXBRANQKSsURaTQWB71cJ9-klwze9Q5DXyNg4_UAaxXrmuQf_j7Y0RJA6g',
};

const didMethodPrefix = 'elem:ropsten';

export const Update = (props?: Partial<IUpdateOperationProps>) => (
  <div style={{ padding: '8px' }}>
    <UpdateOperation
      didMethodPrefix={didMethodPrefix}
      operation={update}
      {...props}
    />
  </div>
);
