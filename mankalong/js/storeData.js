  (function($){
    var data = {'allArea':[
      {'area':'浙江省','allCity':[
        {'city':'杭州市','allStore':[
           {'store':'杭州庆春银泰专柜'},
           {'store':'杭州大厦专柜'},
           {'store':'杭州西湖银泰专柜'},
           {'store':'杭州解百专柜'},
           {'store':'杭州百大专柜'},
           {'store':'杭州凤起店'},
           {'store':'杭州武林银泰专柜'},
           {'store':'杭州解放店'},
           {'store':'杭州城西银泰专柜'},
           {'store':'杭州湖滨银泰专柜'},
           {'store':'杭州万象城专柜'},
           {'store':'杭州奥斯卡电影大世界专柜'},
           {'store':'杭州庆春电影大世界专柜'},
           {'store':'杭州翠苑电影大世界专柜'},
           {'store':'杭州下沙银泰专柜'},
           {'store':'临平店'},
           {'store':'临平银泰专柜'},
           {'store':'临安专卖店'},
           {'store':'临安国贸专柜'},
           {'store':'杭州永旺梦乐城专柜'},
           {'store':'杭州水晶城专柜'},
           {'store':'杭州西田专柜'},
           {'store':'杭州衣之家百货专柜'},
           {'store':'杭州市滨江区星光城专柜'},
           {'store':'杭州西溪印象城专柜'},
           {'store':'萧山区瓜沥镇专卖店'},
           {'store':'萧山临浦专卖店'},
           {'store':'萧山义蓬专卖店'},
           {'store':'萧山恒隆专卖店'},
           {'store':'桐庐春江路婚纱影楼专柜'},
           {'store':'杭州临平莱蒙专柜'},
           {'store':'余杭上亿广场专柜'},
           {'store':'萧山银隆专柜'},
           {'store':'萧山加州阳光专柜'},
           {'store':'萧山店'}
        ]},
        {'city':'富阳','allStore':[
           {'store':'富阳银泰店专柜'},
           {'store':'富阳东方茂（新）专卖店'},
           {'store':'富阳桂花路专卖店'}
        ]},
        {'city':'宁波','allStore':[
           {'store':'宁波二百专柜'},
           {'store':'宁波天一国购店'},
           {'store':'宁波江东银泰专柜'},
           {'store':'宁波万达银泰专柜'},
           {'store':'宁波东门银泰专柜'},
           {'store':'宁海太平洋专柜'},
           {'store':'宁海国购专柜'},
           {'store':'宁波奥特莱斯专柜'}
        ]},
        {'city':'奉化','allStore':[
           {'store':'奉化银泰专柜'}
        ]},
        {'city':'余姚','allStore':[
           {'store':'余姚华联商厦专柜'},
           {'store':'余姚四明广场专卖店'},
           {'store':'余姚店：余姚新建路6－8号'}
        ]},
        {'city':'慈溪','allStore':[
           {'store':'慈溪店'},
           {'store':'慈溪银泰专柜'},
           {'store':'慈溪市保利滨湖天地专柜'},
           {'store':'慈溪华润万家香格店专柜'},
           {'store':'慈溪华润万家浒山专柜'},
           {'store':'慈溪观海卫镇嘉润国际广场专柜'}
        ]},
        {'city':'温州','allStore':[
           {'store':'温州世贸银泰专柜'},
           {'store':'温州瑞安专卖店'}
        ]},
        {'city':'绍兴','allStore':[
           {'store':'绍兴柯桥银泰专柜'},
           {'store':'绍兴国商专柜'},
           {'store':'绍兴银泰城专柜'}
        ]},
        {'city':'上虞','allStore':[
           {'store':'上虞老大通专柜'},
           {'store':'上虞新大通专柜'},
           {'store':'上虞万和城专柜'}
        ]},
        {'city':'诸暨','allStore':[
           {'store':'诸暨店'},
           {'store':'诸暨一百专柜'},
           {'store':'诸暨新天地专柜'},
           {'store':'诸暨雄风百货广场专柜'}
        ]},
        {'city':'湖州','allStore':[
           {'store':'湖州爱山银泰专柜'},
           {'store':'德清兴康北路专卖店'},
           {'store':'湖州市红旗路新天地店'}
        ]},
        {'city':'嘉兴','allStore':[
           {'store':'嘉兴店'},
           {'store':'嘉兴江南大厦专柜'},
           {'store':'嘉兴海盐县勤俭北路店'},
           {'store':'嘉善县解放路店'}
        ]},
        {'city':'桐乡','allStore':[
           {'store':'桐乡店'},
           {'store':'桐乡东兴生活广场专柜'},
           {'store':'桐乡东兴专柜'}
        ]},
        {'city':'海宁','allStore':[
           {'store':'海宁银泰城专柜'},
           {'store':'海宁市华联大厦专柜'}
        ]},
        {'city':'义乌','allStore':[
           {'store':'义乌城中中路专卖店'},
           {'store':'义乌工人路店'},
           {'store':'义乌伊美银泰专柜'}
        ]},
        {'city':'金华','allStore':[
           {'store':'金华银泰城专柜'},
           {'store':'金华银泰江南店'},
           {'store':'东阳新光太平洋专柜'}
        ]},
        {'city':'台州','allStore':[
           {'store':'天台太平洋（新）专柜'},
           {'store':'天台珠宝城专柜'},
           {'store':'台州温岭银泰专柜'},
           {'store':'台州温岭万寿路专卖店'},
           {'store':'台州市椒江锦江百货专柜'}
        ]}
      ]},

      {'area':'江苏省','allCity':[
        {'city':'南通市','allStore':[
           {'store':'江苏南通金鹰园融专柜'}
        ]}
      ]}
      
    ]};




    //console.log(data);
    var $secProvince = $('#secProvince');
    var $secCity = $('#secCity');
    var $secStore = $('#secStore');  //取件中的寝室楼
    var $secStore2 = $('#secStore2'); //寄件中的寝室楼


    function SelectArea(n){//构造第一个select
      var n = n || 0;
      var html = '';
      var len = data.allArea.length;
      for(var i = 0; i < len; i++){
        if(i == n){
          html += '<option value="' + data.allArea[i].area + '" selected="selected">' + data.allArea[i].area + '</option>';
        }else{
          html += '<option value="' + data.allArea[i].area + '">' + data.allArea[i].area + '</option>';
        }
      }
      $secProvince.html(html);
      Selectcity(n);
    }

    function Selectcity(n,q){//构造第二个select
      var n = n || 0;
      var q = q || 0;
      var html = '';
      var len = data.allArea[n].allCity.length;
      for(var i = 0; i < len; i++){
        if(i == q){
          html += '<option value="' + data.allArea[n].allCity[i].city + '" selected="selected">' + data.allArea[n].allCity[i].city + '</option>';
        }else{
          html += '<option value="' + data.allArea[n].allCity[i].city + '" >' + data.allArea[n].allCity[i].city + '</option>';
        }
      }
      $secCity.html(html);
      Selectstore(n,q);
    }


    function Selectstore(n,q,k){//构造第三个select
      var n = n || 0;
      var q = q || 0;
      var k = k || 0;
      var html = '';

      var len = data.allArea[n].allCity[q].allStore.length;
      for(var i = 0; i < len; i++){
        if(i == k){
          html += '<option value="' + data.allArea[n].allCity[q].allStore[i].store + '" selected="selected">' + data.allArea[n].allCity[q].allStore[i].store + '</option>';
        }else{
          html += '<option value="' + data.allArea[n].allCity[q].allStore[i].store + '" >' + data.allArea[n].allCity[q].allStore[i].store + '</option>';
        }
      }
      $secStore.html(html);
      $secStore2.html(html);
    }


    SelectArea();//初始化

    $secProvince.change(function(){//绑定第一个select
      var n = $secProvince.find(':selected').index();
      SelectArea(n);
    });

    $secCity.change(function(){//绑定第二个select
      var n = $secProvince.find(':selected').index();
      var q = $secCity.find(':selected').index();
      Selectcity(n,q);
    });

    $secStore.change(function(){//绑定第二个select
      var n = $secProvince.find(':selected').index();
      var q = $secCity.find(':selected').index();
      var k = $secStore.find(':selected').index();
      Selectstore(n,q,k);
    });

    $secStore2.change(function(){//绑定第二个select
      var n = $secProvince.find(':selected').index();
      var q = $secCity.find(':selected').index();
      var k = $secStore2.find(':selected').index();
      Selectstore(n,q,k);
    });


  })(jQuery);