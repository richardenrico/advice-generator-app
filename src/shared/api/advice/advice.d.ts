import { slipSchema } from "shared/api/advice/advice.schema";
import { z } from "zod";

export type SlipResponse = z.infer<typeof slipSchema>