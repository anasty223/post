import Navigation from "../Navigation.js/Navigation"
import s from "./Animation.module.css"

export default function Animation() {
    return <>
    <Navigation/>
    <div className={s.bike}>
      
    <div className={s.bike__cloud-1}></div>
    <div className={s.bike__cloud-2}></div>
    <div className={s.bike__cloud-3}></div>
    <div className={s.bike__bike}>
      <div className={s.bike__wheel}>
        <div className={s.bike__needle}></div>
        <div className={s.bike__needle}></div>
        <div className={s.bike__needle}></div>
      </div>
      <div className={s.bike__wheel}>
        <div className={s.bike__needle}></div>
        <div className={s.bike__needle}></div>
        <div className={s.bike__needle}></div>    
      </div>
      <div className={s.bike__downTube}></div>
      <div className={s.bike__tubes}>
        <div className={s.bike__chain}></div>
        <div className={s.bike__seatstays}></div>
        <div className={s.bike__chainstays}></div>
        <div className={s.bike__seattube}></div>
        <div className={s.bike__star}>
          <div className={s.bike__pedal}></div>    
        </div>
        <div className={s.bike__seat}></div>    
      </div>
      <div className={s.bike__toptube}></div>
      <div className={s.bike__fo}></div>
      <div className={s.bike__headtube}></div>
      <div className={s.bike__helm}></div>
      <div className={s.bike__lock}></div>    
    </div>
    <div className={s.bike__man}>
      <div className={s.bike__arm}>
        <div className={s.bike__forearm}>
          <div className={s.bike__hand}></div>    
        </div>
        <div className={s.bike__sleeve}></div>    
      </div>
      <div className={s.bike__backleg}>
        <div className={s.bike__shin}>
          <div className={s.bike__skin}></div>
          <div className={s.bike__ked}></div>    
        </div>    
      </div>
      <div className={s.bike__butt}></div>
      <div className={s.bike__frontleg}>
        <div className={s.bike__shin}>
          <div className={s.bike__skin}></div>
          <div className={s.bike__ked}></div>    
        </div>    
      </div>
      <div className={s.bike__shirt}>
        <div className={s.bike__collar}></div>    
      </div>
      <div className={s.bike__arm}>
        <div className={s.bike__forearm}>
          <div className={s.bike__hand}></div>    
        </div>
        <div className={s.bike__sleeve}></div>    
      </div>
      <div className={s.bike__head}>
        <div className={s.bike__eye}></div>
        <div className={s.bike__eye}></div>
        <div className={s.bike__whisker}></div>
        <div className={s.bike__nose}></div>
        <div className={s.bike__month}></div>
        <div className={s.bike__whisker}></div>
        <div className={s.bike__cap}>
          <div className={s.bike__peak}>
            <div className={s.bike__peakparts}></div>   
          </div>    
        </div>
      </div>
    </div>    
  </div>
    </>
}