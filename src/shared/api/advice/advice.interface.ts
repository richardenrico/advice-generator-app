import { SlipResponse } from 'shared/api/advice/advice'

export interface AdviceApi {
    getSlip(signal?: AbortSignal): Promise<SlipResponse>
}
