import clsx from 'clsx'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {HeaderNotificationsMenu, HeaderUserMenu, Search, ThemeModeSwitcher} from '../../../partials'
import {useLayout} from '../../core'

const itemClass = 'ms-1 ms-lg-3'
const btnClass =
  'btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px'
const userAvatarClass = 'symbol-35px symbol-md-40px'
const btnIconClass = 'svg-icon-1'

const Navbar = () => {
  const {config} = useLayout()
  return (
    <div className='app-navbar flex-shrink-0'>
      <div className={clsx('app-navbar-item', itemClass)}>
        <div className='d-flex align-items-center'>
          <div className='d-flex me-5'>
            <p className='m-0 text-dark fs-7 me-1'>Khoa: </p>
            <p className='m-0 text-pri fs-7'>Tiếp đón</p>
          </div>
          <div className='d-flex me-5'>
            <p className='m-0 text-dark fs-7 me-1'>Phòng: </p>
            <p className='m-0 text-pri fs-7'>Tiếp đón</p>
          </div>
        </div>
        <div
          className={clsx('cursor-pointer d-flex align-items-center', userAvatarClass)}
          data-kt-menu-trigger="{default: 'click'}"
          data-kt-menu-attach='parent'
          data-kt-menu-placement='bottom-end'
        >
          <img src={toAbsoluteUrl('/media/avatars/blank.png')} alt='' width={30} height={30} className='rounded-circle'/>
          <p className='m-0 text-pri fs-7 ms-2'>Nguyễn Xuân Bách</p>
        </div>
        <HeaderUserMenu />
      </div>

      {config.app?.header?.default?.menu?.display && (
        <div className='app-navbar-item d-lg-none ms-2 me-n3' title='Show header menu'>
          <div
            className='btn btn-icon btn-active-color-primary w-35px h-35px'
            id='kt_app_header_menu_toggle'
          >
            <KTSVG path='/media/icons/duotune/text/txt001.svg' className={btnIconClass} />
          </div>
        </div>
      )}
    </div>
  )
}

export {Navbar}
