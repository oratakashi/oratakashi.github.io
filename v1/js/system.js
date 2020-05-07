// $(document).ready(function () {
//     $.ajax({
//         type: "get",
//         url: "data/portofolio.json",
//         dataType: "json",
//         success: function (response) {
//             console.log(response);
//             $.each(response.portofolio, function (index, value) {
//                 $('#portofolio').append(`
//                     <div class="col col-d-6 col-t-6 col-m-12 grid-item `+value.kategori+` border-line-h">
//                         <div class="box-item">
//                             <div class="image">
//                                 <a href="#popup-`+(index+1)+`" class="has-popup-media">
//                                     <img src="images/portofolio/`+value.foto+`" alt="" />
//                                     <span class="info">
//                                         <span class="ion ion-images"></span>
//                                     </span>
//                                 </a>
//                             </div>
//                             <div class="desc">
//                                 <a href="#popup-1" class="name has-popup-media">Mobile Application</a>
//                                 <div class="category">Design</div>
//                             </div>
//                             <div id="popup-1" class="popup-box mfp-fade mfp-hide">
//                                 <div class="content">
//                                     <div class="image">
//                                         <img src="images/works/work4.jpg" alt="">
//                                     </div>
//                                     <div class="desc">
//                                         <div class="post-box">
//                                             <h1>Mobile Application</h1>						
//                                             <div class="blog-detail">Design</div>
//                                             <div class="blog-content">
//                                                 <p>
//                                                     So striking at of to welcomed resolved. Northward by described up household therefore 
//                                                     attention. Excellence decisively nay man yet impression for contrasted remarkably.
//                                                 </p>
//                                                 <p>
//                                                     Forfeited you engrossed but gay sometimes explained. Another as studied it to evident. 
//                                                     Merry sense given he be arise. Conduct at an replied removal an amongst. Remaining 
//                                                     determine few her two cordially admitting old.
//                                                 </p>
//                                                 <blockquote>
//                                                     Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia 
//                                                     Curae; Pellentesque suscipit.
//                                                 </blockquote>
//                                                 <p>
//                                                     Tiled say decay spoil now walls meant house. My mr interest thoughts screened of outweigh 
//                                                     removing. Evening society musical besides inhabit ye my. Lose hill well up will he over on. 
//                                                     Increasing sufficient everything men him admiration unpleasing sex.
//                                                 </p>
//                                                 <ul class="list-style">
//                                                     <li>Greatest properly off ham exercise all.</li>
//                                                     <li>Unsatiable invitation its possession nor off.</li>
//                                                     <li>All difficulty estimating unreserved increasing the solicitude.</li>
//                                                 </ul>
//                                                 <p>
//                                                     Unpleasant astonished an diminution up partiality. Noisy an their of meant. Death means 
//                                                     up civil do an offer wound of.
//                                                 </p>
//                                             </div>
//                                             <a href="#" class="button">
//                                                 <span class="text">View Project</span>
//                                                 <span class="arrow"></span>
//                                             </a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                  `);
//             });
//         }
//     });
// });