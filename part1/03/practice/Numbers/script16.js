import { askANumber, isDiapason, cancelMsg } from "../utils.js";

function payBill() {
    const billSum = askANumber("sum of bill");
    if(billSum === undefined) return `your order ${cancelMsg}`;
    if(!isDiapason(billSum, 1, 2500)) return "price diapason 1-2500";

    let percentTip = askANumber("% tip for waiter");
    if(percentTip === undefined) percentTip = 0;
    if(!isDiapason(percentTip, 0, 100)) return "recommended tip diapason 0-30%";

    const toPay = billSum + (billSum / 100 * percentTip);
    const fmt = n => n.toFixed(2);
    const waiterMessage = percentTip === 0 ? "fuck you!!!" :
                                 percentTip <= 10 ? "thanks..." :
                                 percentTip <= 20 ? "thank you sir!" :
                                 percentTip <= 30 ? "God bless you sir!!!" : "blowjob sir?";

    const result = `
    Your bill: ${fmt(billSum)};
    Your tip: ${fmt(percentTip)};
    To pay: ${fmt(toPay)};
    Waiter's message for you: ${waiterMessage}`;

    return result;
}

alert(payBill());