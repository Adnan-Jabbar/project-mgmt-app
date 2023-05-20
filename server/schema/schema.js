// const { projects, clients } = require('../sampleData.js');
const Project = require('../models/Project');
const Client = require('../models/Client');

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, GraphQLList } = require('graphql');

// Project Type
const ProjectType = new GraphQLObjectType({
    name: 'Project',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        status: { type: GraphQLString },
        client: {
            type: ClientType,
            resolve(parent, args) {
                // return clients.find((client) => client.id === parent.clientId);  // Data getting through sampeData.js
                return clients.findById(parent.clienId);
            },
        },
    })
});

// Client Type
const ClientType = new GraphQLObjectType({
    name: 'Client',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields: {
        projects: {
            type: new GraphQLList(ProjectType),
            resolve(parent, args) {
                // return projects;  // Data getting through sampeData.js
                return Project.find();
            },
        },
        project: {
            type: ProjectType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // return projects.find((project) => project.id === args.id);  // Data getting through sampeData.js
                return Project.findById(args.id);
            },
        },
        clients: {
            type: new GraphQLList(ClientType),
            resolve(parent, args) {
                // return clients;  // Data getting through sampeData.js
                return Client.find();
            },
        },
        client: {
            type: ClientType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // return clients.find((client) => client.id === args.id);  // Data getting through sampeData.js
                return Client.findById(args.id);
            },
        },
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});

