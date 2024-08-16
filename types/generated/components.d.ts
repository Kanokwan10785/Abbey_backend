import type { Schema, Attribute } from '@strapi/strapi';

export interface CategoryModle extends Schema.Component {
  collectionName: 'components_category_modles';
  info: {
    displayName: 'modle';
    icon: '';
  };
  attributes: {
    name: Attribute.String;
    category: Attribute.Enumeration<
      ['Shirt-item', 'Pant-item', 'Skin-item', 'Food-item']
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'category.modle': CategoryModle;
    }
  }
}
