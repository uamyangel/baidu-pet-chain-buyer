/*
 * @author t@tabalt.net
 */

$(function(){
    //Buyer.ShowPetsOnSale();

    setInterval(function(){
        Buyer.showAutoBuyPets();
    }, 2000);

    Buyer.InitBuyModal();

    setInterval(function(){
        Buyer.TryBuyPets();
    }, 100);
});