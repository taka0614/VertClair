window.addEventListener("load", function(){

    //プラグインを定義
    gsap.registerPlugin(ScrollTrigger);
  
    const area  = document.querySelector(".js-area");
    const items = document.querySelectorAll(".js-item");
    const num   = items.length;
  
    //位置とscaleを指定
    items.forEach((item, i) => {
      gsap.set(item, {
        zIndex : num - i,
      });
    });
   
    gsap.set(".js-item01", {
      scale: 0, width: "75%", height: "50%", left: "12.5%", top: "25%",
    });
    gsap.set(".js-item02", {
      scale: 0, width: "75%", height: "50%", left: "12.5%", top: "25%",
    });
    gsap.set(".js-item03", {
      scale: 0, width: "100%", height: "100%", left: 0, top: 0,
    });
  
    //タイムライン
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: area, //トリガー
        start: "top top", //開始位置
        end: "+=4000", //終了位置
        scrub: true, //ピン留め
        pin: true, //スクロール量に応じて動かす
      }
    });
  
    //要素を順に拡大する
    tl
      .to(".js-item01", { scale: 1, left: "-37.5%", top: "5%", duration: 1 },"-=0.5")
      .to(".js-item01", { opacity: 0, duration: 0.2 }, "-=0.2")
      .to(".js-item02", { scale: 1, left: "62.5%", top: "55%", duration: 1 }, "-=0.5")
      .to(".js-item02", { opacity: 0, duration: 0.2 }, "-=0.2")
      .to(".js-item03", { scale: 1, duration: 1 }, "-=0.5")


      const slide_area  = document.querySelector(".slide-area");
      const slide_wrap  = document.querySelector(".slide-wrap");
      const slide_items = document.querySelectorAll(".slide-item");
      const slide_num   = slide_items.length;
    
      //横幅を指定
      gsap.set(slide_wrap,  { width: slide_num * 100 + "%" });
      gsap.set(slide_items, { width: 100 / slide_num + "%" });
    
      gsap.to(slide_items, {
        xPercent: -100 * ( slide_num - 1 ), //x方向に移動させる
        ease: "none",
        scrollTrigger: {
          trigger: slide_area, //トリガー
          start: "top top", //開始位置
          end: "+=1000", //終了位置
          pin: true, //ピン留め
          scrub: true, //スクロール量に応じて動かす
        }
      });
  });