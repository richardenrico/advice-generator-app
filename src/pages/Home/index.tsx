import Button from 'shared/components/Button'
import Divider from 'shared/components/Divider'

function Home() {
    return (
        <div className="h-screen bg-dark_blue">
            <div className="container mx-auto flex h-full items-center justify-center">
                <div className="mx-4 w-full max-w-lg rounded-xl bg-dark_grayish_blue">
                    <div className="relative flex flex-col items-center px-5 py-11">
                        <p className="text-center text-xs uppercase tracking-[.3em] text-neon_green">
                            advice #117
                        </p>
                        <p className="my-5 text-center text-[28px] text-light_cyan">
                            "It is easy to sit up and take notice, what's
                            difficult is getting up and taking action."
                        </p>
                        <div className="mb-5">
                            <Divider />
                        </div>
                        <div className='absolute -bottom-8'>
                            <Button />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
