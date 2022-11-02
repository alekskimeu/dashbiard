import React from "react";

import {
	GridComponent,
	ColumnsDirective,
	ColumnDirective,
	Page,
	Selection,
	Inject,
	Edit,
	Sort,
	Filter,
	Toolbar,
	Search,
} from "@syncfusion/ej2-react-grids";

import { Header } from "../components";

import { customersData, customersGrid } from "../data/dummy";

const Customers = () => {
	return (
		<div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
			<Header title="Customers" category="Page" />

			<GridComponent
				dataSource={customersData}
				allowPaging
				allowSorting
				toolbar={["Delete"]}
				editSettings={{ allowEditing: true, allowDeleting: true }}
				width="auto"
			>
				<ColumnsDirective>
					{customersGrid.map((item, index) => (
						<ColumnDirective key={index} {...item} />
					))}
				</ColumnsDirective>
				<Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
			</GridComponent>
		</div>
	);
};

export default Customers;
