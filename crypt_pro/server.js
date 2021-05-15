let http = require('http');
let mysql = require('mysql');
let fs = require('fs');

http.createServer(function (req, res) {
   switch(req.url){
       case "/bit.js": send(res, "./bit.js", "text/javascript"); break;
       case "/bitIcon.png": send(res, "./bitIcon.png", "text/png"); break;
       case "/BITPage.html": send(res, "./BITPage.html", "text/html"); break;
       case "/btc.js": send(res, "./btc.js", "text/javascript"); break;
       case "/btcIcon.png": send(res, "./btcIcon.png", "text/png"); break;
       case "/BTCPage.html": send(res, "./BTCPage.html", "text/html"); break;
       case "/btp.js": send(res, "./btp.js", "text/javascript"); break;
       case "/btpIcon.png": send(res, "./btpIcon.png", "text/png"); break;
       case "/BTPPage.html": send(res, "./BTPPage.html", "text/html"); break;
       case "/byt.js": send(res, "./byt.js", "text/javascript"); break;
       case "/bytIcon.png": send(res, "./bytIcon.png", "text/png"); break;
       case "/BYTPage.html": send(res, "./BYTPage.html", "text/html"); break;
       case "/car.js": send(res, "./car.js", "text/javascript"); break;
       case "/carIcon.png": send(res, "./carIcon.png", "text/png"); break;
       case "/CARPage.html": send(res, "./CARPage.html", "text/html"); break;
       case "/cye.js": send(res, "./cye.js", "text/javascript"); break;
       case "/cyeIcon.png": send(res, "./cyeIcon.png", "text/png"); break;
       case "/CYEPage.html": send(res, "./CYEPage.html", "text/html"); break;
       case "/das.js": send(res, "./das.js", "text/javascript"); break;
       case "/dasIcon.jpg": send(res, "./dasIcon.jpg", "text/jpg"); break;
       case "/DASPage.html": send(res, "./DASPage.html", "text/html"); break;
       case "/dec.js": send(res, "./dec.js", "text/javascript"); break;
       case "/decIcon.png": send(res, "./decIcon.png", "text/png"); break;
       case "/DECPage.html": send(res, "./DECPage.html", "text/html"); break;
       case "/dog.js": send(res, "./dog.js", "text/javascript"); break;
       case "/dogIcon.png": send(res, "./dogIcon.png", "text/png"); break;
       case "/DOGPage.html": send(res, "./DOGPage.html", "text/html"); break;
       case "/eme.js": send(res, "./eme.js", "text/javascript"); break;
       case "/emeIcon.png": send(res, "./emeIcon.png", "text/png"); break;
       case "/EMEPage.html": send(res, "./EMEPage.html", "text/html"); break;
       case "/eos.js": send(res, "./eos.js", "text/javascript"); break;
       case "/eosIcon.png": send(res, "./eosIcon.png", "text/png"); break;
       case "/EOSPage.html": send(res, "./EOSPage.html", "text/html"); break;
       case "/eth.js": send(res, "./eth.js", "text/javascript"); break;
       case "/ethIcon.png": send(res, "./ethIcon.png", "text/png"); break;
       case "/ETHPage.html": send(res, "./ETHPage.html", "text/html"); break;
       case "/fea.js": send(res, "./fea.js", "text/javascript"); break;
       case "/feaIcon.png": send(res, "./feaIcon.png", "text/png"); break;
       case "/FEAPage.html": send(res, "./FEAPage.html", "text/html"); break;
       case "/grd.js": send(res, "./grd.js", "text/javascript"); break;
       case "/grdIcon.png": send(res, "./grdIcon.png", "text/png"); break;
       case "/GRDPage.html": send(res, "./GRDPage.html", "text/html"); break;
       case "/kod.js": send(res, "./kod.js", "text/javascript"); break;
       case "/kodIcon.png": send(res, "./kodIcon.png", "text/png"); break;
       case "/KODPage.html": send(res, "./KODPage.html", "text/html"); break;
       case "/ltc.js": send(res, "./ltc.js", "text/javascript"); break;
       case "/ltcIcon.jpg": send(res, "./ltcIcon.jpg", "text/jpg"); break;
       case "/LTCPage.html": send(res, "./LTCPage.html", "text/html"); break;
       case "/maz.js": send(res, "./maz.js", "text/javascript"); break;
       case "/mazIcon.jpg": send(res, "./mazIcon.jpg", "text/jpg"); break;
       case "/MAZPage.html": send(res, "./MAZPage.html", "text/html"); break;
       case "/mon.js": send(res, "./mon.js", "text/javascript"); break;
       case "/monIcon.png": send(res, "./monIcon.png", "text/png"); break;
       case "/MONPage.html": send(res, "./MONPage.html", "text/html"); break;
       case "/nem.js": send(res, "./nem.js", "text/javascript"); break;
       case "/nemIcon.png": send(res, "./nemIcon.png", "text/png"); break;
       case "/NEMPage.html": send(res, "./NEMPage.html", "text/html"); break;
       case "/neo.js": send(res, "./neo.js", "text/javascript"); break;
       case "/neoIcon.png": send(res, "./neoIcon.png", "text/png"); break;
       case "/NEOPage.html": send(res, "./NEOPage.html", "text/html"); break;
       case "/nmc.js": send(res, "./nmc.js", "text/javascript"); break;
       case "/nmcIcon.png": send(res, "./nmcIcon.png", "text/png"); break;
       case "/NMCPage.html": send(res, "./NMCPage.html", "text/html"); break;
       case "/nxt.js": send(res, "./nxt.js", "text/javascript"); break;
       case "/nxtIcon.png": send(res, "./nxtIcon.png", "text/png"); break;
       case "/NXTPage.html": send(res, "./NXTPage.html", "text/html"); break;
       case "/pee.js": send(res, "./pee.js", "text/javascript"); break;
       case "/peeIcon.png": send(res, "./peeIcon.png", "text/png"); break;
       case "/PEEPage.html": send(res, "./PEEPage.html", "text/html"); break;
       case "/pet.js": send(res, "./pet.js", "text/javascript"); break;
       case "/petIcon.png": send(res, "./petIcon.png", "text/png"); break;
       case "/PETPage.html": send(res, "./PETPage.html", "text/html"); break;
       case "/pot.js": send(res, "./pot.js", "text/javascript"); break;
       case "/potIcon.png": send(res, "./potIcon.png", "text/png"); break;
       case "/POTPage.html": send(res, "./POTPage.html", "text/html"); break;
       case "/pri.js": send(res, "./pri.js", "text/javascript"); break;
       case "/priIcon.png": send(res, "./priIcon.png", "text/png"); break;
       case "/PRIPage.html": send(res, "./PRIPage.html", "text/html"); break;
       case "/rip.js": send(res, "./rip.js", "text/javascript"); break;
       case "/ripIcon.jpg": send(res, "./ripIcon.jpg", "text/jpg"); break;
       case "/RIPPage.html": send(res, "./RIPPage.html", "text/html"); break;
       case "/ste.js": send(res, "./ste.js", "text/javascript"); break;
       case "/steIcon.png": send(res, "./steIcon.png", "text/png"); break;
       case "/STEPage.html": send(res, "./STEPage.html", "text/html"); break;
       case "/swf.js": send(res, "./swf.js", "text/javascript"); break;
       case "/swfIcon.png": send(res, "./swfIcon.png", "text/png"); break;
       case "/SWFPage.html": send(res, "./SWFPage.html", "text/html"); break;
       case "/syn.js": send(res, "./syn.js", "text/javascript"); break;
       case "/synIcon.png": send(res, "./synIcon.png", "text/png"); break;
       case "/SYNPage.html": send(res, "./SYNPage.html", "text/html"); break;
       case "/tit.js": send(res, "./tit.js", "text/javascript"); break;
       case "/titIcon.png": send(res, "./titIcon.png", "text/png"); break;
       case "/TITPage.html": send(res, "./TITPage.html", "text/html"); break;
       case "/veg.js": send(res, "./veg.js", "text/javascript"); break;
       case "/vegIcon.png": send(res, "./vegIcon.png", "text/png"); break;
       case "/VEGPage.html": send(res, "./VEGPage.html", "text/html"); break;
       case "/ver.js": send(res, "./ver.js", "text/javascript"); break;
       case "/verIcon.jpg": send(res, "./verIcon.jpg", "text/jpg"); break;
       case "/VERPage.html": send(res, "./VERPage.html", "text/html"); break;
       case "/wav.js": send(res, "./wav.js", "text/javascript"); break;
       case "/wavIcon.jpg": send(res, "./wavIcon.jpg", "text/jpg"); break;
       case "/WAVPage.html": send(res, "./WAVPage.html", "text/html"); break;
       case "/websiteIcon.png": send(res, "./websiteIcon.png", "text/png"); break;
       case "/zca.js": send(res, "./zca.js", "text/javascript"); break;
       case "/zcaIcon.png": send(res, "./zcaIcon.png", "text/png"); break;
       case "/ZCAPage.html": send(res, "./ZCAPage.html", "text/html"); break;
       case "/main.css": send(res, "./main.css", "text/css"); break;
       case "/index.css": send(res, "./index.css", "text/csst"); break;
       case "/index.js": send(res, "./index.js", "text/javascript"); break;
       default: send(res, "./index.html", "text/html");


   }
}).listen(8080);

function send(response, path, contentType){
    fs.readFile(path, function(err, data){
        if(err){
            response.writeHead(404);
            response.write('Not found!');
        }else{
            response.writeHead(200, {"Content-Type": contentType});
            response.write(data);
        }
        response.end();
    })
}