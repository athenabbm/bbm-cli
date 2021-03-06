/*
  权限对应的描述
*/
const funcTree = {
  "250":"Dashboard",
      "250.100":"Outbound",
  "010": "Configuration",
      "010.010": "Code Management",
      "010.020":"Process Rule",
          "010.020.100":"Rule List",
              "010.020.100.100": "View",
              "010.020.100.200": "New",
              "010.020.100.300": "Edit",
              "010.020.100.400": "Delete",
          "010.020.200": "Detail",
      "010.030":"Task Type",
          "010.030.100":"Task Type List",
              "010.030.100.100": "View",
              "010.030.100.200": "New",
              "010.030.100.300": "Edit",
          "010.030.200":"Task Type Detail",
      "010.040":"Seq Rule",
          "010.040.100":"List",
              "010.040.100.100": "View",
              "010.040.100.200": "New",
              "010.040.100.300": "Edit",
          "010.040.200":"Detail",
      "010.050":"Param Configuration",
          "010.050.100":"Warehouse",
              "010.050.100.100":"New",
              "010.050.100.200":"Edit",
              "010.050.100.300":"Delete",
              "010.050.100.400":"View",
          "010.050.200":"Owner",
              "010.050.200.100":"New",
              "010.050.200.200":"Edit",
              "010.050.200.300":"Delete",
              "010.050.200.400":"View",
          "010.050.300":"System",
              "010.050.300.100":"New",
              "010.050.300.200":"Edit",
              "010.050.300.300":"Delete",
              "010.050.300.400":"View",
      "010.060": "Order Type",
          "010.060.100": "Summary",
              "010.060.100.100": "New",
              "010.060.100.110": "Edit",
              "010.060.100.120": "View",
          "010.060.110": "Detail",
      "010.070": "Template Configuration",
          "010.070.100": "Template",
              "010.070.100.100": "Upload",
              "010.070.100.110": "Download",
              "010.070.100.120": "Change Status",
              "010.070.100.130": "Delete",
          "010.070.110": "Configuration",
              "010.070.110.100": "Add",
              "010.070.110.110": "Change Default Flag",
              "010.070.110.120": "Delete",
        "010.080":"Barcode Decoding",
            "010.080.100":"Barcode Decoding List",
              "010.080.100.100": "View",
              "010.080.100.200": "New",
              "010.080.100.300": "Edit",
            "010.080.200":"Barcode Decoding Detail",
   "100": "User Management",
      "100.100": "User and Role",
          "100.100.100": "User List",
              "100.100.100.100": "View",
              "100.100.100.200": "New",
              "100.100.100.300": "Edit",
              "100.100.100.400": "Deactive",
          "100.100.200": "Detail",
              "100.100.200.100": "Save",
          "100.100.300": "Team",
          "100.100.400": "Role",
          "100.100.500": "Permission",
      "100.200": "Team Setup",
          "100.200.100": "Team List",
              "100.200.100.100": "New",
              "100.200.100.200": "Edit",
              "100.200.100.300": "Delete",
              "100.200.100.400": "View",
          "100.200.200": "Detail",
          "100.200.300": "Team Users",
          "100.200.400": "Role",
          "100.200.500": "Permission",
      "100.300": "Group Setup",
          "100.300.100": "Group List",
              "100.300.100.100": "New",
              "100.300.100.200": "Edit",
              "100.300.100.300": "Delete",
              "100.300.100.400": "View",
          "100.300.200": "Group Detail",
          "100.300.300": "Role List",
              "100.300.300.100": "New",
              "100.300.300.200": "Edit",
              "100.300.300.300": "Delete",
              "100.300.300.400": "View Group",
              "100.300.300.500": "View",
          "100.300.400": "Role Detail",
      "100.400": "Task Permission",
          "100.400.100": "Operator",
              "100.400.100.100": "New",
              "100.400.100.200": "Edit",
              "100.400.100.300": "Delete",
              "100.400.100.400": "View",
              "100.400.100.500": "Activate",
              "100.400.100.600": "Deactive",
          "100.400.200": "Activity Area",
              "100.400.200.100": "New",
          "100.400.300": "Task",
              "100.400.300.100": "New",
              "100.400.300.200": "Edit",
              "100.400.300.300": "View",
          "100.400.400": "Operator of Task",
  "200": "Master Data",
      "200.100": "Warehouse",
          "200.100.100": "Warehouse List",
              "200.100.100.100": "New",
              "200.100.100.200": "Edit",
              "200.100.100.300": "View",
              "200.100.100.400": "Deactive",
          "200.100.200": "Detail",
          "200.100.300": "Configuration",
              "200.100.300.100": "Edit",
          "200.100.400": "Owners",
              "200.100.400.100": "Edit",
          "200.100.500": "Carriers",
              "200.100.500.100": "Add",
              "200.100.500.200": "Delete",
      "200.200": "Owner",
          "200.200.100": "Owner List",
              "200.200.100.100": "New",
              "200.200.100.200": "Edit",
              "200.200.100.300": "View",
              "200.200.100.400": "Deactive",
          "200.200.200": "Detail",
          "200.200.300": "Warehouses",
              "200.200.300.100": "Edit",
          "200.200.400": "Item Batch",
              "200.200.400.100": "Edit",
          "200.200.500": "Configuration",
              "200.200.500.100": "Edit",
      "200.300": "Location",
          "200.300.100": "Location List",
              "200.300.100.100": "New",
              "200.300.100.200": "Edit",
              "200.300.100.300": "View",
              "200.300.100.400": "Deactive",
              "200.300.100.500": "Import",
              "200.300.100.600": "Update",
              "200.300.100.700": "Download",
          "200.300.200": "Location Detail",
          "200.300.300": "Zone List",
              "200.300.300.100": "New",
              "200.300.300.200": "Edit",
              "200.300.300.300": "View",
              "200.300.300.400": "Deactive",
              "200.300.300.500": "Download",
          "200.300.400": "Zone Detail",
      "200.400": "Item",
          "200.400.100": "Item List",
              "200.400.100.100": "New",
              "200.400.100.200": "Edit",
              "200.400.100.300": "View",
              "200.400.100.400": "Deactive",
              "200.400.100.500": "Import",
              "200.400.100.600": "Update",
              "200.400.100.700": "Download",
          "200.400.200": "Detail",
          "200.400.300": "Packaging",
              "200.400.300.200": "Edit",
          "200.400.400": "Barcode",
              "200.400.400.200": "Edit",
          "200.400.500": "Config",
              "200.400.500.100": "Edit",
          "200.400.600": "Log",
      "200.410":"Item Category",
          "200.410.100":"Item Category List",
              "200.410.100.100":"New",
              "200.410.100.200":"Edit",
              "200.410.100.300":"View",
          "200.410.110":"Detail",
      "200.420":"Add. Activity",
          "200.420.100":"Activity List",
              "200.420.100.100":"New",
              "200.420.100.200":"Edit",
              "200.420.100.300":"View",
          "200.420.110":"Detail",
      "200.430":" Owner Add. Activity",
          "200.430.100":"Additional Activity List",
              "200.430.100.100":"New",
              "200.430.100.200":"Edit",
              "200.430.100.300":"View",
          "200.430.110":"Detail",
      "200.440":" Carrier",
          "200.440.100":"Carrier List",
              "200.440.100.100":"New",
              "200.440.100.200":"Edit",
              "200.440.100.300":"View",
              "200.440.100.400": "Deactive",
          "200.440.110":"Detail",
      "200.450":"Packing Material",
          "200.450.100":"Packing Material List",
              "200.450.100.100":"New",
              "200.450.100.200":"Edit",
              "200.450.100.300":"View",
              "200.450.100.400": "Deactive",
          "200.450.110":"Detail",
  "210": "Inbound",
      "210.100": "Receipt",
          "210.100.100": "Summary",
              "210.100.100.110": "New",
              "210.100.100.120": "Download",
              "210.100.100.130": "View",
              "210.100.100.140": "Edit",
          "210.100.110": "Detail",
              "210.100.110.100": "Arrival",
              "210.100.110.110": "Inspect",
              "210.100.110.120": "Receive",
              "210.100.110.130": "Close",
              "210.100.110.140": "Put away",
              "210.100.110.150": "Adjust",
              "210.100.110.160": "Delete",
              "210.100.110.170": "Print Receipt Ticket",
          "210.100.120": "Lines",
              "210.100.120.110": "New",
              "210.100.120.120": "Download",
              "210.100.120.130": "Edit",
              "210.100.120.140": "Delete",
          "210.100.130": "Stock",
              "210.100.130.110": "New",
              "210.100.130.120": "Download",
              "210.100.130.130": "Edit",
              "210.100.130.140": "Print",
              "210.100.130.150": "Delete",
              "210.100.130.160": "Import",
              "210.100.130.170": "Undo Receiving",
          "210.100.140": "Task",
              "210.100.140.100": "View",
              "210.100.140.110": "Release",
              "210.100.140.120": "Close",
              "210.100.140.130": "Action",
              "210.100.140.140": "Download",
              "210.100.140.150": "Relocate",
          "210.100.150": "Handling",
              "210.100.150.100": "Edit",
      "210.110": "Inbound Inspect",
              "210.110.100.100": "Confirm",
              "210.110.100.110": "Edit",
              "210.110.100.120": "Delete",
              "210.110.100.130": "Print",
              "210.110.100.140": "Receive",
      "210.120": "Putaway",
              "210.120.100.110": "Download",
              "210.120.100.120": "Putaway",
              "210.120.100.130": "Upload",
              "210.120.100.140": "Print",
      "210.130": "Purchase Order",
           "210.130.100": "Summary",
                "210.130.100.110": "Create Receipt",
           "210.130.110": "Detail",
                "210.130.110.110": "Edit",
                "210.130.110.120": "Close",
           "210.130.120": "Lines",
           "210.130.130": "Receipt",
  "220": "Storage",
      "220.100": "Stock Inquiry",
          "220.100.100": "Stock By SKU",
              "220.100.100.100": "Search",
              "220.100.100.110": "Download",
          "220.100.110": "Stock By Location",
              "220.100.110.100": "Search",
              "220.100.110.110": "Download",
          "220.100.120": "Stock Detail",
              "220.100.120.100": "Search",
              "220.100.120.110": "Download",
      "220.200":"Task Management",
          "220.200.100": "Task Summary",
          "220.200.200": "Task List",
               "220.200.200.100":"Assigin",
               "220.200.200.200":"Deassigin",
               "220.200.200.300":"Hold",
               "220.200.200.400":"Unhold",
               "220.200.200.500":"Close",
               "220.200.200.600":"Split",
      "220.201":"Task Movement",
          "220.201.100": "Summary",
      "220.210": "Stock Move",
          "220.210.100": "Movement List",
          "220.210.110": "Move LPN",
          "220.210.120": "Move SKU",
          "220.210.130": "Move Loc",
      "220.212": "Physical Inventory",
          "220.212.100": "Summary",
               "220.212.100.100": "New",
               "220.212.100.200": "Delete",
               "220.212.100.300": "Edit",
               "220.212.100.400": "View",
           "220.212.200": "Detail",
               "220.212.200.100": "New",
               "220.212.200.200": "Delete",
               "220.212.200.300": "Edit",
               "220.212.200.400": "View",
           "220.212.300": "Lines",
           "220.212.400": "Task",
           "220.212.500": "Counting",
      "220.211": "S/N Management",
          "220.211.100": "Summary",
                "220.211.100.100": "Download",
          "220.211.110": "Entry",
      "220.220": "Stock Adjust",
          "220.220.100": "Summary",
              "220.220.100.100": "New",
              "220.220.100.110": "Edit",
              "220.220.100.120": "View",
              "220.220.100.130": "Delete",
              "220.220.100.140": "Initialize",
          "220.220.110": "Detail",
              "220.220.110.100": "Confirm",
          "220.220.120": "Add Inv",
          "220.220.130": "Reduce Inv",
          "220.220.140": "Variance Inv",
      "220.230": "Log",
          "220.230.100": "Doc Log",
          "220.230.110": "Stock Log",
      "220.231": "Replenishment Report",
          "220.231.100": "Summary",
      "220.240": "Anniversary Date Report",
          "220.240.100": "Summary",
              "220.240.100.100": "Download",
      "220.250": "Item Activity Report",
          "220.250.100": "Summary",
      "220.260": "Change Attributes",
          "220.260.100": "Summary",
          "220.260.110": "Change Attributes",
      "220.270": "Cycle Count Report",
          "220.270.100": "Summary",
      "220.280": "Receipt Transaction Report",
          "220.280.100": "Summary",
      "220.290": "Order Transaction Report",
          "220.290.100": "Summary",

  "230": "Outbound",
      "230.100": "Order",
          "230.100.100": "Summary",
              "230.100.100.100":"New",
              "230.100.100.110":"Edit",
              "230.100.100.120":"View",
              "230.100.100.130":"Create Wave",
              "230.100.100.140":"Add to Wave",
              "230.100.100.160":"Update",
          "230.100.200": "Detail",
              "230.100.200.100":"Delete",
              "230.100.200.110":"Ship",
              "230.100.200.120":"Close",
              "230.100.200.130":"Change Carrier",
              "230.100.200.140": "Print Packing List",
              "230.100.200.150": "Adjust",
              "230.100.200.160": "Review",
              "230.400.100.180":"View Packing Material List",
              "230.400.100.190":"Print Packing Material List",
          "230.100.300": "Lines",
              "230.100.300.100":"New",
              "230.100.300.110":"Edit",
              "230.100.300.120":"Delete",
              "230.100.300.130": "Allocation",
          "230.100.400": "Stock",
          "230.100.500": "Tasks",
              "230.100.500.100": "view",
          "230.100.600": "Parcel",
              "230.100.600.100":"Edit Tracking#",
          "230.100.700": "Handling",
              "230.100.700.100":"Edit",
          "230.100.800":"Log",
          "230.100.810": "Attachment",
              "230.100.810.100":"Edit",
      "230.110": "Order Pool",
          "230.110.100": "Order Pool",
              "230.110.100.100": "View",
              "230.110.100.110": "Create Wave By Class",
              "230.110.100.120": "Merge To Create a Wave",
          "230.110.200": "Configuration",
              "230.110.200.100": "View",
              "230.110.200.110": "New",
              "230.110.200.120": "Edit",
              "230.110.200.130": "Delete",
      "230.200": "Wave",
          "230.200.100": "Summary",
              "230.200.100.100": "View",
              "230.200.100.110": "Edit",
              "230.200.100.120": "Allocate",
              "230.200.100.130": "Unallocate",
              "230.200.100.140": "Release",
              "230.200.100.150": "Search",
              "230.200.100.160": "Download",
              "230.200.100.170": "Print Pick Ticket",
          "230.200.110": "Detail",
              "230.200.110.100":"Delete",
              "230.200.110.300":"Print Sort Paper",
          "230.200.120": "Order",
              "230.200.120.100":"Remove",
          "230.200.130": "Allocation",

      "230.300": "Handheld-picking",
      "230.400": "Pack",
              "230.400.100.100":"Confirm",
              "230.400.100.110":"Print Shipping Label",
              "230.400.100.120":"Delete",
              "230.400.100.130":"View",
              "230.400.100.140":"Print Battery Label",
              "230.400.100.150":"Print Heavy Label",
              "230.400.100.160":"Print Error Label",
              "230.400.100.170":"Record Expection",
      "230.410": "Ship",
              "230.410.100.100":"Search",
              "230.410.100.110":"Ship",
      "230.420": "Outbound Inspect",
                "230.420.100.100":"Confirm",
                "230.420.100.110":"Eidt",
      "230.500": "Package Diff Log",
      "230.430": "Picking Confirm",
      "230.440": "Load",
            "230.440.100": "Summary",
                "230.440.100.100": "Edit",
                "230.440.100.110": "View",
            "230.440.110": "Detail",
                "230.440.110.100": "Reprint Package Report",
            "230.440.120": "Package",
      "230.450": "Pick Group",
            "230.450.100": "Summary",
                "230.450.100.100": "Gen Sorting Task",
                "230.450.100.110": "View Bin",
                "230.450.100.120": "Print",
            "230.450.110": "Pick Detail",
            "230.450.120": "Task",
      "230.460": "Picking Exception",
            "230.460.100": "Summary",
                "230.460.100.100": "View Picked Stock",
                "230.460.100.200": "Print",
                "230.460.100.300": "Close",
 "240": "Other",
      "240.100": "API Feedback",
            "240.100.100":"DOC",
                "240.100.100.100":"Resend",
                "240.100.100.200":"Close",
            "240.100.110":"SKU",
                "240.100.110.100":"Resend",
      "240.100_STATIC": "Tool",//不受权限管理，始终显示的菜单，后缀加_STATIC来辨别，
};

export default funcTree;
