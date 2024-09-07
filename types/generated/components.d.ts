import type { Schema, Attribute } from '@strapi/strapi';

export interface MaleCourse extends Schema.Component {
  collectionName: 'components_male_courses';
  info: {
    displayName: 'Course';
  };
  attributes: {
    name: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'male.course': MaleCourse;
    }
  }
}
