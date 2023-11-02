/** @format */

import React from 'react';

export const Map: React.FC = () => {
  return (
    <iframe
      src={`${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_URL}`}
      width="100%"
      height="100%"
      style={{ border: '0' }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"></iframe>
  );
};
