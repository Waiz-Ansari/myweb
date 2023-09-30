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
    var parameterIndex = -1;
    if ($("#parseType").val() == "1") {
        parameterIndex = 1;
    }
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
            var url = "resolution";
            if ($("#parseType").val() == "1") {
                url = "resolution/" + $("#deviceType").val();
            }
            if ($("#parseType").val() == "0"){
                if ($("#protocolType").val() == "QM"){
                    url = "/general/parse/QM";
                }
            }
            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'json',
                data: {
                    protocol: $("#message").val()
                },
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

        $("#uploadBackTable").bootstrapTable({
            // method:'get',
            cache: false,
            pagination: true,
            pageSize: 10,
            // pageNumber:1,
            sidePagination: 'client',
            queryParamsType: '',
            columns: [
                {
                    field: 'index',
                    title: 'No.',
                    formatter: function (value, row, index) {
                        return index + 1;
                    }
                },
                {
                    field: 'protocol',
                    title: 'Protocol'
                }
            ],
            onPostBody: function () {
            }
        });

        var scrollTopPx = $("#errorList").offset().top;
        var windowHeight = $(window).height();
        $("#errorList").bootstrapTable({
            // method:'get',
            cache: false,
            pagination: false,
            pageSize: 10,
            // pageNumber:1,
            // sidePagination : 'client',
            queryParamsType: '',
            height: windowHeight - scrollTopPx - 48,
            columns: [
                {
                    field: 'errorNo',
                    title: ' Error No.',
                    formatter: function (value, row, index) {
                        return '<a class="scroTo" data-href="#parameter_' + value + '">' + value + '</a>';
                    },
                    events: {
                        'click .scroTo': function (event, value, row, index) {
                            var errorNoScrollTopPx = $("#parameter_" + value).offset().top;
                            var testResultScrollTopPx = $("#testResult").offset().top;
                            var testResultHerght = $("#testResult").height();
                            if (errorNoScrollTopPx > (testResultScrollTopPx + testResultHerght)) {
                                $("#testResult").animate({scrollTop: errorNoScrollTopPx - testResultScrollTopPx - 100}, 300);
                            }
                            ;
                        }
                    }
                },
                // {
                //     field:'parameter',
                //     title:'Parameter'
                // },
                // {
                //     field:'value',
                //     title:'Value'
                // },
                // {
                //     field:'errorCode',
                //     title:'ErrorCode'
                // }
            ],
            onPostBody: function () {
            }
        });
    };

    obj.parsleyForm = function () {
        obj.protocolFileParsley = $("#protocolFileBox").parsley();
    };

    obj.testPanelInit = function () {
        var scrollTopPx = $("#testResult").offset().top;
        var windowHeight = $(window).height();
        $("#testResult").height(windowHeight - scrollTopPx - 60);

    };

    obj.init = function () {
        obj.add();
        obj.submit();
        obj.parsleyForm();
        obj.testMessage();
        obj.tableInit();
        obj.testPanelInit();
    };

    return obj;
}();

$(function () {

    if (DEPLOYMENTWAY == 0) {
        $("#fileInput").show();
    }
    protocol.init();
});

function changeDevice() {
    if ($("#parseType").val() == 1) {
        $("#deviceType").show();
        $("#protocolType").hide();
    }else{
        $("#protocolType").show();
        $("#deviceType").hide();
    }
}

function trim() {
    var str = $("#message").val();
    $("#message").val(str.replace(/\s*/g,""));
}