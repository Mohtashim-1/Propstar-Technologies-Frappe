// Copyright (c) 2023, VFG and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Employee Attendance Logs"] = {
	"filters": [
		{
			fieldname:"from",
			label: __("From Date"),
			fieldtype: "Date",
			reqd:1,
			default: frappe.datetime.add_months(frappe.datetime.get_today(),-1),
		

		},
		{
			fieldname:"to",
			label: __("Date"),
			fieldtype: "Date",
			reqd:1,
			// default: frappe.datetime.get_today()-1
			// default: frappe.datetime.add_months(frappe.datetime.get_today(), -1),
			// default: frappe.datetime.get_today().now(),
			default:frappe.datetime.get_today(),
		},
		{
			fieldname:"depart",
			label: __("Department"),
			fieldtype: "Link",
			options: "Department",
			//default: 'Office Staff - F'
		},
		{
			fieldname:"employee",
			label: __("Employee"),
			fieldtype: "Link",
			options: "Employee",
			"get_query": function() {
				var dep = frappe.query_report.get_filter_value('depart');
				if(!dep){
					return {
						"doctype": "Employee",
						"filters": {
							
						}
					}
				}
				return {
					"doctype": "Employee",
					"filters": {
						"department": dep,
					}
				}
			}
			//default: 'Office Staff - F'
		}

	]
};
