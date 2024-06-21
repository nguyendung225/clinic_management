import "./DropList.scss";

type Props = {
    children: any[];
}

const DropList = ({
    children
}: Props) => {
  return (
      <ul className='m-0 p-0 drop-list-container w-200px h-fit'>
        {children?.map((pItem: any) => {
            let hasChildren = pItem?.children;
            return (
                <li className={`
                    position-relative
                    p-2 drop-list-item 
                    d-flex justify-content-between
                    ${hasChildren ? "has-children" : ""}`}
                    // onClick={() => pItem?.action()}
                >
                    <span onClick={() => pItem?.action ? pItem?.action() : {}} className="position-absolute top-0 bottom-0 start-0 end-0"></span>
                    {pItem?.title}
                    {
                        hasChildren && (
                            <div className="child-drop-list show-children">
                                <DropList children={pItem?.children} />
                            </div>
                        )
                    }
                    {pItem?.component && <div className="z-index-1060">
                        {pItem?.component}
                    </div>}
                </li>
            )
        })}
    </ul>
  )
}

export default DropList