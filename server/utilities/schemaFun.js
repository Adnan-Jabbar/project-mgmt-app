const { GraphQLEnumType } = require('graphql');

const ProjectStatusEnum = new GraphQLEnumType({
    name: 'ProjectStatus',
    type: String,
    values: { 
        new: { value: 'Not Started' },
        progress: { value: 'In Progress' },
        completed: { value: 'Completed' },
    },
    defaultValue: 'Not Started',
});

module.exports = ProjectStatusEnum;

