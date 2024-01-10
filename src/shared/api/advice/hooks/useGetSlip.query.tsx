import { useQuery } from '@tanstack/react-query'
import adviceService from 'shared/api/advice/advice.service'

function useGetSlip() {
    return useQuery({
        queryKey: ['slip'],
        queryFn: ({ signal }) => adviceService.getSlip(signal),
    })
}

export default useGetSlip
