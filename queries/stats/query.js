import React from 'react';
import { gql } from 'apollo-boost';

export const statistics = gql`
  {
    country(name: "Ghana") {
      result {
        deaths
        cases
        recovered
        updated
      }
    }
  }
`;
