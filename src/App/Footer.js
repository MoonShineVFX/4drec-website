import React from 'react';
export default function Footer(){
  return  <section className="container section1 pb-4 " id="footer">
  <div className="row ">
    <div className="col-lg-12 ">
      <div className="footer">
        <ul className="companyInfomation">
          <li >Tel | 02-2785-7037</li>
          <li >Email | info@moonshine.tw</li>
          <li >Address | 3F, No.481, Sec. 6, Zhongxiao E. Rd., Nangang Dist., Taipei City 115, Taiwan (R.O.C.)</li>
        </ul>
        <ul className="socialIcon">
        <li>
            <a href="https://www.facebook.com/MoonShineAnimation/" >
              <img src="./images/facebook-brands.svg" alt="" className="svg icon"/>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/moonshine.tw/" >
            <img src="./images/instagram-brands.svg" alt="" className="svg icon"/>
            </a>
          </li>
        </ul>
      </div>
    
    

    </div>
  </div>
  <ul className="copyright">
    <li>Copyright ⓒ 2020 MoonShine Animation</li>
  </ul>
</section>
  
}