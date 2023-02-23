for (let i = 1000; i>=0; i--){
    if (i%2 == 0){
        console.log(i);
    }
}
let count = 10000;
for (let i = 1; i<=count; i++){
    if (i%2 == 0){
        if (i==(count/4)){
            alert("A quarter of the way there!");
        }
        if (i==(count/2)){
            alert("Halfway there!");
        }
        if (i==(count)){
            alert("The loop is done!");
        }
    }
}
const tvShows = ['The Boondocks','Drake and Josh','Thats so raven','Jessie','Ozark'];

let tvShowsLen = tvShows.length;

for (let i = 0; i < tvShowsLen; i++){
    console.log("My #" + (i+1) + " favorite tv show is " + tvShows[i]);
}
