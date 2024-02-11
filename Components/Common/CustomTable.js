import {Table} from "antd";
import DataAbsentCard from "/Components/Dashboard/DataAbsentCard";

const CustomTable = ({
                         columnList,
                         tableClassname,
                         tableData,
                         rowSelection,
                         selectable
                     }) => {
    return (
        <Table
            columns={columnList}
            dataSource={tableData}
            className={`custom-table ${tableClassname}`}
            rowSelection={selectable ? {...rowSelection} : null}
            locale={{
                emptyText: (<DataAbsentCard/>)
            }}
        />
    )
}

export default CustomTable