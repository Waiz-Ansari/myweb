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

var regDictionary = function () {
   var obj = {};

   obj.list = function () {
       $("#regList").bootstrapTable({
           url:'ruleBase/list',
           method:'get',
           cache:false,
           pagination: true,
           pageSize:10,
           // pageNumber:1,
           sidePagination : 'client',
           queryParamsType: '',
           queryParams:function(params) {
               params.length = $("#length").val();
               params.format = $("#format").val();
               return params;
           },
           responseHandler:function (res) {
               return res.list;
           },
           columns:[
               {
                   field:'length',
                   title:'Length (Byte)'
               },
               {
                   field:'format',
                   title:'Range/Format'
               },
               {
                   field:'regex',
                   title:'RegEx'
               },
               {
                   field:'',
                   title: 'Action',
                   width:100,
                   events:{
                       'click .remove':function (e,value,row,index) {
                           Confirm.confirm("Are you sure you want to delete this data?",function () {
                               $.ajax({
                                   url: 'ruleBase/delete',
                                   type: 'POST',
                                   dataType: 'json',
                                   data: {
                                       id: row.id
                                   },
                                   success: function (data) {
                                       if (data.code == 0) {
                                           $("#regList").bootstrapTable("refresh",{
                                               silent: true
                                           });
                                       }else {
                                           alert(data.msg)
                                       }
                                   }
                               })
                           })
                       },
                       'click .edit':function (e,value,row,index){
                           $("#setInfo input[name='length']").val(row.length).attr("disabled", true);
                           $("#setInfo input[name='format']").val(row.format).attr("disabled", true);
                           $("#setInfo input[name='regex']").val(row.regex);
                           $("#setInfo .modal-title").html("Edit");
                           $("#setInfo").modal("show");
                           $("#submit").off("click").on("click",function () {
                               obj.submit(row.id);
                           });
                       }
                   },
                   formatter:function(value,row,index){
                       return [
                           '<a href="javascript:void(0);"class="edit" data-toggle="tooltip" data-placement="top"><span style="color: red">Edit\n\</span></a> ',
                           '<a href="javascript:void(0);"class="remove" data-toggle="tooltip" data-placement="top"><span style="color: red">\n\Delete</span></a> '
                       ].join('')
                   }
               }
           ],
           onPostBody:function () {
           }
       })
   };

   obj.search = function(){
        $("#search").on("click",function () {
            $("#regList").bootstrapTable("refresh",{
                silent:true
            })
        })
   };
   
   obj.add = function () {
       $("#add").off("click").on("click",function () {
           $("#setProjectInfo .modal-title").html("Add");
           $("#setInfo").modal("show");
           $("#submit").off("click").on("click",function () {
               obj.submit();
           })
       });

       $('#setInfo').off("shown.bs.modal").on("shown.bs.modal", function(){
           obj.submitBtn = Ladda.create( document.querySelector( '#submit' ) );
       });

       $('#setInfo').off("hidden.bs.modal").on("hidden.bs.modal", function(){
           obj.submitBtn.stop();
           $("#setInfo form")[0].reset();
           obj.setInfoParsley.reset();
           $("#setInfo input[name='length']").attr("disabled", false);
           $("#setInfo input[name='format']").attr("disabled", false);
       });


   };
   
   obj.submit = function (id) {
       console.log(id);
       var valid = obj.setInfoParsley.validate(),url;
       if(valid){
           var data = {
               length:$("#setInfo input[name='length']").val(),
               format:$("#setInfo input[name='format']").val(),
               regex:$("#setInfo input[name='regex']").val(),
           };
           if(id){
               url = "ruleBase/update";
               data.id = id;
           }else{
               url = "ruleBase/save";
           }

           $.ajax({
               type:'POST',
               dataType:'json',
               // contentType: 'application/json',
               // traditional:true,
               url:url,
               data:data,
               success:function (data) {
                   if(data.code == 0){
                       $("#setInfo").modal("hide");
                       $("#regList").bootstrapTable('refresh',{
                           silent: true
                       })
                   }else{
                       obj.submitBtn.stop();
                       alert(data.msg);
                   }
               }
           })
       }
   };

   obj.parsleyForm = function () {
       obj.setInfoParsley = $("#setInfo form").parsley();
   };

   obj.init = function () {
       obj.list();
       obj.add();
       obj.parsleyForm();
       obj.search();
   };

   return obj;
}();

$(function() {
    regDictionary.init();
});