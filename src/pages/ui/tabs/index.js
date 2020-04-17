import React from "react";
import {Card, Row, Tabs, Icon} from "antd";
import './index.less';

class UiTabsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editTabs: [
        {title: 'tab1', content: 'the content of tab1', key: '1'},
        {title: 'tab2', content: 'the content of tab2', key: '2'},
        {title: 'tab3', content: 'the content of tab3', key: '3'},
        {title: 'tab4', content: 'the content of tab4', key: '4'}
      ],
    }
  }
  renderTabs = () => {
    return this.state.editTabs.map(item => {
      return (
        <Tabs.TabPane tab={item.title} key={item.key}>
          {item.content}
        </Tabs.TabPane>
      )
    })
  }

  handleEditTab = (targetKey, action) => {
    let editTabs = []
    switch (action) {
      case 'add':
        editTabs = this.state.editTabs
        editTabs.push({
          title: `tab${this.state.editTabs.length + 1}`,
          content: `the content of tab${this.state.editTabs.length + 1}`,
          key: `${this.state.editTabs.length + 1}`
        })
        this.setState({
          editTabs
        })
        break;
      case 'remove':
        editTabs = this.state.editTabs.filter((item) => {
          return item.key !== targetKey
        })
        editTabs.forEach((item,index) => {
          item.title = `tab${index + 1}`
          item.content = `the content of tab${index + 1}`
          item.key = `${index + 1}`
        })
        this.setState({
          editTabs
        })
        break;
      default: break;
    }
  }
  render() {
   return (
     <div>
       <Row className='row'>
         <Card title='Tab标签页'>
           <Tabs defaultActiveKey='tab'>
             <Tabs.TabPane tab={
              <span>
                <Icon type="apple" />
                Tab 1
              </span>
             } key='1'>
               the content of tab1
             </Tabs.TabPane>
             <Tabs.TabPane tab={
              <span>
                <Icon type="android" />
                Tab 2
              </span>
             } key='2'>
               the content of tab2
             </Tabs.TabPane>
             <Tabs.TabPane tab='tab 3' key='3'>
               the content of tab3
             </Tabs.TabPane>
           </Tabs>
         </Card>
       </Row>
       <Row className='row'>
         <Card title='禁用tab标签'>
           <Tabs defaultActiveKey='tab'>
             <Tabs.TabPane tab='tab 1' key='1'>
               the content of tab1
             </Tabs.TabPane>
             <Tabs.TabPane tab='tab 2' disabled key='2'>
               the content of tab2
             </Tabs.TabPane>
             <Tabs.TabPane tab='tab 3' key='3'>
               the content of tab3
             </Tabs.TabPane>
           </Tabs>
         </Card>
       </Row>
       <Row className='row'>
         <Card title='垂直水平tab标签'>
           <Tabs defaultActiveKey='tab' tabPosition='left'>
             <Tabs.TabPane tab='tab 1' key='1'>
               the content of tab1
             </Tabs.TabPane>
             <Tabs.TabPane tab='tab 2' key='2'>
               the content of tab2
             </Tabs.TabPane>
             <Tabs.TabPane tab='tab 3' key='3'>
               the content of tab3
             </Tabs.TabPane>
           </Tabs>
         </Card>
       </Row>
       <Row className='row'>
         <Card title='卡片式tab标签'>
           <Tabs defaultActiveKey='tab' type='card'>
             <Tabs.TabPane tab='tab 1' key='1'>
               the content of tab1
             </Tabs.TabPane>
             <Tabs.TabPane tab='tab 2' disabled key='2'>
               the content of tab2
             </Tabs.TabPane>
             <Tabs.TabPane tab='tab 3' key='3'>
               the content of tab3
             </Tabs.TabPane>
           </Tabs>
         </Card>
       </Row>
       <Row className='row'>
         <Card title='新增和关闭tab标签'>
           <Tabs defaultActiveKey='tab' type='editable-card' onEdit={(targetKey, action) => {this.handleEditTab(targetKey, action)}}>
             {this.renderTabs()}
           </Tabs>
         </Card>
       </Row>
     </div>
   )
  }
}

export default UiTabsPage;
