import {TradeRytIcon} from "/Utils/svgs";

const ActionFormCard = ({children}) => {
    return (
        <div className={'action-form-card-main'}>
            <TradeRytIcon />
            {children}
        </div>
    )
}

export default ActionFormCard