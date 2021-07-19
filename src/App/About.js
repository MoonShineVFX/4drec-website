import React from 'react';


class About extends React.Component {
  render(){
    return(
    <section className="container section1 mb-5 pt-210" id="About">
      <div className="row ">
        <div className="col-lg-7 col-md-12 aboutPr ">
          <div id="cssSlider"></div>
        </div>
        <div className="col-lg-5 content col-md-12  fadeInUp delay1">
          <h1 className="mb-4">
          高解析容積捕捉系統體感影像技術<br/>
            About Volumetric Capture</h1>
          <p className="mb-3">用攝像鏡頭從多角度，在三維空間進行動態物件的捕捉，捕捉紀錄真人及所在區域之全部物理環境的「動態」影像。後經軟體分析，壓縮並重塑完整的 3D 形象的全部視角，整合而成「動態3D模型」的素材。</p>
          <ul className="special-list mb-3">
             <li>將3D動畫從擬真塑模提升成為真實拍攝。</li>
             <li>效果真實，不受動畫師的能力限制。</li>
             <li>演員不需配戴感測裝置與標記，演出不受限制。</li>
             <li>僅須一站即可取得高品質動態真人素材，簡化工序降低導入門檻</li>
             <li>任何 4D 影像掃描序列都可以在後期製作中合成到任何鏡頭中</li>
             <li>任何 4D 因掃描過程已完整記錄演員的動態演出，所以模型不需要進行重新定位、服裝模擬或使用其他動畫技術便可直接呈現演員的完整表演內容</li>
          </ul>
          
        </div>
      </div>
    </section>
    )
  }
}


export default About