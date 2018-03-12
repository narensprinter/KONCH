import React from 'react';


const Section = () => (
  <div className="container position-relative">
        <div className="dotted-line"></div>
        <section className="section-one">
            <div className="row">
               <div className="col-md-8">
                    <img className="sample-img" src="/images/video.png" />
               </div>
               <div className="col-md-4 section-flex">
                  <div className="section-content">
                     <h3 className="site-title">Transcode for compatibility</h3>
                     <p className="site-desc">Transcode & create all the assets you need in one shot.</p>
                  </div>
               </div>
            </div>
       </section>
       <section className="section-two">
          <div className="row">
            <div className="col-md-4 section-flex">
              <div className="section-content">
                 <div className="dotted-circle"></div>
                 <h3 className="site-title">Thumnails in sequence to preview your content.</h3>
                 <p className="site-desc">Transcode & create all the assets you need in one shot.</p>
              </div>
            </div>
            <div className="col-md-8">
                <div className="thumb-image-outer">
                  <img className="thumb-image5" src="/images/image01.png" />
                  <img className="thumb-image4" src="/images/image01.png" />
                  <img className="thumb-image3" src="/images/image01.png" />
                  <img className="thumb-image2" src="/images/image01.png" />
                  <img className="thumb-image1" src="/images/image01.png" />
                </div>
            </div>
          </div>
       </section>
       <section className="section-three">
           <div className="row">
              <div className="col-md-8">
                   <img className="sample-img" src="/images/slice2.png" />
              </div>
              <div className="col-md-4 section-flex">
                 <div className="section-content">
                    <h3 className="site-title">Time stamped transcriptions and subtitles assets</h3>
                    <p className="site-desc">Transcode & create all the assets you need in one shot.</p>
                    <p className="light-red-text"><span className="red-line"></span>When our a.i parser think it may have got it wrong, we let you know and allow you to edit blabh blah...</p>
                 </div>
              </div>
           </div>
      </section>
      <section className="section-two">
         <div className="row">
           <div className="col-md-4 section-flex">
             <div className="section-content pb-3">
                <div className="dotted-circle"></div>
                <h3 className="site-title">Entities extracted from the transcript & images.</h3>
                <p className="site-desc">Transcode & create all the assets you need in one shot.</p>
                <p className="font-14 no-wrap">This is a <span className="pro-box">PRO</span> feature, <a href="#" className="green-text font-weight-bold">find out more</a></p>
             </div>
           </div>
           <div className="col-md-8">
               <div className="progress-bar-outer">
                  <div className="progress-bar one">Friendship .10</div>
                  <div className="progress-bar two">Cold .50</div>
                  <div className="progress-bar three">Bananas .70</div>
                  <div className="progress-bar four">Splurtiness .90</div>
               </div>
           </div>
         </div>
      </section>
      <section className="section-three">
          <div className="row">
             <div className="col-md-8">
                  <img className="sample-img" src="/images/slice3.png" />
             </div>
             <div className="col-md-4 section-flex">
                <div className="section-content">
                   <h3 className="site-title">Marvelous Jam for a first century of jelly.</h3>
                   <p className="site-desc">Transcode & create all the assets you need one shot.</p>
                </div>
             </div>
          </div>
      </section>
      <section className="section-four">
          <h2 className="main-head mb-3">Developers, we have webhooks & endpoints for you.</h2>
          <p className="mb-1">Loren Ipsum er ganske enkelt fyldekst fra print- og typografindustrien.</p>
          <p>Lorem Ipsum har vaeret standard fyldtekst siden 1500-tallet, hvor en.</p>
          <div className="row mt-5 pt-3">
             <div className="col-md-6 mb-3">
                <img className="mb-2" src="/images/icon01.png" width="40" />
               <h3 className="site-title mb-3">Create endpoints</h3>
               <p className="site-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
             </div>
             <div className="col-md-6 mb-3">
                <img className="mb-2" src="/images/icon01.png" width="40" />
               <h3 className="site-title mb-3">Create endpoints</h3>
               <p className="site-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
             </div>
             <div className="col-md-6 mb-3">
                <img className="mb-2" src="/images/icon01.png" width="40" />
               <h3 className="site-title mb-3">Create endpoints</h3>
               <p className="site-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
             </div>
             <div className="col-md-6 mb-3">
                <img className="mb-2" src="/images/icon01.png" width="40" />
               <h3 className="site-title mb-3">Create endpoints</h3>
               <p className="site-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
             </div>
           </div>
      </section>
 </div>
)

export default Section;
