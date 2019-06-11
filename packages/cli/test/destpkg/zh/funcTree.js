/*
  权限对应的描述
*/
const funcTree = {
  "250":"看板",
  "250.100":"出库单看板",
  "010": "配置",
      "010.010": "代码管理",
      "010.020":"流程规则",
          "010.020.100":"规则列表",
              "010.020.100.100": "详情",
              "010.020.100.200": "新增",
              "010.020.100.300": "编辑",
              "010.020.100.400": "删除",
          "010.020.200": "规则详情",
      "010.030":"任务类型",
          "010.030.100":"任务类型列表",
              "010.030.100.100": "详情",
              "010.030.100.200": "新增",
              "010.030.100.300": "编辑",
          "010.030.200":"列表详情",
      "010.040":"取号规则",
          "010.040.100":"列表",
              "010.040.100.100": "详情",
              "010.040.100.200": "新增",
              "010.040.100.300": "编辑",
          "010.040.200":"详情",
      "010.050":"参数配置",
          "010.050.100":"仓库",
              "010.050.100.100":"新增",
              "010.050.100.200":"编辑",
              "010.050.100.300":"删除",
              "010.050.100.400":"详情",
          "010.050.200":"客户",
              "010.050.200.100":"新增",
              "010.050.200.200":"编辑",
              "010.050.200.300":"删除",
              "010.050.200.400":"详情",
          "010.050.300":"域",
              "010.050.300.100":"新增",
              "010.050.300.200":"编辑",
              "010.050.300.300":"删除",
              "010.050.300.400":"详情",
      "010.060": "订单类型",
          "010.060.100": "列表",
              "010.060.100.100": "新增",
              "010.060.100.110": "编辑",
              "010.060.100.120": "详情",
          "010.060.110": "详情",
      "010.070": "模板配置",
          "010.070.100": "模板列表",
              "010.070.100.100": "上传",
              "010.070.100.110": "下载",
              "010.070.100.120": "修改状态",
              "010.070.100.130": "删除",
          "010.070.110": "配置列表",
              "010.070.110.100": "新增",
              "010.070.110.110": "修改默认标识",
              "010.070.110.120": "删除",
      "010.080":"条码解析",
          "010.080.100":"列表",
              "010.080.100.100": "新增",
              "010.080.100.200": "编辑",
              "010.080.100.300": "详情",
          "010.080.200":"详情",
  "100": "用户管理",
      "100.100": "用户和角色",
          "100.100.100": "用户列表",
              "100.100.100.100": "详情",
              "100.100.100.200": "新增",
              "100.100.100.300": "编辑",
              "100.100.100.400": "停用",
          "100.100.200": "用户信息",
              "100.100.200.100": "提交",
          "100.100.300": "用户组",
          "100.100.400": "用户角色",
          "100.100.500": "访问权限",
      "100.200": "权限组",
          "100.200.100": "列表",
              "100.200.100.100": "新增",
              "100.200.100.200": "编辑",
              "100.200.100.300": "删除",
              "100.200.100.400": "详情",
          "100.200.200": "详情",
          "100.200.300": "用户和权限",
          "100.200.400": "角色",
          "100.200.500": "权限",
      "100.300": "用户组",
          "100.300.100": "用户组列表",
              "100.300.100.100": "新增",
              "100.300.100.200": "编辑",
              "100.300.100.300": "删除",
              "100.300.100.400": "详情",
          "100.300.200": "用户组信息",
          "100.300.300": "角色列表",
              "100.300.300.100": "新增",
              "100.300.300.200": "编辑",
              "100.300.300.300": "删除",
              "100.300.300.400": "查看用户组",
              "100.300.300.500": "详情",
          "100.300.400": "角色详情",
      "100.400": "任务权限",
          "100.400.100": "操作员",
              "100.400.100.100": "新增",
              "100.400.100.200": "编辑",
              "100.400.100.300": "删除",
              "100.400.100.400": "查看",
              "100.400.100.500": "启用",
              "100.400.100.600": "停用",
          "100.400.200": "活动区域",
              "100.400.200.100": "新增",
          "100.400.300": "任务",
              "100.400.300.100": "新增",
              "100.400.300.200": "编辑",
              "100.400.300.300": "查看",
          "100.400.400": "任务的操作员",
  "200": "数据管理",
      "200.100": "仓库",
          "200.100.100": "仓库列表",
              "200.100.100.100": "新增",
              "200.100.100.200": "编辑",
              "200.100.100.300": "详情",
              "200.100.100.400": "停用",
          "200.100.200": "仓库详情",
          "200.100.300": "配置",
              "200.100.300.100": "编辑",
          "200.100.400": "客户",
              "200.100.400.100": "编辑",
          "200.100.500": "承运商",
              "200.100.500.100": "增加",
              "200.100.500.200": "删除",
      "200.200": "客户",
          "200.200.100": "客户列表",
              "200.200.100.100": "新增",
              "200.200.100.200": "编辑",
              "200.200.100.300": "详情",
              "200.200.100.400": "停用",
          "200.200.200": "客户详情",
          "200.200.300": "仓库",
              "200.200.300.100": "编辑",
          "200.200.400": "货物批次",
              "200.200.400.100": "编辑",
          "200.200.500": "配置",
              "200.200.500.100": "编辑",
      "200.300": "库位",
          "200.300.100": "库位列表",
              "200.300.100.100": "新增",
              "200.300.100.200": "编辑",
              "200.300.100.300": "详情",
              "200.300.100.400": "停用",
              "200.300.100.500": "导入",
              "200.300.100.600": "更新",
              "200.300.100.700": "下载",
          "200.300.200": "库位详情",
          "200.300.300": "库区列表",
              "200.300.300.100": "新增",
              "200.300.300.200": "编辑",
              "200.300.300.300": "详情",
              "200.300.300.400": "停用",
              "200.300.300.500": "下载",
          "200.300.400": "库区详情",
      "200.400": "商品",
          "200.400.100": "商品列表",
              "200.400.100.100": "新增",
              "200.400.100.200": "编辑",
              "200.400.100.300": "详情",
              "200.400.100.400": "停用",
              "200.400.100.500": "导入",
              "200.400.100.600": "更新",
              "200.400.100.700": "下载",
          "200.400.200": "详情",
          "200.400.300": "包装",
              "200.400.300.200": "编辑",
          "200.400.400": "条码",
              "200.400.400.200": "编辑",
          "200.400.500": "配置",
              "200.400.500.100": "编辑",
          "200.400.600": "日志",
      "200.410":"货物类别",
          "200.410.100":"货物类别列表",
              "200.410.100.100":"新增",
              "200.410.100.200":"编辑",
              "200.410.100.300":"详情",
          "200.410.110":"详情",
      "200.420":"附加活动",
          "200.420.100":"活动列表",
              "200.420.100.100":"新增",
              "200.420.100.200":"编辑",
              "200.420.100.300":"详情",
          "200.420.110":"详情",
      "200.430":"货主附加活动",
          "200.430.100":"附加活动列表",
              "200.430.100.100":"新增",
              "200.430.100.200":"编辑",
              "200.430.100.300":"详情",
          "200.430.110":"详情",
      "200.440":"承运商",
          "200.440.100":"承运商列表",
              "200.440.100.100":"新增",
              "200.440.100.200":"编辑",
              "200.440.100.300":"详情",
              "200.440.100.400": "停用",
          "200.440.110":"详情",
      "200.450":"包装材料",
          "200.450.100":"包装材料列表",
              "200.450.100.100":"新增",
              "200.450.100.200":"编辑",
              "200.450.100.300":"详情",
              "200.450.100.400": "停用",
          "200.450.110":"详情",
  "210": "入库",
      "210.100": "收货",
          "210.100.100": "入库单列表",
              "210.100.100.110": "新增",
              "210.100.100.120": "下载",
              "210.100.100.130": "查看",
              "210.100.100.140": "编辑",
          "210.100.110": "详情",
              "210.100.110.100": "到货",
              "210.100.110.110": "验货",
              "210.100.110.120": "收货",
              "210.100.110.130": "关闭",
              "210.100.110.140": "上架",
              "210.100.110.150": "调整",
              "210.100.110.160": "删除",
              "210.100.110.170": "打印入库单",
          "210.100.120": "明细行",
              "210.100.120.110": "新增",
              "210.100.120.120": "下载",
              "210.100.120.130": "编辑",
              "210.100.120.140": "删除",
          "210.100.130": "库存",
              "210.100.130.110": "新增",
              "210.100.130.120": "下载",
              "210.100.130.130": "编辑",
              "210.100.130.140": "打印",
              "210.100.130.150": "删除",
              "210.100.130.160": "上传",
              "210.100.130.170": "撤销收货",
          "210.100.140": "任务",
              "210.100.140.100": "详情",
              "210.100.140.110": "释放",
              "210.100.140.120": "关闭",
              "210.100.140.130": "执行",
              "210.100.140.140": "下载",
              "210.100.140.150": "推荐库位",
          "210.100.150": "处理",
              "210.100.150.100": "编辑",
      "210.110": "入库验货",
              "210.110.100.100": "确认",
              "210.110.100.110": "编辑",
              "210.110.100.120": "删除",
              "210.110.100.130": "打印",
              "210.110.100.140": "收货",
      "210.120": "上架",
              "210.120.100.110": "下载",
              "210.120.100.120": "上架",
              "210.120.100.130": "上传",
              "210.120.100.140": "打印",
      "210.130": "采购订单",
           "210.130.100": "列表",
                "210.130.100.110": "创建收货单",
           "210.130.110": "详情",
                "210.130.110.110": "编辑",
                "210.130.110.120": "关闭",
           "210.130.120": "明细",
           "210.130.130": "收货单",
  "220": "库存",
      "220.100": "库存查询",
          "220.100.100": "SKU库存",
              "220.100.100.100": "查询",
              "220.100.100.110": "下载",
          "220.100.110": "库位库存",
              "220.100.110.100": "查询",
              "220.100.110.110": "下载",
          "220.100.120": "明细库存",
              "220.100.120.100": "查询",
              "220.100.120.110": "下载",
      "220.201":"移动记录",
          "220.201.100": "列表",
      "220.200":"任务管理",
          "220.200.100": "任务概览",
          "220.200.200": "任务列表",
               "220.200.200.100":"分配",
               "220.200.200.200":"撤销",
               "220.200.200.300":"冻结",
               "220.200.200.400":"解冻",
               "220.200.200.500":"关闭",
               "220.200.200.600":"分离",
      "220.210": "移库",
          "220.210.100": "移库记录",
          "220.210.110": "移动LPN",
          "220.210.120": "移动SKU",
          "220.210.130": "移动库位",
      "220.212": "实物盘点",
          "220.212.100": "列表",
              "220.212.100.100": "新增",
              "220.212.100.200": "删除",
              "220.212.100.300": "编辑",
              "220.212.100.400": "查看",
          "220.212.200": "详情",
              "220.212.200.100": "新增",
              "220.212.200.200": "删除",
              "220.212.200.300": "编辑",
              "220.212.200.400": "查看",
          "220.212.300": "明细",
          "220.212.400": "任务",
          "220.212.500": "盘点",
      "220.211": "序列号管理",
          "220.211.100": "列表",
               "220.211.100.100": "下载",
          "220.211.110": "录入",
      "220.220": "库存调整",
          "220.220.100": "调整单列表",
              "220.220.100.100": "新增",
              "220.220.100.110": "编辑",
              "220.220.100.120": "详情",
              "220.220.100.130": "删除",
              "220.220.100.140": "库存初始化",
          "220.220.110": "详情",
              "220.220.110.100": "确认",
          "220.220.120": "调增",
          "220.220.130": "调减",
          "220.220.140": "差异库存",
      "220.230": "日志",
          "220.230.100": "单据日志",
          "220.230.110": "库存日志",
      "220.231": "补货报表",
          "220.231.100": "列表",
      "220.240": "每日库存报表",
          "220.240.100": "列表",
              "220.240.100.100": "下载",
      "220.250": "进出存报表",
          "220.250.100": "列表",
      "220.260": "转移批次属性",
          "220.260.100": "调整列表",
          "220.260.110": "批次转移",
      "220.270": "盘点报表",
          "220.270.100": "列表",
      "220.280": "入库单综合报表",
          "220.280.100": "列表",
      "220.290": "订单综合报表",
          "220.290.100": "列表",

  "230": "出库",
      "230.100": "订单",
          "230.100.100": "订单列表",
              "230.100.100.100":"新增",
              "230.100.100.110":"编辑",
              "230.100.100.120":"详情",
              "230.100.100.130":"创建波次",
              "230.100.100.140":"添加到波次",
              "230.100.100.160":"更新",
          "230.100.200": "详情",
              "230.100.200.100":"删除",
              "230.100.200.110":"发货",
              "230.100.200.120":"关闭",
              "230.100.200.130":"修改承运商",
              "230.100.200.140": "打印装箱单",
              "230.100.200.150": "调整",
              "230.100.200.160": "审核",
          "230.100.300": "明细",
              "230.100.300.100":"新增",
              "230.100.300.110":"编辑",
              "230.100.300.120":"删除",
              "230.100.300.130": "分配",
          "230.100.400": "库存",
          "230.100.500": "任务",
              "230.100.500.100": "详情",
          "230.100.600": "包裹",
              "230.100.600.100":"补录运单号",
          "230.100.700": "处理",
              "230.100.700.100":"编辑",
          "230.100.800":"日志",
          "230.100.810": "附件",
              "230.100.810.100":"编辑",
      "230.110": "订单池",
        "230.110.100": "订单池",
	        "230.110.100.100": "查看",
	        "230.110.100.110": "分类创建波次",
	        "230.110.100.120": "合并创建波次",
	      "230.110.200": "配置",
	        "230.110.200.100": "查看",
	        "230.110.200.110": "新增",
	        "230.110.200.120": "编辑",
	        "230.110.200.130": "删除",
      "230.200": "波次",
          "230.200.100": "波次列表",
              "230.200.100.100": "查看",
              "230.200.100.110": "编辑",
              "230.200.100.120": "分配",
              "230.200.100.130": "未分配",
              "230.200.100.140": "释放",
              "230.200.100.150": "查询",
              "230.200.100.160": "下载",
              "230.200.100.170": "打印拣货单",
          "230.200.110": "详情",
              "230.200.110.100":"删除",
              "230.200.110.300":"打印分拣单",
          "230.200.120": "订单",
              "230.200.120.100":"删除",
          "230.200.130": "拣货库存",
      "230.300": "手持拣货",
      "230.400": "包装",
              "230.400.100.100":"确认",
              "230.400.100.110":"打印",
              "230.400.100.120":"删除",
              "230.400.100.130":"查看",
              "230.400.100.140":"打印电池标签",
              "230.400.100.150":"打印超重标签",
              "230.400.100.160":"打印失败标签",
              "230.400.100.170":"异常登记",
              "230.400.100.180":"查看包装材料清单",
              "230.400.100.190":"打印包装材料清单",
      "230.410": "发运",
              "230.410.100.100":"查询",
              "230.410.100.110":"发运",
      "230.420": "出库验货",
                "230.420.100.100":"确认",
                "230.420.100.110":"编辑",
      "230.430": "拣货确认",
      "230.440": "装运",
            "230.440.100": "装运列表",
                "230.440.100.100": "编辑",
                "230.440.100.110": "详情",
            "230.440.110": "详情",
                "230.440.110.100": "重打包裹单",
            "230.440.120": "包裹",
      "230.500": "包裹差异日志",
      "230.450": "拣货分组",
            "230.450.100": "列表",
               "230.450.100.100": "生成拣货任务",
               "230.450.100.110": "查看分拣格",
               "230.450.100.120": "打印",
            "230.450.110": "拣货详情",
            "230.450.120": "任务",
      "230.460": "拣货异常",
            "230.460.100": "列表",
                "230.460.100.100": "查看已拣库存",
                "230.460.100.200": "打印",
                "230.460.100.300": "关闭",
  "240": "其他",
      "240.100": "反馈信息",
            "240.100.100":"DOC",
                "240.100.100.100":"重发",
                "240.100.100.200":"关闭",
            "240.100.110":"SKU",
                "240.100.110.100":"重发",
      "240.100_STATIC": "工具",

};

export default funcTree;