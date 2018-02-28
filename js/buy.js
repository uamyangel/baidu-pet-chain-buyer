/*
 * @author t@tabalt.net
 */

$(function(){
    Buyer.ShowPetsOnSale();

    Buyer.InitBuyModal();

    setInterval(function(){
        Buyer.showAutoBuyPets();
    }, 5000);

    setInterval(function(){
        Buyer.TryBuyPets();
    }, 100);
});