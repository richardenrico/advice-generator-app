import { SlipResponse } from 'shared/api/advice/advice'
import { AdviceApi } from 'shared/api/advice/advice.interface'
import { slipSchema } from 'shared/api/advice/advice.schema'
import { http } from 'shared/config/http'

class AdviceService implements AdviceApi {
    async getSlip(signal?: AbortSignal | undefined): Promise<SlipResponse> {
        const res = await http.get<SlipResponse>('/advice', { signal })

        return slipSchema.parse(res.data)
    }
}

export default new AdviceService()
