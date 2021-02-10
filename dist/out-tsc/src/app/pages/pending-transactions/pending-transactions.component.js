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
import { Router, ActivatedRoute } from '@angular/router';
import { BlockchainService } from '../../services/blockchain.service';
var PendingTransactionsComponent = /** @class */ (function () {
    function PendingTransactionsComponent(blockchainService, router, route) {
        this.blockchainService = blockchainService;
        this.router = router;
        this.route = route;
        this.pendingTransactions = [];
        this.miningInProgress = false;
        this.justAddedTx = false;
        this.pendingTransactions = blockchainService.getPendingTransactions();
    }
    PendingTransactionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.route.snapshot.paramMap.get('addedTx')) {
            this.justAddedTx = true;
            setTimeout(function () {
                _this.justAddedTx = false;
            }, 4000);
        }
    };
    PendingTransactionsComponent.prototype.minePendingTransactions = function () {
        this.miningInProgress = true;
        this.blockchainService.minePendingTransactions();
        this.miningInProgress = false;
        this.router.navigate(['/']);
    };
    PendingTransactionsComponent = __decorate([
        Component({
            selector: 'app-pending-transactions',
            templateUrl: './pending-transactions.component.html',
            styleUrls: ['./pending-transactions.component.scss']
        }),
        __metadata("design:paramtypes", [BlockchainService, Router, ActivatedRoute])
    ], PendingTransactionsComponent);
    return PendingTransactionsComponent;
}());
export { PendingTransactionsComponent };
//# sourceMappingURL=pending-transactions.component.js.map