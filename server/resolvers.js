const repository = require('./repository.js');
const resolverRepoInstance = new repository();

const resolvers = {
  Query: {
    continents: () => {
      return resolverRepoInstance.getContinents();
    },
    countries: async (_, args) => {
      if (args.continentCode) {
        return await resolverRepoInstance.getCountries(args.continentCode);
      }
    }
  }
};

module.exports = resolvers;
