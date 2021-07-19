import React from 'react';
export default function VirtualStudio(){
  return <section className="container section1 pt-100 mb-5" id="Chapter2">
  <div className="row appCard">
    <div className="col-md-8 text-center offset-md-2 hideme">
      <div className="mainTitle">
        <h1>硬體介紹</h1>
        <p>Hardware Facilities</p>
      </div>
      
    </div>
    <div className="col-lg-12 col-md-12 col-sm-12 hideme">
    <h6>算圖機設備以 Deadline 為核心為架構，部屬伺服器主機、資料庫主機、跟可擴展的算圖機叢集。</h6>
      <table className="table table-bordered table-dark">

        <tbody>
          <tr>
          <th scope="col">類別</th>
          <th scope="col">型號</th>
          <th scope="col">數量</th>
          </tr>
          <tr>
            <th className="bg-secondary" scope="row">燈</th>
            <td className="bg-secondary">南冠 CN-T504 II 100w</td>
            <td className="bg-secondary">24</td>
          </tr>
          <tr>
            <th className="bg-secondary" scope="row">相機</th>
            <td className="bg-secondary">Flir BFS-PGE-50S5C-C , 
            Fujifilm HF12.5HA-1S 鏡頭</td>
            <td className="bg-secondary">36</td>
          </tr>
          <tr>
            <th className="bg-secondary" scope="row">串流主機</th>
            <td className="bg-secondary">Intel i7-8700k , 16g Ram</td>
            <td className="bg-secondary">6</td>
          </tr>
          <tr>
            <th className="bg-secondary" scope="row">操作主機</th>
            <td className="bg-secondary">Intel i5-8500 , 128g Ram</td>
            <td className="bg-secondary">1</td>
          </tr>
          <tr>
            <th className="bg-secondary" scope="row">相機電路板</th>
            <td className="bg-secondary">USB母座連接其他電路板最後接回操作主機，來同步接收快門訊號</td>
            <td className="bg-secondary">8</td>
          </tr>

        </tbody>
      </table>
    </div>
    <div className="col-lg-4 col-md-12 col-sm-12 hideme">
      <img src="images/c205.jpg" alt="" className="img-fluid" />
    </div>
    <div className="col-lg-4 col-md-12 col-sm-12 hideme delay1">
      <img src="images/c206.jpg" alt="" className="img-fluid" />
    </div>
    <div className="col-lg-4 col-md-12 col-sm-12 hideme delay1">
      <img src="images/c204.jpg" alt="" className="img-fluid" />
    </div>

  </div>
</section>
  
}