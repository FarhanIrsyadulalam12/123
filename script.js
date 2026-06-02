// Slider RPM

const rpmSlider =
document.getElementById("rpmSlider");

const rpmSet =
document.getElementById("rpmSet");

rpmSlider.addEventListener("input", () => {

rpmSet.innerHTML =
rpmSlider.value + " RPM";

});

// Slider Suhu

const tempSlider =
document.getElementById("tempSlider");

const tempSet =
document.getElementById("tempSet");

tempSlider.addEventListener("input", () => {

tempSet.innerHTML =
tempSlider.value + " °C";

});

// Grafik

const ctx =
document.getElementById('myChart');

const myChart =
new Chart(ctx, {

type: 'line',

data: {

labels: ['1','2','3','4','5','6','7'],

datasets: [

{
label:'RPM',
data:[1000,1200,1500,1400,1600,1700,1800],
borderColor:'#00a2ff',
tension:0.4
},

{
label:'Suhu',
data:[30,32,35,40,42,44,45],
borderColor:'#ff5733',
tension:0.4
},

{
label:'Viskositas',
data:[900,950,1000,1100,1150,1200,1250],
borderColor:'#00ff66',
tension:0.4
}

]

},

options:{
responsive:true
}

});