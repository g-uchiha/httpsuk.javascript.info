(function (AppNamespace) {

    function SavingAccount(owner, balance = 0, withdrawLimit = 10) {
        AppNamespace.Account.call(this, owner, balance);
        this._withdrawLimit = balance / 100 * withdrawLimit;

        setInterval(function () {

        }, 2592000000);
    }

    SavingAccount.prototype.deposit = function(sum) {
        const objInfo = AppNamespace.Account.prototype.deposit.call(this, sum);
        return `Успішно вдалося ${objInfo.message}: ${objInfo.sum} грн;`;
    }

    SavingAccount.prototype.withdraw = function(sum) {
        const objInfo = AppNamespace.Account.prototype.withdraw.call(this, sum);
    }

    SavingAccount.prototype.getBalance = function () {
        const sum = AppNamespace.Account.prototype.getBalance.call(this);
        return `На вашому рахунку: ${sum} грн;`;
    }

    AppNamespace.SavingAccount = SavingAccount;

})(window.AppNamespace);