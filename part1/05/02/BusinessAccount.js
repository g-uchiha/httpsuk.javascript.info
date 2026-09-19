(function (AppNamespace) {

    function BusinessAccount(owner, balance = 0, creditLimit = 1500) {
        AppNamespace.Account.call(this, owner, balance);
        this._creditLimit = creditLimit;
    }

    BusinessAccount.prototype.__proto__ = AppNamespace.Account.prototype;

    BusinessAccount.prototype.deposit = function(sum) {
        sum = AppNamespace.checkValidNumber(sum);
        const objInfo = AppNamespace.Account.prototype.deposit.call(this, sum);
        this._balance += sum;
        return `Успішно вдалося ${objInfo.message}: ${objInfo.sum} грн;`;
    }

    BusinessAccount.prototype.withdraw = function(sum) {
        sum = AppNamespace.checkValidNumber(sum);

        const objInfo = AppNamespace.Account.prototype.withdraw.call(this, sum);
        const balance = AppNamespace.Account.prototype.getBalance.call(this);

        if(balance - objInfo.sum < -this._creditLimit) {
            return `Недостатньо коштів щоб ${objInfo.message} ${sum} грн;`;
        }

        this._balance -= sum;
        return `Успішно вдалося ${objInfo.message}: ${objInfo.sum} грн;`;
    }

    BusinessAccount.prototype.getBalance = function () {
        const sum = AppNamespace.Account.prototype.getBalance.call(this);
        return `На вашому рахунку: ${sum} грн;`;
    }

    AppNamespace.BusinessAccount = BusinessAccount;

})(window.AppNamespace);