var todayUrl = "http://www.horoscope.com/us/mobile/horoscopes/horoscope-general-daily.aspx?sign=";
/*var tomorrowUrl = "http://www.horoscope.com/us/mobile/horoscopes/general/horoscope-general-daily-tomorrow.aspx?sign=";
var weekUrl = "http://www.horoscope.com/us/mobile/horoscopes/general/horoscope-general-weekly.aspx?sign=";
var yearUrl = "http://www.horoscope.com/us/mobile/horoscopes/general/horoscope-general-monthly.aspx?sign=";*/

var wellnessUrl = "http://www.horoscope.com/us/mobile/horoscopes/horoscope-wellness-daily.aspx?sign=";
var loveUrl = "http://www.horoscope.com/us/mobile/horoscopes/horoscope-love-daily.aspx?sign=";
var careerUrl = "http://www.horoscope.com/us/mobile/horoscopes/horoscope-career-daily.aspx?sign=";


daily.controller('detailController', ['$scope', '$stateParams','$http','$ionicLoading','$ionicHistory', 
        function($scope,$stateParams, $http, $ionicLoading,$ionicHistory) {
            $scope.backMain = function() {
           
                $ionicHistory.goBack();
            };

             $scope.result = "";

            $scope.show = function() {
               $ionicLoading.show({
                    template: '<ion-spinner></ion-spinner><p> Loading.....</p>'
                }).then(function(){
                    console.log("The loading indicator is now displayed");
                    });
                };
                $scope.hide = function(){
                    $ionicLoading.hide().then(function(){
                       console.log("The loading indicator is now hidden");
                    });
                };


                $scope.getToday = function(){
                    $scope.show();
                    $http.get(todayUrl + $scope.sign)
                       .success(function(response) {
                             var html = response;
                             var o = html.indexOf('dest-page-text-div');
                            var data = html.substr(o);
                          
                               var end = data.indexOf('</div>');
                               var begin = data.indexOf('>') + 1 ;
                             var l = data.substr(begin,(end - begin));
                            $scope.result = l;

                             $scope.hide();
                        })
                        .error(function(e) {
                            alert(e);
                        });
                    };  $scope.getWellNess = function(){
                          $scope.show();
                    $http.get(wellnessUrl + $scope.sign)
                       .success(function(response) {
                             var html = response;
                             var o = html.indexOf('dest-page-text-div');
                            var data = html.substr(o);
                            //alert(data);
                               var end = data.indexOf('</div>');
                               var begin = data.indexOf('>') + 1 ;
                             var l = data.substr(begin,(end - begin));
                            $scope.result = l;

                             $scope.hide();
                        })
                        .error(function(e) {
                            console.log(e);
                            $scope.result = e;
                        });
                    };

                $scope.getLove = function(){
                      $scope.show();
                    $http.get(loveUrl + $scope.sign)
                       .success(function(response) {
                             var html = response;
                             var o = html.indexOf('dest-page-text-div');
                            var data = html.substr(o);
                            //alert(data);
                               var end = data.indexOf('</div>');
                               var begin = data.indexOf('>') + 1 ;
                             var l = data.substr(begin,(end - begin));
                            $scope.result = l;

                             $scope.hide();
                        })
                        .error(function(e) {
                            console.log(e);
                            $scope.result = e;
                        });
                    };

                $scope.getCareer = function(){
                      $scope.show();
                    $http.get(careerUrl + $scope.sign)
                       .success(function(response) {
                             var html = response;
                             var o = html.indexOf('dest-page-text-div');
                            var data = html.substr(o);
                            //alert(data);
                               var end = data.indexOf('</div>');
                               var begin = data.indexOf('>') + 1 ;
                             var l = data.substr(begin,(end - begin));
                            $scope.result = l;

                             $scope.hide();
                        })
                        .error(function(e) {
                            console.log(e);
                            $scope.result = e;
                        });
                    };

                $scope.changeClass = function(s){
                if (s == 0)
                {
                    $scope.todayClass = "tabactive";
                    $scope.tomorrowClass = "tabinactive";
                    $scope.weekClass = "tabinactive";
                    $scope.yearClass = "tabinactive";
                    AdMob.showInterstitial();
                    $scope.getToday();
                }

                if (s == 1)
                {
                    $scope.todayClass = "tabinactive";
                    $scope.tomorrowClass = "tabactive";
                    $scope.weekClass = "tabinactive";
                    $scope.yearClass = "tabinactive";
                    AdMob.showInterstitial();
                    $scope.getLove();
                }

                if (s == 2)
                {
                    $scope.todayClass = "tabinactive";
                    $scope.tomorrowClass = "tabinactive";
                    $scope.weekClass = "tabactive";
                    $scope.yearClass = "tabinactive";
                    AdMob.showInterstitial();
                    $scope.getCareer();
                }
                
                if (s == 3)
                {
                    $scope.todayClass = "tabinactive";
                    $scope.tomorrowClass = "tabinactive";
                    $scope.weekClass = "tabinactive";
                    $scope.yearClass = "tabactive";
                    AdMob.showInterstitial();                   
                    $scope.getWellNess();
                }
            }

                $scope.sign = $stateParams.sign;
                $scope.title = $stateParams.tname;
                $scope.curdate = getCurrentDate();
                $scope.todayClass = "tabactive";
                $scope.tomorrowClass = "tabinactive";
                $scope.weekClass = "tabinactive";
                $scope.yearClass = "tabinactive";

                $scope.getToday();
              
}])



function getCurrentDate()
{

   var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!

    var yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 
    var today = dd+'/'+mm+'/'+yyyy;
    return today;

}