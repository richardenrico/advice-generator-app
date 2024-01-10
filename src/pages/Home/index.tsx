import { useQueryClient } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { SlipResponse } from 'shared/api/advice/advice'
import useGetSlip from 'shared/api/advice/hooks/useGetSlip.query'
import Button from 'shared/components/Button'
import Divider from 'shared/components/Divider'

function Home() {
    const [data, setData] = useState<SlipResponse>({
        slip: {
            advice: '-',
            id: 0,
        },
    })

    const slip = useGetSlip()

    useEffect(() => {
        if (slip.data) {
            const temp: SlipResponse = slip.data

            setData(temp)
        }
    }, [slip.data, slip.isSuccess, slip.isFetching])

    const queryClient = useQueryClient()

    function handleButtonClick() {
        queryClient.invalidateQueries({
            queryKey: ['slip'],
        })
    }

    return (
        <div className="h-screen bg-dark_blue">
            <div className="container mx-auto flex h-full items-center justify-center">
                <div className="mx-4 w-full max-w-lg rounded-xl bg-dark_grayish_blue">
                    <div className="relative flex flex-col items-center px-5 py-11">
                        <p className="text-center text-xs uppercase tracking-[.3em] text-neon_green">
                            advice #{data.slip.id ?? '-'}
                        </p>
                        <p className="my-5 text-center text-[28px] text-light_cyan">
                            {data.slip.advice}
                        </p>
                        <div className="mb-5">
                            <Divider />
                        </div>
                        <div className="absolute -bottom-8">
                            <Button onClick={handleButtonClick} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
