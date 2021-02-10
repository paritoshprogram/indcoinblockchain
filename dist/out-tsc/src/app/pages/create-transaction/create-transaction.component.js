var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlockchainService } from '../../services/blockchain.service';
import { Transaction } from 'SavjeeCoin/src/blockchain';
var CreateTransactionComponent = /** @class */ (function () {
    function CreateTransactionComponent(blockchainService, router) {
        this.blockchainService = blockchainService;
        this.router = router;
        this.newTx = new Transaction();
        this.newTx = new Transaction();
        this.ownWalletKey = blockchainService.walletKeys[0];
    }
    CreateTransactionComponent.prototype.ngOnInit = function () {
    };
    CreateTransactionComponent.prototype.createTransaction = function () {
        var newTx = this.newTx;
        // Set the FROM address and sign the transaction
        newTx.fromAddress = this.ownWalletKey.publicKey;
        newTx.signTransaction(this.ownWalletKey.keyObj);
        try {
            this.blockchainService.addTransaction(this.newTx);
        }
        catch (e) {
            alert(e);
            return;
        }
        this.router.navigate(['/new/transaction/pending', { addedTx: true }]);
        this.newTx = new Transaction();
    };
    CreateTransactionComponent = __decorate([
        Component({
            selector: 'app-create-transaction',
            templateUrl: './create-transaction.component.html',
            styleUrls: ['./create-transaction.component.scss']
        }),
        __metadata("design:paramtypes", [BlockchainService, Router])
    ], CreateTransactionComponent);
    return CreateTransactionComponent;
}());
export { CreateTransactionComponent };
//# sourceMappingURL=create-transaction.component.js.map