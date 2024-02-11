import {TradeRytIcon} from "/Utils/svgs";
import {SiderFooterItems, SiderItems} from "/app/dashboard/data";

const Sider = () => {
    return (
        <aside className={'sider-main d-flex ht-100'}>
            <div className={'icon-main d-flex justify-content-center'}>
                <TradeRytIcon
                    className={'trade-ryt-icon'}
                />
            </div>
            <div className={'content-main d-flex'}>
                {SiderItems?.map(item => (
                    <div className={'sider-item d-flex align-items-center hover-pointer'} key={item?.id}>
                        {item?.icon}
                        <span>{item?.label}</span>
                    </div>
                ))}
            </div>
            <div className={'footer-main d-flex'}>
                {SiderFooterItems?.map(item => (
                    <div className={'sider-item d-flex align-items-center hover-pointer'} key={item?.id}>
                        {item?.icon}
                        <span>{item?.label}</span>
                    </div>
                ))}
            </div>
        </aside>
    )
}

export default Sider