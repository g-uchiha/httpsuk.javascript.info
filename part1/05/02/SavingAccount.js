(function (AppNamespace) {

    function SavingAccount(owner, balance = 0, withdrawLimit = 10) {
        AppNamespace.Account.call(this, owner, balance);
        this._withdrawLimit = withdrawLimit;

        const defineInterval = 2592000000;

        setInterval(() => {
            this._balance += this._balance / 100 * 1.2;
        }, defineInterval);

        setInterval(() => {
            this._withdrawLimit = withdrawLimit;
        }, defineInterval);
    }

    SavingAccount.prototype.__proto__ = AppNamespace.Account.prototype;

    SavingAccount.prototype.deposit = function(sum) {
        sum = AppNamespace.checkValidNumber(sum);
        const objInfo = AppNamespace.Account.prototype.deposit.call(this, sum);
        this._balance += sum;
        return `Успішно вдалося ${objInfo.message}: ${objInfo.sum} грн;`;
    }

    SavingAccount.prototype.withdraw = function(sum) {
        sum = AppNamespace.checkValidNumber(sum);

        const objInfo = AppNamespace.Account.prototype.withdraw.call(this, sum);

        if(this._withdrawLimit <= 0) {
            return `Неможливо ${objInfo.message}, вичерпано місячний ліміт на зняття;`;
        }

        if(this._balance - sum < 0) {
            return `Неможливо ${objInfo.message}, недостатньо коштів для зняття ${sum} грн;`;
        }

        this._withdrawLimit--;
        this._balance -= sum;
        return `Успішно вдалося ${objInfo.message}: ${objInfo.sum} грн;`;
    }

    SavingAccount.prototype.getBalance = function () {
        const sum = AppNamespace.Account.prototype.getBalance.call(this);
        return `На вашому рахунку: ${sum} грн;`;
    }

    AppNamespace.SavingAccount = SavingAccount;

})(window.AppNamespace);