  (function($){
    var data = {'allArea':[
      {'area':'杭州市','allSchool':[
        {'school':'浙江大学城市学院','allFloor':[
           {'floor':'问源楼'},
           {'floor':'尚雅楼'},
           {'floor':'求真楼'},
           {'floor':'思睿楼'},
           {'floor':'致远楼'},
           {'floor':'弘毅楼'},
           {'floor':'惟学楼'},
           {'floor':'精诚楼'},
           {'floor':'明德楼'},
           {'floor':'慕贤楼'}
        ]},
        {'school':'树人大学','allFloor':[
           {'floor':'清乐园1号楼'},
           {'floor':'清乐园2号楼'},
           {'floor':'清乐园3号楼'},
           {'floor':'清乐园4号楼'},
           {'floor':'致勤楼-东楼'},
           {'floor':'致勤楼-西楼'},
           {'floor':'致和园1号楼'},
           {'floor':'致和园2号楼'},
           {'floor':'致和园3号楼'},
           {'floor':'致和园4号楼'},
           {'floor':'致和园5号楼'},
           {'floor':'树人园2号楼'},
           {'floor':'树人园4号楼'},
           {'floor':'树人园5号楼'},
           {'floor':'树人园6号楼'},
           {'floor':'树人园7号楼'},
           {'floor':'树人园8号楼'},
           {'floor':'树人园10号楼'},
           {'floor':'树人园11号楼'},
           {'floor':'树人园12号楼'},
           {'floor':'树人园15号楼'},
           {'floor':'树人园17号楼'},
           {'floor':'树人园18号楼'},
           {'floor':'树人园22号楼'},
           {'floor':'树人园23号楼'},
           {'floor':'致信楼1号楼'},
           {'floor':'致信楼2号楼'},
           {'floor':'致信楼3号楼'}
        ]},
        {'school':'浙江工业大学(朝晖校区)','allFloor':[
           {'floor':'尚德园1号楼'},
           {'floor':'尚德园2号楼'},
           {'floor':'尚德园3号楼'},
           {'floor':'尚德园4号楼'},
           {'floor':'尚德园5号楼'},
           {'floor':'尚德园6号楼'},
           {'floor':'尚德园7号楼'},
           {'floor':'尚德园8号楼'},
           {'floor':'尚德园9号楼'},
           {'floor':'尚德园10号楼'},
           {'floor':'尚德园11号楼'},
           {'floor':'尚德园12号楼'},
           {'floor':'尚德园研究生楼'},
           {'floor':'梦溪园梦1号楼'},
           {'floor':'梦溪园梦2号楼'},
           {'floor':'梦溪园梦3号楼'},
           {'floor':'梦溪园梦4号楼'},
           {'floor':'梦溪园梦5号楼'},
           {'floor':'梦溪园梦6号楼'},
           {'floor':'梦溪园梦7号楼'},
           {'floor':'东新关1号楼'},
           {'floor':'东新关2号楼'},
           {'floor':'东新关3号楼'},
           {'floor':'东新关4号楼'},
           {'floor':'东新关5号楼'},
           {'floor':'东新关6号楼'},
           {'floor':'东新关7号楼'},
           {'floor':'东新关8号楼'},
           {'floor':'东新关9号楼'},
           {'floor':'东新关10号楼'},
           {'floor':'东新关11号楼'}
        ]}
      ]},
      {'area':'武汉市','allSchool':[
        {'school':'武汉科技大学城市学院','allFloor':[
           {'floor':'北一楼'},
           {'floor':'北二楼'},
           {'floor':'北三楼'},
           {'floor':'北四楼'},
           {'floor':'北五楼'},
           {'floor':'北六楼'},
           {'floor':'北七楼'},
           {'floor':'北八楼'},
           {'floor':'北九楼'},
           {'floor':'北十楼'},
           {'floor':'南一楼'},
           {'floor':'南二楼'},
           {'floor':'南三楼'},
           {'floor':'南四楼'},
           {'floor':'南五楼'}
        ]}
      ]},
      {'area':'金华市','allSchool':[
        {'school':'浙江师范大学','allFloor':[
           {'floor':'暂无楼幢信息'}
        ]}
      ]}
    ]};




    //console.log(data);
    var $secArea = $('#secArea');
    var $secSchool = $('#secSchool');
    var $secFloor = $('#secFloor');  //取件中的寝室楼
    var $secFloor2 = $('#secFloor2'); //寄件中的寝室楼


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
      $secArea.html(html);
      SelectSchool(n);
    }

    function SelectSchool(n,q){//构造第二个select
      var n = n || 0;
      var q = q || 0;
      var html = '';
      var len = data.allArea[n].allSchool.length;
      for(var i = 0; i < len; i++){
        if(i == q){
          html += '<option value="' + data.allArea[n].allSchool[i].school + '" selected="selected">' + data.allArea[n].allSchool[i].school + '</option>';
        }else{
          html += '<option value="' + data.allArea[n].allSchool[i].school + '" >' + data.allArea[n].allSchool[i].school + '</option>';
        }
      }
      $secSchool.html(html);
      SelectFloor(n,q);
    }


    function SelectFloor(n,q,k){//构造第三个select
      var n = n || 0;
      var q = q || 0;
      var k = k || 0;
      var html = '';

      var len = data.allArea[n].allSchool[q].allFloor.length;
      for(var i = 0; i < len; i++){
        if(i == k){
          html += '<option value="' + data.allArea[n].allSchool[q].allFloor[i].floor + '" selected="selected">' + data.allArea[n].allSchool[q].allFloor[i].floor + '</option>';
        }else{
          html += '<option value="' + data.allArea[n].allSchool[q].allFloor[i].floor + '" >' + data.allArea[n].allSchool[q].allFloor[i].floor + '</option>';
        }
      }
      $secFloor.html(html);
      $secFloor2.html(html);
    }


    SelectArea();//初始化

    $secArea.change(function(){//绑定第一个select
      var n = $secArea.find(':selected').index();
      SelectArea(n);
    });

    $secSchool.change(function(){//绑定第二个select
      var n = $secArea.find(':selected').index();
      var q = $secSchool.find(':selected').index();
      SelectSchool(n,q);
    });

    $secFloor.change(function(){//绑定第二个select
      var n = $secArea.find(':selected').index();
      var q = $secSchool.find(':selected').index();
      var k = $secFloor.find(':selected').index();
      SelectFloor(n,q,k);
    });

    $secFloor2.change(function(){//绑定第二个select
      var n = $secArea.find(':selected').index();
      var q = $secSchool.find(':selected').index();
      var k = $secFloor2.find(':selected').index();
      SelectFloor(n,q,k);
    });


  })(jQuery);