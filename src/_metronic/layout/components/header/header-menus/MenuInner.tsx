import "../../../../../app/modules/styles/index.scss"
import { MenuItem } from './MenuItem';
import { MenuInnerWithSub } from './MenuInnerWithSub';
import { useContext } from 'react';
import { AppContext } from '../../../../../app/modules/appContext/AppContext';
import { MenuTab } from './MenuTab';
import { localStorageItem } from '../../../../../app/modules/utils/LocalStorage';
export function MenuInner() {
  const { DSMenu, setEventKey } = useContext(AppContext);

  const handleChange = (id: string | undefined, key: string | undefined) => {
    let data = localStorageItem.get(key) ? localStorageItem.get(key) : [];
    if (!data.includes(id)) {
      data.push(id);
      data.sort((a: string, b: string) => a > b ? 1 : -1);
      localStorageItem.set(key, data)
    }
    setEventKey(id)
  }

  const handleRedirect = () => {
    const redirect_uri = `${process.env.REACT_APP_SSO_AUTHORIZE_ENDPOINT}?response_type=${process.env.REACT_APP_SSO_RESPONSE_TYPE}&scope=${process.env.REACT_APP_SSO_SCOPE}&redirect_uri=${process.env.REACT_APP_SSO_REDIRECT_URI_SHELL}&client_id=${process.env.REACT_APP_SSO_CLIENT_ID_SHELL}`;
    window.location.href = redirect_uri;
  }

  return (
    <div className='d-flex align-items-center gap-1'>
      <MenuInnerWithSub
        title=''
        to='/dasboard'
        fontIcon='bi-list ms-lg-2'
        menuPlacement='bottom-start'
        menuTrigger='click'
        freeSize
      >
        <div className='d-flex justify-content-between'>
          <div onClick={handleRedirect}>
            <MenuTab title='' fontIcon='bi-grid-3x3-gap-fill ms-lg-2' to='/dasboard' />
          </div>
          <MenuItem title='' fontIcon='bi bi-clipboard-plus' to='/phan-he-tiep-nhan' />
          <MenuItem title='' fontIcon="bi bi-hospital" to='/ds-tiep-don' />
          <MenuItem title='' fontIcon="bi bi-hospital-fill" to='/phan-he-noi-tru/tiep-don' />
          <MenuItem title='' fontIcon='fa-solid fa-vials' to='/test' />
          <MenuItem title='' fontIcon='bi bi-journal-richtext' to='/cdha-tdcn' />
          <MenuItem title='' fontIcon='bi bi-scissors' to='/phau-thuat-thu-thuat' />
          <MenuItem title='' fontIcon='bi bi-credit-card' to='/fee-and-insurance' />
        </div>
      </MenuInnerWithSub>

      {DSMenu.length > 0 && DSMenu.map((menu, index) => {
        return (
          (menu?.children && menu?.children.length > 0) ?
            <MenuInnerWithSub
              title={menu.title}
              to={menu?.to}
              menuPlacement='bottom-start'
              menuTrigger={`{default:'click', lg: 'hover'}`}
              freeSize
            >
              {menu?.children?.map(item =>
                <div onClick={() => handleChange(item?.id, item?.key)} >
                  <MenuTab title={item.title} fontIcon={item?.fontIcon} />
                </div>
              )}
            </MenuInnerWithSub>
            : <MenuItem key={index} title={menu?.title} to={`${menu?.to}`} fontIcon={menu?.fontIcon} />
        )
      })
      }
    </div>
  );
}
