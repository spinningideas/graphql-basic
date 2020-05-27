const { gql } = require('apollo-server-express');
// The GraphQL schema in string form
const schema = gql`
  type Query {
    continents: [Continent]
    countries(continentCode: String!): [Country]
  }

  type Continent {
    continentId: String!
    continentCode: String!
    continentName: String!
  }

  type Country {
    countryId: String!
    countryName: String!
    countryCode: String!
    countryCode3: String!
    capital: String
    continentCode: String!
    area: Int
    population: Int
    lat: Float!
    lng: Float!
    currencyCode: String
    currencyName: String
    languages: String
  }
`;

module.exports = schema;
