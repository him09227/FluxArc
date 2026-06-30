const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<120;i++){
  particles.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    r:Math.random()*3,
    dx:(Math.random()-0.5)*0.5,
    dy:(Math.random()-0.5)*0.5
  });
}

function animate(){

  ctx.clearRect(0,0,canvas.width,canvas.height);

  particles.forEach(p=>{

    p.x+=p.dx;
    p.y+=p.dy;

    if(p.x<0 || p.x>canvas.width) p.dx*=-1;
    if(p.y<0 || p.y>canvas.height) p.dy*=-1;

    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle="#3b82f6";
    ctx.fill();
  });

  requestAnimationFrame(animate);
}

animate();

const logoCanvas =
document.getElementById("logoCanvas");

const lctx =
logoCanvas.getContext("2d");

logoCanvas.width = 420;
logoCanvas.height = 420;

let nodes = [];

for(let i=0;i<120;i++){

  nodes.push({

    x:Math.random()*420,
    y:Math.random()*420,

    tx:210 +
      Math.cos(i*0.3)*150,

    ty:210 +
      Math.sin(i*0.3)*150,

    r:2 + Math.random()*3
  });

}

function animateLogo(){

  lctx.clearRect(
    0,
    0,
    420,
    420
  );

  nodes.forEach(n=>{

    n.x +=
      (n.tx-n.x)*0.02;

    n.y +=
      (n.ty-n.y)*0.02;

    lctx.beginPath();

    lctx.arc(
      n.x,
      n.y,
      n.r,
      0,
      Math.PI*2
    );

    lctx.fillStyle =
      "#3b82f6";

    lctx.fill();

  });

  requestAnimationFrame(
    animateLogo
  );

}

animateLogo();

window.addEventListener(
  "load",
  ()=>{

    setTimeout(()=>{

      document
        .getElementById("loader")
        .style.display =
          "none";

    },2000);

  }
);

const rate =
document.getElementById(
  "rate"
);

if(rate){

  setInterval(()=>{

    let price =
      (
        2400 +
        Math.random()*100
      ).toFixed(2);

    rate.innerText =
      "1 ETH ≈ " +
      price +
      " USDC";

  },3000);

}
window.addEventListener(
  "scroll",
  ()=>{

    const nav =
      document.querySelector(
        "nav"
      );

    if(window.scrollY > 50){

      nav.style.padding =
        "15px 8%";

    }
    else{

      nav.style.padding =
        "20px 8%";

    }

  }
);

const walletBtn =
document.getElementById(
  "walletBtn"
);

let connected =
  localStorage.getItem(
    "walletConnected"
  ) === "true";

if(walletBtn){

  walletBtn.addEventListener(
    "click",
    ()=>{

      if(!connected){

        walletBtn.innerText =
          "0x8F3A...7D92";

        walletBtn.classList.add(
          "connected"
        );

        connected = true;

      }else{

        walletBtn.innerText =
          "Connect Wallet";

        walletBtn.classList.remove(
          "connected"
        );

        connected = false;
localStorage.setItem(
  "walletConnected",
  connected
);

      }

    }
  );

}

const ethInput =
document.getElementById(
  "ethInput"
);

const usdcInput =
document.getElementById(
  "usdcInput"
);

const swapRate = 2435.67;

if(ethInput && usdcInput){

  ethInput.addEventListener(
    "input",
    ()=>{

      let eth =
        parseFloat(
          ethInput.value
        ) || 0;

      usdcInput.value =
        (eth * swapRate)
        .toFixed(2);

    }
  );

  usdcInput.addEventListener(
    "input",
    ()=>{

      let usdc =
        parseFloat(
          usdcInput.value
        ) || 0;

      ethInput.value =
        (usdc / swapRate)
        .toFixed(6);

    }
  );

}

const swapBtn =
document.getElementById(
  "swapBtn"
);

const swapStatus =
document.getElementById(
  "swapStatus"
);

const historyList =
document.getElementById(
  "historyList"
);

if(swapBtn){

  swapBtn.addEventListener(
    "click",
    ()=>{

      swapBtn.innerText =
        "Swapping...";

      setTimeout(()=>{

        swapBtn.innerText =
          "Swap";

        swapStatus.innerText =
          "✅ Swap Completed!";

        const item =
  "Swapped ETH → USDC";

saveHistory(item);

        if(historyList){

  const card =
    document.createElement(
      "div"
    );

  card.classList.add(
    "history-card"
  );

  card.innerHTML =
    ethInput.value +
    " " +
    fromToken.value +
    " → " +
    usdcInput.value +
    " " +
    toToken.value;

  historyList.prepend(
    card
  );

        }

        swapStatus.classList.add(
          "show"
        );

      },1500);

    }
  );

}

const swapArrow =
document.getElementById(
  "swapArrow"
);

const fromToken =
document.getElementById(
  "fromToken"
);

const toToken =
document.getElementById(
  "toToken"
);

if(
  swapArrow &&
  fromToken &&
  toToken &&
  ethInput &&
  usdcInput
){

  swapArrow.addEventListener(
    "click",
    ()=>{

      let tempToken =
        fromToken.value;

      fromToken.value =
        toToken.value;

      toToken.value =
        tempToken;

      let tempAmount =
        ethInput.value;

      ethInput.value =
        usdcInput.value;

      usdcInput.value =
        tempAmount;

    }
  );

}

function saveHistory(text){

  let history =
    JSON.parse(
      localStorage.getItem(
        "swapHistory"
      )
    ) || [];

  history.unshift(text);

  localStorage.setItem(
    "swapHistory",
    JSON.stringify(history)
  );
}

function saveHistory(text){

  let history =
    JSON.parse(
      localStorage.getItem(
        "swapHistory"
      )
    ) || [];

  history.unshift(text);

  localStorage.setItem(
    "swapHistory",
    JSON.stringify(history)
  );
} // ← yahan function khatam

// ↓ ISKE NEECHE PASTE KARO
const oldHistory =
  JSON.parse(
    localStorage.getItem(
      "swapHistory"
    )
  ) || [];

oldHistory.forEach((item)=>{

  if(historyList){

    const li =
      document.createElement("li");

    li.innerText = item;

    historyList.appendChild(li);
  }

});

const clearBtn =
  document.getElementById(
    "clearHistoryBtn"
  );

if(clearBtn){

  clearBtn.addEventListener(
    "click",
    ()=>{

      localStorage.removeItem(
        "swapHistory"
      );

      if(historyList){
        historyList.innerHTML = "";
      }

    }
  );

}
