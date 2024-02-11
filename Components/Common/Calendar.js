import {Calendar} from "antd";
import dayjs from "dayjs";
import {ArrowIcon} from "/Utils/svgs";

const CustomCalendar = () => {
    return (
        <Calendar
            headerRender={CustomHeader}
            className={'custom-calendar ht-100'}
            // validRange={[dayjs().startOf('month'), dayjs().startOf('month')]}
        />
    )
}

const CustomHeader = ({value, onChange, onTypeChange}) => {
    const handleDateChange = (dateType, actionType) => {
        let now = dayjs(value)
        if (dateType === 'month') {
            now = actionType === 'decrease' ? now.subtract(1, 'month') : now.add(1, 'month')
        } else if (dateType === 'year') {
            now = actionType === 'decrease' ? now.subtract(1, 'year') : now.add(1, 'year')
        }
        onChange(now)
    }

    return (
        <div className={'calendar-header-main d-flex align-items-center'}>
            <div className={'month-main d-flex align-items-center'}>
                <ArrowIcon
                    onClick={() => handleDateChange('month', 'decrease')}
                    className={'hover-pointer'}
                />
                <ArrowIcon
                    onClick={() => handleDateChange('month', 'increase')}
                    className={'hover-pointer right-arrow'}
                />
                <span className={'month-name'}>
                    {dayjs(value).format('MMMM')}
                </span>
            </div>
            <div className={'year-main d-flex align-items-center'}>
                <span className={'year-name'}>
                    {dayjs(value).format('YYYY')}
                </span>
                <ArrowIcon
                    onClick={() => handleDateChange('year', 'increase')}
                    className={'hover-pointer up-arrow'}
                />
                <ArrowIcon
                    onClick={() => handleDateChange('year', 'decrease')}
                    className={'hover-pointer down-arrow'}
                />
            </div>
        </div>
    )
}

export default CustomCalendar