import React from 'react';
import Wrapper, { A } from './Wrapper';

function LeftMenuFooter() {
  return (
    <Wrapper>
      <div className="poweredBy">
        <A key="website" href="https://atp.dev" target="_blank" rel="noopener noreferrer">
          ATP
        </A>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
