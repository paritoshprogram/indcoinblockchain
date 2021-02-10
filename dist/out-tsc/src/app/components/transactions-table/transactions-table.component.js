var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { BlockchainService } from '../../services/blockchain.service';
var TransactionsTableComponent = /** @class */ (function () {
    function TransactionsTableComponent(blockchainService) {
        this.blockchainService = blockchainService;
        this.transactions = [];
    }
    TransactionsTableComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TransactionsTableComponent.prototype, "transactions", void 0);
    TransactionsTableComponent = __decorate([
        Component({
            selector: 'app-transactions-table',
            templateUrl: './transactions-table.component.html',
            styleUrls: ['./transactions-table.component.scss']
        }),
        __metadata("design:paramtypes", [BlockchainService])
    ], TransactionsTableComponent);
    return TransactionsTableComponent;
}());
export { TransactionsTableComponent };
//# sourceMappingURL=transactions-table.component.js.map