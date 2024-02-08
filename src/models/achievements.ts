module.exports = (sequelize: any, Sequelize: any) => {
    return sequelize.define(
        "achievements",
        {
            
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            progress: {
                type: Sequelize.TINYINT,
                allowNull: false,
            },
            //němel by tohle spíš být boolean a ne tinyint(1) nebo jsem retarded jako vždycky
            //má vůbec mySQL boolean?
            //fuck
            done: {
                type: Sequelize.TINYINT,
                allowNull: false,
            },
            //idk jestli sem mám dávat Image Paths ale fuck it¨
            //UPDATE: ano mám takže we chilling
            imagePath: {
                type: Sequelize.STRING,
                allowNull: true,
            },



            createdAt: {
                type: Sequelize.DATE
            },
            updatedAt: {
                type: Sequelize.DATE
            }
        }
    )
}