(function(AppNamespace) {

    function Account(owner, balance = 0) {
        this.owner = owner;
        this._balance = balance;
    }

    Account.prototype.deposit = function(sum) {
        return {message: "Покласти на депозит", sum};
    }

    Account.prototype.withdraw = function(sum) {
        return {message: "Зняти з депозиту: ", sum};
    }

    Account.prototype.getBalance = function() {
        return this._balance;
    }

    AppNamespace.Account = Account;

})(window.AppNamespace);