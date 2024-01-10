import z from 'zod'

export const slipSchema = z.object({
    slip: z.object({
        id: z.number(),
        advice: z.string(),
    }),
})
