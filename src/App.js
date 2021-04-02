import "./css/App.css";
import "./css/item.css";
import "./css/nav-bar.css"
import chickenicon from "./image/chicken_icon.png"
// import {MenuOutlined,MenuFoldOutlined} from '@ant-design/icons';
// import { Drawer} from "antd";
import "antd/dist/antd.css";
import React,{ Component } from "react";
// import SiderBar from './components/SiderBar'

class App extends Component {
  constructor(prpos){
    super(prpos)
    this.check_Ref=React.createRef()
    this.side_menu_Ref= React.createRef()
    this.beverage_menu_Ref= React.createRef()
    this.state={
      visible: false, 
      placement: "left",
      chicken_data:[
        {
          id:1,
          product_src:'https://img.bbq.co.kr:449/uploads/bbq_d/thumbnail/20200929_BBQ_황금올리브썸네일(480x480).png',
          product_name:'황금올리브치킨',
          product_price:'18,000원'
        },
        {
          id:2,
          product_src:'https://img.bbq.co.kr:449/uploads/bbq_d/thumbnail/20210315_BBQ_앱_썸네일(480x480)_황올한깐풍치킨-01.jpg',
          product_name:'황올한 깐풍치킨',
          product_price:'19,900원'
        },
        {
          id:3,
          product_src:'https://img.bbq.co.kr:449/uploads/bbq_d/thumbnail/20210323_BBQ_앱_썸네일(480x480)_체고치.png',
          product_name:'체고치 순살',
          product_price:'20,900원'
        },
        {
          id:4,
          product_src:'https://img.bbq.co.kr:449/uploads/bbq_d/thumbnail/20210323_BBQ_앱_썸네일(480x480)_체고바.png',
          product_name:'체고바 순살',
          product_price:'19,900원'
        },
        {
          id:5,
          product_src:'https://img.bbq.co.kr:449/uploads/bbq_d/thumbnail/20210318_BBQ_앱_썸네일_구이류(480x480px)-자메이카통다리구이.jpg',
          product_name:'자메이카 통다리 구이',
          product_price:'19,500원'
        },
        {
          id:6,
          product_src:'https://img.bbq.co.kr:449/uploads/bbq_d/thumbnail/202007017_BBQ_앱_썸네일(후라이드류)_황올속안심.png',
          product_name:'황금올리브치킨™속안심',
          product_price:'17,000원'
        },
        {
          id:7,
          product_src:'https://img.bbq.co.kr:449/uploads/bbq_d/thumbnail/202007017_BBQ_앱_썸네일(후라이드류)_핫윙.png',
          product_name:'황금올리브치킨™핫윙',
          product_price:'18,000원'
        },
        {
          id:8,
          product_src:'https://img.bbq.co.kr:449/uploads/bbq_d/thumbnail/20200717_BBQ_앱_썸네일(핫황금올리브-단품류)_크리스피.png',
          product_name:'핫황금올리브™크리스피',
          product_price:'19,000원'
        },
        {
          id:9,
          product_src:'https://img.bbq.co.kr:449/uploads/bbq_d/thumbnail/20200717_BBQ_%EC%95%B1_%EC%8D%B8%EB%84%A4%EC%9D%BC(%ED%9B%84%EB%9D%BC%EC%9D%B4%EB%93%9C%EB%A5%98)_%EC%88%9C%EC%82%B4%ED%81%AC%EB%9E%98%EC%BB%A4.png',
          product_name:'순살크래커',
          product_price:'18,000원'
        },
        {
          id:10,
          product_src:'https://img.bbq.co.kr:449/uploads/bbq_d/thumbnail/202007017_BBQ_앱_썸네일(후라이드류)_바삭칸.png',
          product_name:'바삭칸 치킨',
          product_price:'16,000원'
        },
        {
          id:11,
          product_src:'https://img.bbq.co.kr:449/uploads/bbq_d/thumbnail/202007017_BBQ_앱_썸네일(후라이드류)_순살바삭칸.png',
          product_name:'순살바삭칸치킨 ',
          product_price:'18,000원'
        },
        {
          id:12,
          product_src:'https://img.bbq.co.kr:449/uploads/bbq_d/thumbnail/20200717_BBQ_앱_썸네일(핫황금올리브-단품류)_레드착착.png',
          product_name:'핫황금올리브™ 레드착착',
          product_price:'19,000원'
        },
        {
          id:13,
          product_src:'https://img.bbq.co.kr:449/uploads/bbq_d/thumbnail/BBQ_모바일용_썸네일_후라이드류_황금올리브치킨닭다리.png',
          product_name:'황금올리브치킨™닭다리',
          product_price:'19,000원'
        },
        {
          id:14,
          product_src:'https://img.bbq.co.kr:449/uploads/bbq_d/thumbnail/20210104_BBQ_황금올리브_넓적다리세트_썸네일_6조각(480x480).jpg',
          product_name:'황올엉치치킨 6조각',
          product_price:'19,900원'
        },
        {
          id:15,
          product_src:'https://img.bbq.co.kr:449/uploads/bbq_d/thumbnail/20210104_BBQ_황금올리브_넓적다리세트_썸네일_8조각(480x480).jpg',
          product_name:'황올엉치치킨 8조각',
          product_price:'25,000원'
        },
        {
          id:16,
          product_src:'https://img.bbq.co.kr:449/uploads/bbq_d/thumbnail/20210104_BBQ_황금올리브_넓적다리세트_썸네일_6조각세트(480x480)-02.jpg',
          product_name:'황올엉치치킨 6조각+케이준',
          product_price:'21,000원'
        },
      ],
      side_data:[
        {
          id:"side_1",
          product_src:'https://img.bbq.co.kr:449/uploads/bbq_d/thumbnail/20210318_BBQ_앱_썸네일_사이드류(480x480px)-통새우멘보샤.jpg',
          product_name:'통새우 멘보샤',
          product_price:'6,000원'
        },
        {
          id:"side_2",
          product_src:'https://img.bbq.co.kr:449/uploads/bbq_d/thumbnail/20210316_BBQ_앱_썸네일_사이드류(480x480)_포테이토치즈그탕.jpg',
          product_name:'포테이토 치즈그라탕',
          product_price:'3,000원'
        },
        {
          id:"side_3",
          product_src:'https://img.bbq.co.kr:449/uploads/bbq_d/thumbnail/20210316_BBQ_앱_썸네일_사이드류(480x480)_골드더스트치즈그라탕.jpg',
          product_name:'골드더스트치즈그라탕',
          product_price:'4,000원'
        },
        {
          id:"side_4",
          product_src:'https://img.bbq.co.kr:449/uploads/bbq_d/thumbnail/11.20200929_BBQ_안주류_황올한닭발튀김(480X480).png',
          product_name:'황올한닭발튀김',
          product_price:'7,900원'
        },
        {
          id:"side_5",
          product_src:'https://img.bbq.co.kr:449/uploads/bbq_d/thumbnail/20200717_BBQ_앱_썸네일(사이드류)_케이준프라이.png',
          product_name:'케이준감자',
          product_price:'3,000원'
        },
        {
          id:"side_6",
          product_src:'https://img.bbq.co.kr:449/uploads/bbq_d/thumbnail/20200717_BBQ_앱_썸네일(사이드류)_닭껍데기.png',
          product_name:'BBQ 닭껍데기',
          product_price:'3,500원'
        },
        {
          id:"side_7",
          product_src:'https://img.bbq.co.kr:449/uploads/bbq_d/thumbnail/20200717_BBQ_앱_썸네일(사이드류)_새우스틱.png',
          product_name:'새우스틱',
          product_price:'4,000원'
        },
        {
          id:"side_8",
          product_src:'https://img.bbq.co.kr:449/uploads/bbq_d/thumbnail/20200717_BBQ_앱_썸네일(사이드류)_치즈스틱.png',
          product_name:'치즈 스틱',
          product_price:'3,000원'
        },
        {
          id:"side_9",
          product_src:'https://img.bbq.co.kr:449/uploads/bbq_d/thumbnail/20200828_BBQ_모둠볼트레이6구_썸네일(480X480)px.png',
          product_name:'BBQ 모둠볼 6개',
          product_price:'6,000원'
        },
        {
          id:"side_10",
          product_src:'https://img.bbq.co.kr:449/uploads/bbq_d/thumbnail/20200828_BBQ_모둠볼트레이10구_썸네일(480X480)px.png',
          product_name:'BBQ 모둠볼 10개',
          product_price:'9,000원'
        },
        {
          id:"side_11",
          product_src:'https://img.bbq.co.kr:449/uploads/bbq_d/thumbnail/20200722_BBQ_앱_썸네일(사이드류_황금알치즈볼)_out.png',
          product_name:'황금알치즈볼',
          product_price:'3,000원'
        },
        {
          id:"side_12",
          product_src:'https://img.bbq.co.kr:449/uploads/bbq_d/thumbnail/20200717_BBQ_앱_썸네일(사이드류)_크림치즈볼.png',
          product_name:'크림치즈볼',
          product_price:'5,000원'
        },
      ],
      beverage_data:[
        {
          id:"beverage_1",
          product_src:'https://img.bbq.co.kr:449/uploads/bbq_d/thumbnail/PC버전_썸네일_콜라_01-05.png',
          product_name:'콜라 500ml',
          product_price:'1,500원'
        },
        {
          id:"beverage_2",
          product_src:'https://img.bbq.co.kr:449/uploads/bbq_d/thumbnail/PC버전_썸네일_콜라_01-06.png',
          product_name:'콜라 1.25L',
          product_price:'2,000원'
        },
        {
          id:"beverage_3",
          product_src:'https://img.bbq.co.kr:449/uploads/bbq_d/thumbnail/20201014_BBQ_주류판매용_수제맥주(캔)6종_썸네일(480x480)-GPA.png',
          product_name:'제너시스 페일에일 GPA (500cc)',
          product_price:'6,500원'
        },
        {
          id:"beverage_4",
          product_src:'https://img.bbq.co.kr:449/uploads/bbq_d/thumbnail/20201014_BBQ_주류판매용_수제맥주(캔)6종_썸네일(480x480)-바이젠.png',
          product_name:'바이젠 (500cc)',
          product_price:'6,000원'
        },
        {
          id:"beverage_5",
          product_src:'https://img.bbq.co.kr:449/uploads/bbq_d/thumbnail/20201014_BBQ_주류판매용_수제맥주(캔)6종_썸네일(480x480)-IPA.png',
          product_name:'IPA (500cc) : 일부 매장에 한해 판매',
          product_price:'6,500원'
        },
        {
          id:"beverage_6",
          product_src:'https://img.bbq.co.kr:449/uploads/bbq_d/thumbnail/20201014_BBQ_주류판매용_수제맥주(캔)6종_썸네일(480x480)-둔켈.png',
          product_name:'둔켈 (500cc) : 일부 매장에 한해 판매',
          product_price:'6,000원'
        },
        {
          id:"beverage_7",
          product_src:'https://img.bbq.co.kr:449/uploads/bbq_d/thumbnail/1000테라20201021_BBQ_주류3종_썸네일(480x480)_1차수정-04.png',
          product_name:'생맥주 1,000cc',
          product_price:'6,000원'
        },
        {
          id:"beverage_8",
          product_src:'https://img.bbq.co.kr:449/uploads/bbq_d/thumbnail/500테라20201021_BBQ_주류3종_썸네일(480x480)_1차수정-05.png',
          product_name:'생맥주 500cc',
          product_price:'4,000원'
        },
        {
          id:"beverage_9",
          product_src:'https://img.bbq.co.kr:449/uploads/bbq_d/thumbnail/테라병맥주20201021_BBQ_주류3종_썸네일(480x480)_1차수정-03.png',
          product_name:'병맥주',
          product_price:'4,000원'
        },
        {
          id:"beverage_10",
          product_src:'https://img.bbq.co.kr:449/uploads/bbq_d/thumbnail/참이슬20201021_BBQ_주류3종_썸네일(480x480)_1차수정-02.png',
          product_name:'소주',
          product_price:'3,000원'
        },
      ]
    }
  }
  // showDrawer = () => {
  //   this.setState({
  //     visible: true,
  //   });
  // };

  // onClose = () => {
  //   this.setState({
  //     visible: false,
  //   });
  // };

  // onChange = (e) => {
  //   this.setState({
  //     placement: e.target.value,
  //   });
  // };

  render() {    
    // const { placement, visible } = this.state;

    return (
      <div className="App">
            {/* <MenuOutlined className="menu-outlined" onClick={this.showDrawer}/>
            <Drawer
              placement={placement}
              closable={false}
              onClose={this.onClose}
              visible={visible}
              key={placement}
            > 
              <div>
                <p style={{textAlign:"right"}}>
                  <MenuFoldOutlined className="menu-fold-out-lined" onClick={this.onClose}/>
                </p>
                <hr></hr>
                <p>치킨(뼈,순살)</p>
                <p>맥주,소주,안주</p>
                <p>음료수</p>
              </div>
            </Drawer> */}
          
          <h1 ref={this.check_Ref} className="menu-title">치킨(순살,뼈) 메뉴 </h1>
          <br/>
          <div id="menu-div" className="menu-columns">
            <ul className="menu-ul">
              {this.state.chicken_data.map((item)=>{
                return(
                  <li className="menu-li" key={item.id}>
                    <a href="#/">
                      <img className="menu-img" src={item.product_src}alt=""/>
                      <div>
                        <span className="name">
                          <a href="#/">{item.product_name}</a>
                        </span>
                        <span className="price">{item.product_price}</span>
                      </div>
                    </a>
                  </li>
                )
              })}
            </ul>
         </div>
         <h1 ref={this.side_menu_Ref} className="menu-title">사이드 메뉴 </h1>
          <br/>
          <div id="side-menu" className="menu-columns">
            <ul className="menu-ul">
              {this.state.side_data.map((item)=>{
                return(
                  <li className="menu-li" key={item.id}>
                    <a href="#/">
                      <img className="menu-img" src={item.product_src}alt=""/>
                      <div>
                        <span className="name">
                          <a href="#/">{item.product_name}</a>
                        </span>
                        <span className="price">{item.product_price}</span>
                      </div>
                    </a>
                  </li>
                )
              })}
            </ul>
         </div>
         <h1 ref={this.beverage_menu_Ref} className="menu-title">주류&음료수</h1>
          <br/>
          <div id="beverage-menu" className="menu-columns ">
            <ul className="menu-ul">
              {this.state.beverage_data.map((item)=>{
                return(
                  <li className="menu-li" key={item.id}>
                    <a href="#/">
                      <img className="menu-img" src={item.product_src}alt=""/>
                      <div>
                        <span className="name">
                          <a href="#/">{item.product_name}</a>
                        </span>
                        <span className="price">{item.product_price}</span>
                      </div>
                    </a>
                  </li>
                )
              })}
            </ul>
         </div>
         <br/>
         <br/>
         <br/>
          <nav class="nav">
            <ul class="nav__list">
                <li class="nav__btn">
                   <a class="nav__link" href="#/">
                      <img onClick={this.check_menu_Scroll} style={{width:'38px'}} alt="" src={chickenicon}/>
                    </a>
                </li>
                <li class="nav__btn">
                  <a class="nav__link" href="#/">
                     <img onClick={this.side_menu_Scroll} style={{width:'38px'}} alt="" src="https://img.icons8.com/wired/64/000000/salad-bowl.png"/>
                  </a>
                </li>
                <li class="nav__btn">
                    <a class="nav__link" href="#/">
                      <a class="nav__link" href="#/">
                        <img onClick={this.beverage_menu_Scroll} style={{width:'38px'}} alt="" src="https://img.icons8.com/ios/100/000000/beer--v1.png"/>
                      </a>
                    </a>
                </li>
            </ul>
          </nav>
      </div>
    );
  }
  check_menu_Scroll = () => this.check_Ref.current.scrollIntoView()
  side_menu_Scroll = () => this.side_menu_Ref.current.scrollIntoView()
  beverage_menu_Scroll = () => this.beverage_menu_Ref.current.scrollIntoView()
}

export default App;
