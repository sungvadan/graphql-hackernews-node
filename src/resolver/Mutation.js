function post(parent, args, context) {
    return context.prisma.createLink({
        description: args.description,
        url: args.url,
    })
}
function updateLink (parent, args, context) {
    return context.prisma.updateLink({
        data: {
            url: args.url,
            description: args.description,
        },
        where: {
            id: args.id
        }
    })
}
function deleteLink (parent, args, context) {
    return context.prisma.deleteLink({
        id: args.id
    })
}

module.exports = {
    post,
    updateLink,
    deleteLink
}