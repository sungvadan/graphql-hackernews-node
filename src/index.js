const { GraphQLServer } = require('graphql-yoga')

let links = [{
    id: 'link-0',
    description: 'Fullstack tutorial for GraphQL',
    url: 'www.howtographql.com'
}]

let idCount = links.length

const resolvers = {
    Query: {
        info: () => `This is the API of a hackernew Clone`,
        feed: () => links,
        link: (parent, args) => {
            let link = null;
            for (let i = 0; i < links.length; i++) {
                if (links[i].id === args.id) {
                    link = links[i]
                }
            }

            return link
        }
    },
    Mutation: {
      post: (parent, args) => {
          let link = {
              id: `link-${idCount}`,
              description: args.description,
              url: args.url,
          }
          links.push(link)

          return link
      }
    },
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers
})

server.start(() => console.log(`Server is running on http://localhost:4000`))