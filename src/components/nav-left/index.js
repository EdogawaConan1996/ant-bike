import React from "react";
import {Row, Icon, Menu} from "antd";
import MenuConfig from '../../config/menuConfig';

import './index.less';
import logoSvg from '../../assets/img/logo-ant.svg';

const { SubMenu, Item } = Menu;

class NavLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: []
    }
  }

  render() {
    return (
      <div className="nav-left">
        <div className="logo">
          <img src={logoSvg} alt='' />
          <h1>Imooc MS</h1>
        </div>
        <Menu theme="dark">
          {this.state.menuList}
        </Menu>
      </div>
    )
  }

  componentDidMount() {
    const menuList = this.renderMenu();
    this.setState({
      menuList
    })
  }

  renderMenu = () => {
    return MenuConfig.map(menuItem => {
      if (menuItem.children && menuItem.children.length > 0) {
        return (
          <SubMenu key={menuItem.key} title={menuItem.title}>
            {
              menuItem.children.map(subMenuItem => {
                return (
                  <Item key={subMenuItem.key}>{subMenuItem.title}</Item>
                )
              })
            }
          </SubMenu>
        )
      } else {
        return (
          <Item key={menuItem.key}>{menuItem.title}</Item>
        )
      }
    })
  }
}

export default NavLeft;
