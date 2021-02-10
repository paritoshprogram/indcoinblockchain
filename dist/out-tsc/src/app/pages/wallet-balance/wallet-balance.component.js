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
import { ActivatedRoute } from '@angular/router';
import { BlockchainService } from '../../services/blockchain.service';
var WalletBalanceComponent = /** @class */ (function () {
    function WalletBalanceComponent(route, blockchainService) {
        this.route = route;
        this.blockchainService = blockchainService;
        this.walletAddress = '';
        this.balance = 0;
        this.transactions = [];
    }
    WalletBalanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.walletAddress = params['address'];
            var blockchain = _this.blockchainService.blockchainInstance;
            _this.balance = blockchain.getBalanceOfAddress(_this.walletAddress);
            _this.transactions = blockchain.getAllTransactionsForWallet(_this.walletAddress);
        });
    };
    WalletBalanceComponent = __decorate([
        Component({
            selector: 'app-wallet-balance',
            templateUrl: './wallet-balance.component.html',
            styleUrls: ['./wallet-balance.component.scss']
        }),
        __metadata("design:paramtypes", [ActivatedRoute, BlockchainService])
    ], WalletBalanceComponent);
    return WalletBalanceComponent;
}());
export { WalletBalanceComponent };
//# sourceMappingURL=wallet-balance.component.js.map