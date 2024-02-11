import {CardStack} from "/Utils/svgs";

const Intro = () => {
    return (
        <div className={'intro-main d-flex flex-center ht-100'}>
            <CardStack/>
            <div className={'heading'}>
                Meet the New Trading Journal
            </div>
            <div className={'description'}>
                Revolutionize your trading experience with our cutting-edge journaling software. Effortlessly track,
                analyze, and optimize your trades for success and growth.
            </div>
        </div>
    )
}

export default Intro