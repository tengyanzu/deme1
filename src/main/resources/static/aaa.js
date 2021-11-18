function qxorder() {
    var selectedItems = getGridSelectedRowDatas();//获取“所有被选中行”的数据
    var idStr = "";
    var sid = $("input[name=sid]").val();

    if (selectedItems.length > 0) {
        var itemsLength = selectedItems.length;

        for (var i = 0; i < itemsLength; i++) {
            var id = selectedItems[i]._BINDID;//获取每一个被勾选行中的BINDID字段的值
            if (i < itemsLength - 1) {
                idStr = idStr + "'" + id + "',";//将获取到的所有bindid拼接成bindidStr,作为cmd的另一个参数,传至cmd
            } else {
                idStr = idStr + "'" + id + "'";
            }
        }
    }
    alert(idStr)
    awsui.ajax.request({
        type: "POST",
        url: "./jd?sid=" + sid + "&cmd=com.awspaas.user.apps.etl_data_etlTaskForOne",
        data: "dataid=DT000021&p=BINDID:" + idStr + "", //参数没有p可不写
        ok: function (r) {
            alert(r.data.data);
//r.data.data == true表示执行成功，r.data.data==false表示执行失败
//请求处理成功
        },
        err: function (r) {
//请求处理错误
        }
    });
}