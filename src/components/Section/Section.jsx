import { Children } from 'react';

// const Section = ({title = 'Title', children}) => {
const Section = ({title , children}) => {
  return (
    <>
      {title && <h2> {title} </h2>}
      <div className='section-content'>{children}</div>
    </>
  );
};

export default Section;
