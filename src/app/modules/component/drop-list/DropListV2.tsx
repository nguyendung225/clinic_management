import { IContextMenu } from "../../phan-he-tiep-nhan-thanh-toan/models/ModelTabDSDangKy";
import "./DropList.scss";

type Props = {
    data?: IContextMenu[];
    handleClickOptionContextMenu?: (value: any) => void;
    contextClientX?: number;
}

const DropList = ({ data, handleClickOptionContextMenu, contextClientX }: Props) => {
    const isOnRightEdge = (window.innerWidth - (contextClientX as number)) < 600;

    const childDropListStyle = {
        ...(isOnRightEdge ? { left: `calc(-100% - 0px)` } : { right: `calc(-100% - 0px)` }), top: `0px`,
    };

    return (
        <ul className='m-0 p-0 drop-list-container'>
            {data?.map((pItem: any) => {
                let hasChildren = pItem?.children?.length > 0;

                return (
                    pItem?.title
                        ? <div className="bg-secondary ps-3 fw-bold fs-5 py-1">{pItem?.title}</div>
                        : <li className={`position-relative p-1 drop-list-item d-flex justify-content-between align-items-center border-bottom`}>
                            <span onClick={() => handleClickOptionContextMenu?.(pItem)} className="position-absolute top-0 bottom-0 start-0 end-0"></span>

                            <span className="fs-4 min-w-15px text-center">{pItem?.icon}</span>

                            <div className="d-flex justify-content-between align-items-center w-100 ps-2">
                                <span>{pItem?.name}</span> <span>{hasChildren && <i className="fa-solid fa-caret-right"></i>}</span>
                            </div>

                            {hasChildren &&
                                <div className="child-drop-list show-children" style={childDropListStyle}>
                                    <DropList contextClientX={contextClientX} data={pItem?.children} handleClickOptionContextMenu={handleClickOptionContextMenu} />
                                </div>}
                        </li>
                )
            })}
        </ul>
    )
}

export default DropList