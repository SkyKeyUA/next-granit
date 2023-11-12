/** @format */

import dynamic from 'next/dynamic';

export const dynamicImport = (componentImport: string, componentName: string) => {
  return dynamic(() => import(`${componentImport}`).then((mod) => mod[componentName]), {
    ssr: false,
  });
};

export const DynamicCatalog = dynamic(() =>
  import('@components/Header/Catalog').then((mod) => mod.Catalog),
);
