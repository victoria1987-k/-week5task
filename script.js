



const meter=document.getElementById('meter');
meter.addEventListener('input',unitconverter);
function unitconverter(e){
    let meter=e.target.value;
    document.getElementById('inches').value=meter *30.97;
    document.getElementById('feet').value=meter *0.305;
    document.getElementById('yards').value=meter *1.094;}

    


    const inches=document.getElementById('inches');
    inches.addEventListener('input',unitconverter1);
    function unitconverter1(e){
        let inches=e.target.value;
        document.getElementById('meter').value=inches *30.97;
        document.getElementById('feet').value=inches *0.305;
        document.getElementById('yards').value=inches *1.094;}


        

    const feet=document.getElementById('feet');
    feet.addEventListener('input',unitconverter2);
    function unitconverter2(e){
        let feet=e.target.value;
        document.getElementById('meter').value=feet *30.97;
        document.getElementById('inches').value=feet *0.305;
        document.getElementById('yards').value=feet *1.094;}


        
    const yards=document.getElementById('yards');
    yards.addEventListener('input',unitconverter3);
    function unitconverter3(e){
        let yards=e.target.value;
        document.getElementById('meter').value=yards *30.97;
        document.getElementById('inches').value=yards *0.305;
        document.getElementById('feet').value=yards *1.094;}









