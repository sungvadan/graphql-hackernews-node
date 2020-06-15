const { GraphQLServer } = require('graphql-yoga')

let links = [{
    id: 'link-0',
    description: 'Fullstack tutorial for GraphQL',
    url: 'www.howtographql.com'
}]

let idCount = links.length

const findLinkById = (id) => {
    for (let i = 0; i < links.length; i++) {
        if (links[i].id === id) {
            return i
        }
    }

    return -1;
}
const resolvers = {
    Query: {
        info: () => `This is the API of a hackernew Clone`,
        feed: () => links,
        link: (parent, args) => {
            let index = findLinkById(args.id)
            if (index !== -1) {
                return links[index]
            }
            return null;
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
        },
        updateLink: (parent, args) => {
            let link = null
            let index = findLinkById(args.id)
            if (index !== -1) {
                link = links[index]
                link.url = args.url
                link.description = args.description
                links = Object.assign([], links, {index: link})
            }
            return link
        },
        deleteLink: (parent, args) => {
            let index = findLinkById(args.id)
            let link = null
            if (index !== -1) {
                link = links[index]
                links.splice(index, 1)
            }
            return link
        }
    },
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers
})

server.start(() => console.log(`Server is running on http://localhost:4000`))