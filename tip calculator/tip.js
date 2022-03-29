const tipcalcy=() => {
    let AMOUNT=document.getElementById('bill_amount').value;
    // alert(AMOUNT);
    let PERCENTAGE=document.getElementById('tip_percentage').value;
    let TIP=AMOUNT*(PERCENTAGE/100);
    // alert(TIP);
    let TOTAL=TIP + Number(AMOUNT);
    // alert(TOTAL);
    document.getElementById('tip_amount').value=TIP;
    document.getElementById('total_billed').value=TOTAL;
}