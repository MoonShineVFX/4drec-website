import React,{useEffect ,useRef} from 'react';
export default function VirtualStudio(){
  return <section className="container section1 pt-100 mb-5" id="Chapter3">
  <div className="row appCard">
    <div className="col-md-8 text-center offset-md-2 hideme">
      <div className="mainTitle">
        <h1>收費方式</h1>
        <p>Pricing</p>
      </div>

    </div>
    <div className="col-lg-12 col-md-12 col-sm-12 hideme">
      <table className="table table-bordered table-dark">

        <tbody>
          <tr>
            <th scope="col" colSpan="2">產品</th>
            <th scope="col">產品的功能與規格</th>
            <th scope="col">定　價</th>
          </tr>

          <tr>
            <th className="bg-secondary" scope="row">商品化購買</th>
            <td className="bg-secondary" >4D REC系統</td>
            <td className="bg-secondary">
              <ul>
                <li>1200萬高解析度</li>
                <li>4000 x 3000貼圖像素</li>
                <li>30 FPS</li>
                <li>16台串流伺服器</li>
                <li>8台解算伺服器</li>
              </ul>
            </td>
            <td className="bg-secondary">
              USD 450,000
            </td>
          </tr>
          <tr>
            <th className="bg-secondary" scope="row">客製化建置</th>
            <td className="bg-secondary" colSpan="2">依專案內容提供客製化服務</td>
            <td className="bg-secondary">依專案計價</td>
          </tr>
        </tbody>
      </table>
      <table className="table table-bordered table-dark">

        <tbody>
          <tr>
            <th scope="col" colSpan="2">服務</th>
            <th scope="col">產品的功能與規格</th>
            <th scope="col">定　價</th>
          </tr>
          <tr>
            <th className="bg-secondary" scope="row">租借/技術服務</th>
            <td className="bg-secondary">動態內容拍攝</td>
            <td className="bg-secondary">
              <ul>
                <li>包含技術人員服務費、場地租金</li>
                <li>高雄在地廠商優惠價</li>
              </ul>
            </td>
            <td className="bg-secondary">
              <ul>
                <li>NT 150,000/天</li>
                <li>NT 100,000/天</li>
              </ul>
            </td>
          </tr>
          <tr>
            <th className="bg-secondary" scope="row">租借/技術服務</th>
            <td className="bg-secondary" >動態內容捕捉解算</td>
            <td className="bg-secondary">以動態內容之分鐘數計費</td>
            <td className="bg-secondary">NT 10,000/分</td>
          </tr>
          <tr>
            <th className="bg-secondary" scope="row">保固服務</th>
            <td className="bg-secondary" colSpan="3">客製化（年維護合約），商品化（三年）</td>
          </tr>
          <tr>
            <th className="bg-secondary" scope="row">售後服務</th>
            <td className="bg-secondary" colSpan="3">教育訓練</td>
          </tr>
        </tbody>
      </table>
    </div>





  </div>
</section>

}