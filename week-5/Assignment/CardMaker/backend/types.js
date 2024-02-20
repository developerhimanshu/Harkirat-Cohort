const zod = require('zod');

const createCard = zod.object({
    name: zod.string().min(1),
    description: zod.string().min(1),
    socialMedia: zod.object({
        linkedIn: zod.string(),
        twitter: zod.string(),
    }),
    interests: zod.array(zod.string()),
})

module.exports = {
    createCard: createCard,
}