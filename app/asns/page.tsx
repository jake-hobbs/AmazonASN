import { Asns, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Asns[]> {
	// Fetch data from your API here.
	return [
		{
			asn_no: "ASN-0001",
			ship_to_code: "STC-0001",
			date: "2021-09-01",
			no_of_boxes: 10,
			total_qty: 100,
			status: "incomplete",
		},
		{
			asn_no: "ASN-0002",
			ship_to_code: "STC-0001",
			date: "2021-09-01",
			no_of_boxes: 10,
			total_qty: 100,
			status: "incomplete",
		},
		{
			asn_no: "ASN-0003",
			ship_to_code: "STC-0001",
			date: "2021-09-01",
			no_of_boxes: 10,
			total_qty: 100,
			status: "incomplete",
		},
		{
			asn_no: "ASN-0004",
			ship_to_code: "STC-0001",
			date: "2021-09-01",
			no_of_boxes: 10,
			total_qty: 100,
			status: "incomplete",
		},
		{
			asn_no: "ASN-0005",
			ship_to_code: "STC-0001",
			date: "2021-09-01",
			no_of_boxes: 10,
			total_qty: 100,
			status: "incomplete",
		},
		{
			asn_no: "ASN-0006",
			ship_to_code: "STC-0001",
			date: "2021-09-01",
			no_of_boxes: 10,
			total_qty: 100,
			status: "incomplete",
		},
		{
			asn_no: "ASN-0007",
			ship_to_code: "STC-0001",
			date: "2021-09-01",
			no_of_boxes: 10,
			total_qty: 100,
			status: "incomplete",
		},
		{
			asn_no: "ASN-0008",
			ship_to_code: "STC-0001",
			date: "2021-09-01",
			no_of_boxes: 10,
			total_qty: 100,
			status: "incomplete",
		},
		{
			asn_no: "ASN-0009",
			ship_to_code: "STC-0001",
			date: "2021-09-01",
			no_of_boxes: 10,
			total_qty: 100,
			status: "incomplete",
		},
		{
			asn_no: "ASN-0010",
			ship_to_code: "STC-0001",
			date: "2021-09-01",
			no_of_boxes: 10,
			total_qty: 100,
			status: "incomplete",
		},
		{
			asn_no: "ASN-0011",
			ship_to_code: "STC-0001",
			date: "2021-09-01",
			no_of_boxes: 10,
			total_qty: 100,
			status: "incomplete",
		},
		{
			asn_no: "ASN-0012",
			ship_to_code: "STC-0001",
			date: "2021-09-01",
			no_of_boxes: 10,
			total_qty: 100,
			status: "incomplete",
		},
		{
			asn_no: "ASN-0013",
			ship_to_code: "STC-0001",
			date: "2021-09-01",
			no_of_boxes: 10,
			total_qty: 100,
			status: "incomplete",
		},
		{
			asn_no: "ASN-0014",
			ship_to_code: "STC-0001",
			date: "2021-09-01",
			no_of_boxes: 10,
			total_qty: 100,
			status: "incomplete",
		},
		{
			asn_no: "ASN-0015",
			ship_to_code: "STC-0001",
			date: "2021-09-01",
			no_of_boxes: 10,
			total_qty: 100,
			status: "incomplete",
		},
		// ...
	];
}

export default async function DemoPage() {
	const data = await getData();

	return (
		<div className="container mx-auto py-10">
			<DataTable columns={columns} data={data} />
		</div>
	);
}
