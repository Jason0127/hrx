import React from 'react';
import {Paper, Table, TableHead, TableRow, TableCell, TableBody} from '@material-ui/core'

const Shipment =()=>{

    const [shipmentData, setShipment] = React.useState([
        {
            id: 1,
            status: 'pending',
            trackOrder: 'Awaiting Tracking',
            shipTo: 'New York, NY',
            orderNo: 39123,
            orderDate: 'Jun. 05, 2019 10:04 AM',
            pedigree: 'pending',
            shipDate: '',
            shipVia: 'Fedex'
        },
        {
            id: 2,
            status: 'pending',
            trackOrder: 'Awaiting Tracking',
            shipTo: 'New York, NY',
            orderNo: 39123,
            orderDate: 'Jun. 05, 2019 10:04 AM',
            pedigree: 'pending',
            shipDate: '',
            shipVia: 'Fedex'
        },
        {
            id: 3,
            status: 'pending',
            trackOrder: 'Awaiting Tracking',
            shipTo: 'New York, NY',
            orderNo: 39123,
            orderDate: 'Jun. 05, 2019 10:04 AM',
            pedigree: 'pending',
            shipDate: '',
            shipVia: 'Fedex'
        },
        {
            id: 4,
            status: 'pending',
            trackOrder: 'Awaiting Tracking',
            shipTo: 'New York, NY',
            orderNo: 39123,
            orderDate: 'Jun. 05, 2019 10:04 AM',
            pedigree: 'pending',
            shipDate: '',
            shipVia: 'Fedex'
        }
    ])

    const loadShipmentInfo = (items)=>{
        return(
            items.length >= 1 ?
                items.map((item)=>{
                    return(
                        <TableRow key={item.id}>
                            <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>{item.status}</TableCell>
                            <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>{item.trackOrder}</TableCell>
                            <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>{item.shipTo}</TableCell>
                            <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>{item.orderNo}</TableCell>
                            <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>{item.orderDate}</TableCell>
                            <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>{item.pedigree}</TableCell>
                            <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>{item.shipDate}</TableCell>
                            <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>{item.shipVia}</TableCell>
                        </TableRow>
                    )
                })
            :
            <TableRow>
                <TableCell colSpan={8} padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>No Data</TableCell>
            </TableRow>
        )
    }

    return(
        <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>Status</TableCell>
                        <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>Track Order</TableCell>
                        <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>Ship To</TableCell>
                        <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>Order#</TableCell>
                        <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>Order Date</TableCell>
                        <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>
                            DSCSA Track & Trace Pedigree
                        </TableCell>
                        <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>Ship Date</TableCell>
                        <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>Ship Via</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {loadShipmentInfo(shipmentData)}
                </TableBody>
            </Table>
        </Paper>
    )
}

export default Shipment;