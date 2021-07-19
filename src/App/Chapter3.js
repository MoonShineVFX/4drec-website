import React,{useEffect ,useRef} from 'react';
import videojs from 'video.js'
export default function VirtualStudio(){
  const playerRef = useRef();
  const playerRef2 = useRef();
  useEffect(() => {
    const player = videojs(playerRef.current, { autoplay: true, muted: true , controls:true }, () => {
      player.src("videos/4d01.mp4");
    });
    const player2 = videojs(playerRef2.current, { autoplay: true, muted: true , controls:true }, () => {
      player2.src("videos/4d02.mp4");
    });


    return () => {
      player.dispose();
    };
  }, []);


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
            <td className="bg-secondary">4D Rec Enterprice</td>
            <td className="bg-secondary">
              <ul>
                <li>500萬高解析度解算系統25 fps</li>
                <li>一台解算伺服器</li>
              </ul>
            </td>
            <td className="bg-secondary">
              USD 150,000
            </td>
          </tr>
          <tr>
            <th className="bg-secondary" scope="row">商品化購買</th>
            <td className="bg-secondary" >4D Rec Premium</td>
            <td className="bg-secondary">
              <ul>
                <li>1200萬高解析度解算系統60 fps</li>
                <li>八台解算伺服器</li>
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
            <th className="bg-secondary" scope="row">容積捕捉技術服務</th>
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
            <th className="bg-secondary" scope="row">容積捕捉技術服務</th>
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
            <td className="bg-secondary" colSpan="3">教育訓練、維護、升級</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="col-lg-6 col-md-12 col-sm-12 hideme">
      <div data-vjs-player>
        <video ref={playerRef} className="video-js vjs-16-9" playsInline />
      </div>
    </div>
    <div className="col-lg-6 col-md-12 col-sm-12 pl-4 content hideme delay1">
      <div data-vjs-player>
        <video ref={playerRef2} className="video-js vjs-16-9" playsInline />
      </div>
    </div>



  </div>
</section>

}