module.exports = (sequelize, Sequelize) => {
  const Listing = sequelize.define(
    'listing',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      exterior: {
        type: Sequelize.TEXT
      },
      google_maps: {
        type: Sequelize.TEXT
      },
      google_street: {
        type: Sequelize.TEXT
      },
      interior_1: {
        type: Sequelize.TEXT
      },
      interior_2: {
        type: Sequelize.TEXT
      },
      interior_3: {
        type: Sequelize.TEXT
      },
      interior_4: {
        type: Sequelize.TEXT
      },
      interior_5: {
        type: Sequelize.TEXT
      },
      interior_6: {
        type: Sequelize.TEXT
      },
      interior_7: {
        type: Sequelize.TEXT
      },
      interior_8: {
        type: Sequelize.TEXT
      },
      interior_9: {
        type: Sequelize.TEXT
      }
    },
    {
      timestamps: false
    }
  );

  return Listing;
};
