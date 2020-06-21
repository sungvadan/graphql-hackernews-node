const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')

const resolvers = {
    Query: {
        info: () => `This is the API of a hackernew Clone`,
        feed: (root, args, context, info) => {
            return context.prisma.links()
        },
        link: (root, args, context) => {
            return context.prisma.link({id: args.id})
        }
    },
    Mutation: {

    },
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: { prisma }
})

server.start(() => console.log(`Server is running on http://localhost:4000`))