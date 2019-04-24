module.exports = function(sequelize, DataTypes) {
    var Competitor = sequelize.define("Competitor", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        beltLevel: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        weightClass: {
            type: DataTypes.STRING,
            allowNull: false
        },
       
        profileImage: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              isUrl: true,
            },
        },
        created: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    },
    {
        timestamps: false
    });
    return Competitor;
};
  