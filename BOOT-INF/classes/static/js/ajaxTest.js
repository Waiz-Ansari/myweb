/**
 * Created by Miya on 2019/5/17.
 */
/*
 * msg  确认文字
 * confirmCallback  确认回调函数
 * cancelCallback   取消回调函数
 * option  {confirmBtn:"确定",cancelBtn:"取消"}
 * */
var Confirm = function () {

    var obj = {};

    obj.confirm = function (msg, confirmCallback, cancelCallback, option) {

        $("#confirm p").html(msg);
        if (typeof option == "object") {
            $("#confirmBtn span").html(option.confirmBtn ? option.confirmBtn : "Yes");
            $("#cancelBtn span").html(option.cancelBtn ? option.cancelBtn : "No");
        }
        ;
        $('#confirm').modal("show");
        $('#confirm').off("shown.bs.modal").on("shown.bs.modal", function () {
            obj.confirmBtn = Ladda.create(document.querySelector('#confirmBtn'));
            obj.cancelBtn = Ladda.create(document.querySelector('#cancelBtn'));
        });
        $('#confirm').off("hidden.bs.modal").on("hidden.bs.modal", function () {
            obj.confirmBtn.stop();
            obj.cancelBtn.stop();
        });
        $("#confirmBtn").off("click").on("click", function () {
            obj.confirmBtn.start();
            if (typeof confirmCallback == "function") {
                confirmCallback();
            }
            ;
            obj.close();
        });
        $("#cancelBtn").off("click").on("click", function () {
            obj.cancelBtn.start();
            if (typeof cancelCallback == "function") {
                confirmCallback();
            }
            ;
            obj.close();
        });
    };

    obj.close = function () {
        $("#confirm").modal("hide");
    };

    return obj;

}();

function syntaxHighlight(json) {
    if (typeof json != 'string') {
        json = JSON.stringify(json, undefined, 2);
    }
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    var parameterIndex = 1;
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number', id = '';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
                if (match == '"parameter":') {
                    id = 'id="parameter_' + parameterIndex + '"';
                    parameterIndex++;
                }
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '" ' + id + '>' + match + '</span>';
    });
}

function BuildID(length){
    return Number(Math.random().toString().substr(3,length) + Date.now()).toString(36);
}

var protocol = function () {
    var obj = {};

    obj.testDataArry = [];

    obj.add = function () {
        $("#protocolFile").off("change").on("change", function () {
            $("#protocolFileBox").val($(this).val());
        });
        obj.submitBtn = Ladda.create(document.querySelector('#submit'));
        $('#uploadBack').off("shown.bs.modal").on("shown.bs.modal", function () {
            obj.submitContinueBtn = Ladda.create(document.querySelector('#submitContinue'));
        });
    };

    obj.submit = function () {
        $("#submit").off("click").on("click", function () {
            var valid = obj.protocolFileParsley.validate();
            if (valid) {
                obj.submitBtn.start();
                var formData = new FormData();
                formData.append("file", $("#protocolFile").get(0).files[0]);
                formData.append("type", $("#type").val());
                $.ajax({
                    url: 'file/upload_check',
                    type: 'POST',
                    enctype: 'multipart/form-data',
                    cache: false,
                    processData: false,
                    contentType: false,
                    data: formData,
                    success: function (data) {
                        obj.submitBtn.stop();
                        if (data.code == 0) {
                            alert(data.msg);
                        } else if (data.code == 2) {
                            $("#uploadBack .modal-title").html(data.msg);
                            $("#uploadBack").modal("show");
                            $("#uploadBackTable").bootstrapTable("load", data.list);
                        } else if (data.code == 1) {
                            alert(data.msg);
                        }
                    },
                    error: function () {
                        obj.submitBtn.stop();
                    }
                })
            }
        });

        $("#submitContinue").off("click").on("click", function () {
            var valid = obj.protocolFileParsley.validate();
            if (valid) {
                obj.submitContinueBtn.start();
                var formData = new FormData();
                formData.append("file", $("#protocolFile").get(0).files[0]);
                formData.append("type", $("#type").val());
                $.ajax({
                    url: 'file/upload',
                    type: 'POST',
                    enctype: 'multipart/form-data',
                    cache: false,
                    processData: false,
                    contentType: false,
                    data: formData,
                    success: function (data) {
                        obj.submitContinueBtn.stop();
                        if (data.code == 0) {
                            $("#uploadBack").modal("hide");
                        } else {
                            alert(data.msg);
                        }
                    },
                    error: function () {
                        obj.submitContinueBtn.stop();
                    }
                })
            }
        });
    };

    obj.testMessage = function () {
        $("#test").off("click").on("click", function () {
            var url = $("#url").val();
            var paramsData = $("#paramsList").bootstrapTable('getData');
            var data = {};
            $(paramsData).each(function(index,item){
                if(item.key){
                    data[item.key] = item.value
                }
            });
            $.ajax({
                url: url,
                type: $("#ajaxType").val(),
                dataType: 'json',
                data: data,
                success: function (data) {
                    $("#testResult").html(syntaxHighlight(data));
                    if (data.code==0) {
                        // $("#testResult").html(syntaxHighlight(data));
                        var errorDate = [];
                        if(data["error parameters"]){
                            $(data["error parameters"].split(",")).each(function (i, item) {
                                errorDate.push({
                                    errorNo: item
                                });
                                $("#parameter_" + item).prepend('<span class="errorNo">' + item + '</span>');
                            });
                        }
                        $("#errorList").bootstrapTable("load", errorDate);
                    }
                }
            })
        })
    };

    obj.tableInit = function () {

        // $("#uploadBackTable").bootstrapTable({
        //     // method:'get',
        //     cache: false,
        //     pagination: true,
        //     pageSize: 10,
        //     // pageNumber:1,
        //     sidePagination: 'client',
        //     queryParamsType: '',
        //     columns: [
        //         {
        //             field: 'index',
        //             title: 'No.',
        //             formatter: function (value, row, index) {
        //                 return index + 1;
        //             }
        //         },
        //         {
        //             field: 'protocol',
        //             title: 'Protocol'
        //         }
        //     ],
        //     onPostBody: function () {
        //     }
        // });

        // var scrollTopPx = $("#errorList").offset().top;
        // var windowHeight = $(window).height();
        // $("#errorList").bootstrapTable({
        //     // method:'get',
        //     cache: false,
        //     pagination: false,
        //     pageSize: 10,
        //     // pageNumber:1,
        //     // sidePagination : 'client',
        //     queryParamsType: '',
        //     height: windowHeight - scrollTopPx - 48,
        //     columns: [
        //         {
        //             field: 'errorNo',
        //             title: ' Error No.',
        //             formatter: function (value, row, index) {
        //                 return '<a class="scroTo" data-href="#parameter_' + value + '">' + value + '</a>';
        //             },
        //             events: {
        //                 'click .scroTo': function (event, value, row, index) {
        //                     var errorNoScrollTopPx = $("#parameter_" + value).offset().top;
        //                     var testResultScrollTopPx = $("#testResult").offset().top;
        //                     var testResultHerght = $("#testResult").height();
        //                     if (errorNoScrollTopPx > (testResultScrollTopPx + testResultHerght)) {
        //                         $("#testResult").animate({scrollTop: errorNoScrollTopPx - testResultScrollTopPx - 100}, 300);
        //                     }
        //                     ;
        //                 }
        //             }
        //         },
        //         // {
        //         //     field:'parameter',
        //         //     title:'Parameter'
        //         // },
        //         // {
        //         //     field:'value',
        //         //     title:'Value'
        //         // },
        //         // {
        //         //     field:'errorCode',
        //         //     title:'ErrorCode'
        //         // }
        //     ],
        //     onPostBody: function () {
        //     }
        // });


    };

    obj.parsleyForm = function () {
        obj.protocolFileParsley = $("#protocolFileBox").parsley();
    };

    obj.testPanelInit = function () {
        var scrollTopPx = $("#testResult").offset().top;
        var windowHeight = $(window).height();
        $("#testResult").height(windowHeight - scrollTopPx - 60);

    };

    obj.paramsInit = function(){
        obj.paramsDataInit = [{
            id:BuildID(3),
            key:null,
            value:null
        }];
        $("#paramsList").bootstrapTable({
            // method:'get',
            cache: false,
            pagination: false,
            data:obj.paramsDataInit,
            // pageSize: 10,
            // pageNumber:1,
            // sidePagination: 'client',
            // queryParamsType: '',
            uniqueId:'id',
            columns: [
                {
                    field: 'key',
                    title: 'KEY.',
                    width:400,
                    editable: {
                        mode:'inline',
                        clear:false,
                    }
                },
                {
                    field: 'value',
                    title: 'VALUE',
                    editable: {
                        mode:'inline',
                        clear:false,
                    }
                },
                {
                    field: '',
                    title: 'OPERATION',
                    width:100,
                    formatter:function(value,row,index,field){
                        return '<span class="operation delete">Delete</span>';
                    },
                    events:{
                        'click .delete':function(e, value, row, index){

                            $("#paramsList").bootstrapTable('removeByUniqueId',row.id)
                        }
                    }
                }
            ],
            onPostBody: function () {
            }
        });

        $("#addParam").on("click",function(){
            $("#paramsList").bootstrapTable("append",{
                id:BuildID(3),
                key:null,
                value:null
            })
        });
    };

    obj.init = function () {
        // obj.add();
        // obj.submit();
        // obj.parsleyForm();
        obj.testMessage();
        // obj.tableInit();
        obj.testPanelInit();
        obj.paramsInit();
    };

    return obj;
}();
$.fn.editableform.buttons = '<button type="submit" class="btn btn-primary btn-sm editable-submit">确定</button>'+
    '<button type="button" class="btn btn-default btn-sm editable-cancel">取消</button>';
$(function () {
    protocol.init();
});