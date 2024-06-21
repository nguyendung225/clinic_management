import clsx from 'clsx'
import React, { useEffect, useState } from 'react'

type Props = {
    dataDSPhieu: any
    setTTPhieu: any
}

export default function DanhSachLSPhieu({ dataDSPhieu, setTTPhieu }: Props) {
    useEffect(() => {
        setSelected(false)
    }, [dataDSPhieu])
    const [selected, setSelected] = useState(false)
    
    return (
        <>
            <div className={clsx("ds-lich-su-phieu bg-white", { "min-h-80px": dataDSPhieu?.length > 0 })}>
                {dataDSPhieu?.map((data: any) => (<>
                    <div className={clsx('phieu-item', { "active": selected === data?.id, "active-refund": selected === data?.id && data?.ngayHuy, "refund ": data?.ngayHuy })} onClick={() => {
                        setSelected(data?.id)
                        setTTPhieu(data)
                    }}>
                        <div className='item-date'> {data?.ngay}</div>
                        <div className='item-type'> {data?.loaiPhieu}</div>

                    </div>
                </>))}
            </div>
        </>
    )
}