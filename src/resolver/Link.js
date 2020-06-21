function info() {
    `This is the API of a hackernew Clone`
}
function feed(root, args, context, info) {
    return context.prisma.links()
}

function link(root, args, context) {
    return context.prisma.link({id: args.id})
}

module.exports = {
    info,
    feed,
    link,
}