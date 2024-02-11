import Image from "next/image";

const DataAbsentCard = () => {
    return (
        <div className={'data-absent-card-main d-flex flex-center ht-100'}>
            <Image
                src={'/Assets/no-data.png'}
                alt={'no-data'}
                width={150}
                height={150}
            />
            <div className={'primary-heading'}>
                Uh Oh! No data available
            </div>
            <div className={'secondary-heading'}>
                Add Trades to view data here
            </div>
        </div>
    )
}

export default DataAbsentCard