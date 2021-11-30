import React from 'react';
import { error404 } from '../assets/img/images';
import '../css/Error404.css';

const Page404 = () => {
  return (
    <div className="error404">
      <h4>Error 404: Page not found</h4>
      <img src={error404.img} alt={error404.title} />
    </div>
  );
};

export default Page404;
