/**
 * Created by Miya on 2019/5/17.
 */
/*
 * msg  确认文字
 * confirmCallback  确认回调函数
 * cancelCallback   取消回调函数
 * option  {confirmBtn:"确定",cancelBtn:"取消"}
 * */
var Confirm = function(){

    var obj = {};

    obj.confirm = function(msg,confirmCallback,cancelCallback,option){

        $("#confirm p").html(msg);
        if( typeof option == "object"){
            $("#confirmBtn span").html(option.confirmBtn?option.confirmBtn:"Yes");
            $("#cancelBtn span").html(option.cancelBtn?option.cancelBtn:"No");

        };
        $('#confirm').modal("show");
        $('#confirm').off("shown.bs.modal").on("shown.bs.modal", function(){
            obj.confirmBtn = Ladda.create( document.querySelector( '#confirmBtn' ) );
            obj.cancelBtn = Ladda.create( document.querySelector( '#cancelBtn' ) );
        });
        $('#confirm').off("hidden.bs.modal").on("hidden.bs.modal", function(){
            obj.confirmBtn.stop();
            obj.cancelBtn.stop();
        });
        $("#confirmBtn").off("click").on("click",function () {
            obj.confirmBtn.start();
            if(typeof confirmCallback == "function"){
                confirmCallback();
            };
            obj.close();
        });
        $("#cancelBtn").off("click").on("click",function () {
            obj.cancelBtn.start();
            if(typeof cancelCallback == "function"){
                confirmCallback();
            };
            obj.close();
        });
    };

    obj.close = function () {
        $("#confirm").modal("hide");
    };

    return obj;

}();

var listRuleVersion = function () {
   var obj = {};

   obj.list = function () {
       $("#ruleVersionList").bootstrapTable({
           url:'protocol/protocolContent/listRuleVersion',
           method:'get',
           cache:false,
           pagination: true,
           pageSize:10,
           // pageNumber:1,
           sidePagination : 'client',
           queryParamsType: '',
           queryParams:function(params) {
               params.ruleVersion = $("#ruleVersionInput").val();
               return params;
           },
           responseHandler:function (res) {
               return res.data;
           },
           columns:[
               {
                   field:'ruleVersion',
                   title:'Rule Version'
               },
               {
                   field:'createTime',
                   title:'CreateTime'
               },
               {
                   field:'id',
                   title: 'Action',
                   width:80,
                   events:{
                       'click .see':function (e,value,row,index){
                           $("#ruleTable").bootstrapTable("refresh",{
                               silent: true,
                               url:"protocol/protocolContent/list",
                               query:{
                                   ruleVersion:row.ruleVersion
                               }
                           });
                           $("#rule .modal-title").html(row.ruleVersion);
                           $("#rule").modal("show");
                       }
                   },
                   formatter:function(value,row,index){
                       return [
                           '<a href="javascript:void(0);"class="see" data-toggle="tooltip" data-placement="top" title="See"><span style="color: red">See\n\</span></a> '
                       ].join('')
                   }
               }
           ],
           onPostBody:function () {
           }
       });

       $("#ruleTable").bootstrapTable({
           method:'get',
           cache:false,
           pagination: true,
           pageSize:10,
           // pageNumber:1,
           sidePagination : 'client',
           queryParamsType: '',
           responseHandler:function (res) {
               return res.data;
           },
           columns:[
               {
                   field:'parameter',
                   title:'Parameter'
               },
               {
                   field:'length',
                   title:'Length (Byte)'
               },
               {
                   field:'format',
                   title:'Range/Format'
               },
               {
                   field:'default',
                   title:'Default'
               },
               {
                   field:'relevant',
                   title:'relevant'
               },
               {
                   field:'regex',
                   title:'Regex'
               }
           ],
           onPostBody:function () {
           }
       });


   };


   obj.search = function(){
       $("#ruleVersionSearch").off("click").on("click",function () {
           $("#ruleVersionList").bootstrapTable("refresh",{
               silent: true
           })
       })
   };

   obj.init = function () {
       obj.list();
       obj.search();
   };

   return obj;
}();

var fileList = function () {
    var obj = {};

    obj.list = function () {
        $("#fileList").bootstrapTable({
            url:'protocol/file/list',
            method:'get',
            cache:false,
            pagination: true,
            pageSize:10,
            // pageNumber:1,
            sidePagination : 'server',
            queryParamsType: '',
            queryParams:function(params) {
                params.fileName = $("#fileName").val();
                params.createName = $("#createName").val();
                return params;
            },
            // responseHandler:function (res) {
            //     return res.data;
            // },
            columns:[
                {
                    field:'kitVersion',
                    title:'Jar Version'
                },
                {
                    field:'fileName',
                    title:'File Name'
                },
                {
                    field:'protocolVersion',
                    title:'Protocol Version'
                },
                {
                    field:'fileVersion',
                    title:'Excel Version'
                },
                {
                    field:'createName',
                    title:'Create Name'
                },
                {
                    field:'createTime',
                    title:'CreateTime'
                },
                {
                    field:'uploadIp',
                    title:'Ip'
                }
            ],
            onPostBody:function () {
            }
        });
    };


    obj.search = function(){
        $("#fileSearch").off("click").on("click",function () {
            $("#fileList").bootstrapTable("refresh",{
                silent: true
            })
        })
    };

    obj.init = function () {
        obj.list();
        obj.search();
    };

    return obj;
}();

$(function() {
    listRuleVersion.init();
    fileList.init();
});