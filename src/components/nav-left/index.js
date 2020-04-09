import React from "react";
import {Row, Icon, Menu} from "antd";
import MenuConfig from '../../config/menuConfig';

import './index.less';
import logoSvg from '../../assets/img/logo-ant.svg';
import {NavLink} from "react-router-dom";

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

  componentDidMount = () => {
    const menuList = this.renderMenu();
    this.setState({
      menuList
    });
  };

  renderMenu = () => {
    return MenuConfig.map(menuItem => {
      if (menuItem.children && menuItem.children.length > 0) {
        return (
          <SubMenu key={menuItem.key} title={menuItem.title}>
            {
              menuItem.children.map(subMenuItem => {
                return (
                  <Item key={subMenuItem.key}>
                    <NavLink to={subMenuItem.key}>{subMenuItem.title}</NavLink>
                  </Item>
                )
              })
            }
          </SubMenu>
        )
      } else {
        return (
          <Item key={menuItem.key}>
            <NavLink to={menuItem.key}>{menuItem.title}</NavLink>
          </Item>
        )
      }
    })
  };
}

export default NavLeft;
