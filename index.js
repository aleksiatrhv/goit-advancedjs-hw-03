import{a as l,S as p,i as n}from"./assets/vendor-iB-pPhnc.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const h="55466894-415e85796c7b7d8e9a89ec112";l.defaults.baseURL="https://pixabay.com/api/";async function y(i){const t={key:h,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await l.get("",{params:t})).data}const d=document.querySelector(".gallery"),u=document.querySelector(".loader-container"),g=new p(".gallery a",{captionsData:"alt",captionDelay:250});function v(i){const t=i.map(({webformatURL:s,largeImageURL:a,tags:e,likes:r,views:o,comments:f,downloads:m})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${a}">
          <img 
            class="gallery-image" 
            src="${s}" 
            alt="${e}" 
          />
        </a>
        <div class="info">
          <div class="info-item">
            <h2>Likes</h2>
            <p>${r}</p>
          </div>
          <div class="info-item">
            <h2>Views</h2>
            <p>${o}</p>
          </div>
          <div class="info-item">
            <h2>Comments</h2>
            <p>${f}</p>
          </div>
          <div class="info-item">
            <h2>Downloads</h2>
            <p>${m}</p>
          </div>
        </div>
      </li>`).join("");d.insertAdjacentHTML("beforeend",t),g.refresh()}function L(){d.innerHTML=""}function b(){u.classList.add("is-active")}function w(){u.classList.remove("is-active")}const c=document.querySelector(".form");c.addEventListener("submit",async i=>{i.preventDefault();const t=i.currentTarget.elements["search-text"].value.trim();if(!t){n.warning({message:"Please enter a search query!"});return}L(),b();try{const s=await y(t);s.hits.length===0?n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):v(s.hits)}catch(s){n.error({message:"An error occurred while fetching images."}),console.error(s)}finally{w(),c.reset()}});
//# sourceMappingURL=index.js.map
