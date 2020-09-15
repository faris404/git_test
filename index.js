setInterval(()=>{
    let colors = ['#df14d2','#a334e3','#10f344']
    let pos = Math.floor(Math.random()*colors.length)
    document.body.style.backgroundColor = colors[pos]
},2000)